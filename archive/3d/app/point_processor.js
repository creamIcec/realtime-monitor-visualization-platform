//已知Bug
//1. 使用测试点集时, 如果模拟的发送间隔时间太短(<2000ms), 会导致不能正常重绘线条
//可能的解决方案:
//将是否发送绑路请求的判断移至客户端, 服务端只负责发送请求, 即可保证本地线条绘制是流畅的
//2. 百度地图返回的绑路生成的点, 时刻和发送的点较早的那一个相同, 会导致线条回弹
//可能的解决方案:
//对绑路传回来的点手动计算时间, 根据发送的两个点的速度差和时间差
//**********************测试点集*************************//

import { Drone, WebMap } from './map'
import Experience from './experiences/user_experience'
import PointHandler from './utils/interpolate'
import { Point } from './utils/point'

let isLoaded = false
const port = '8080'
const collectionNames = ['test1', 'test2']
const webSocketPointUrl = 'ws://localhost:' + port + '/get_simulating_point'
const webSocketImageUrl = 'ws://localhost:' + port + '/get_simulate_image'
//const wsPointServer = new WebSocket(webSocketPointUrl)
//const wsImageServer = new WebSocket(webSocketImageUrl);
const rawPathPoints = []

let webMap

const drawQueueNormal = []
const drawQueueAdditional = []

const interval = 50
const debug = false //是否调试(只显示点而不连线和显示图标)

class DrawHandler {
  count
  interrupted

  constructor(initialValue) {
    this.count = initialValue
    this.interrupted = false
  }

  increase = function () {
    this.count = this.count + 1
  }

  resetTo0 = function () {
    this.count = 0
  }

  setInterrupted = function () {
    this.interrupted = true
  }
}

function fetchVehicleName() {
  const req = new XMLHttpRequest()
  const requestURL = 'http://localhost:8081/add_and_get_point?'
  const requestQuery = 'longitude=' + longitude + '&' + 'latitude=' + latitude + '&' + 'rotation=' + rotation + '&' + 'time=' + _time
  httpRequest.open('GET', requestURL + requestQuery, true)
  httpRequest.setRequestHeader('content-type', 'application/json')
  httpRequest.send()
  //获取数据后的处理
  httpRequest.onreadystatechange = () => {}
  req.send()
}

function drawPath(points, additional = false, debug = false, updateEntityPosition = true, color = 'green') {
  //console.log(points);
  if (!additional) {
    let counter = new DrawHandler(0)
    const drawCall = setInterval(draw, interval)
    function draw() {
      if (!counter.interrupted && counter.count < points.length - 1) {
        const point = new Point(
          points[counter.count]['longitude'],
          points[counter.count]['latitude'],
          points[counter.count]['rotation'],
          points[counter.count]['time']
        )
        webMap.addPathPoint(point)
        if (updateEntityPosition) {
          webMap.setEntityPosition(point)
        }
        webMap.drawStaticPath({ refresh: true, showEntity: true, debug: debug, color: color })
        counter.increase()
      } else {
        clearInterval(drawCall)
        //delete counter;
      }
    }
    drawQueueNormal.push(counter)
  } else {
    let counter = new DrawHandler(0)
    const drawCall = setInterval(drawAdditional, interval)
    function drawAdditional() {
      if (!counter.interrupted && counter.count < points.length - 1) {
        const point1 = new Point(
          points[counter.count]['longitude'],
          points[counter.count]['latitude'],
          points[counter.count]['rotation'],
          points[counter.count]['time']
        )
        const point2 = new Point(
          points[counter.count + 1]['longitude'],
          points[counter.count + 1]['latitude'],
          points[counter.count + 1]['rotation'],
          points[counter.count + 1]['time']
        )
        if (updateEntityPosition) {
          webMap.setEntityPosition(point1)
        }
        webMap.additionalDrawStaticPath([point1, point2], { debug: debug, color: color, showEntity: true })
        if (updateEntityPosition) {
          webMap.setEntityPosition(point2)
        }
        counter.increase()
      } else {
        clearInterval(drawCall)
        //delete counter;
      }
    }
    drawQueueAdditional.push(counter)
  }
}

function updatePositionInfo(point) {
  if (!isLoaded) {
    return
  }
  const positionInfoContainer = document.querySelector('#position')
  positionInfoContainer.innerHTML = point.getLongitude() + ', ' + point.getLatitude()
}

function updateSpeedInfo() {
  if (!isLoaded) {
    return
  }
  const meter = document.querySelector('#speed')
  setInterval(() => {
    meter.innerHTML = Math.random() * 10 + 'm/s'
  }, 1000)
}

function stopInterpolate(obj) {
  for (let i = 0; i < drawQueueNormal.length; i++) {
    drawQueueNormal[i].setInterrupted()
  }
  for (let i = 0; i < drawQueueAdditional.length; i++) {
    drawQueueAdditional[i].setInterrupted()
  }
}

/*wsPointServer.onopen = function () {
  console.log('开始连接服务器模拟点通道')
}

wsPointServer.onmessage = function (event) {
  //逻辑:
  //1. 获取到第0个点时只绘制图标，不向任何方向移动;
  //2. 获取到第1个点时开始生成第0个点和第1个点的插值, 并沿插值方向移动
  //3. 获取到第2个点时立刻结束插值绘制, 将图标"传送"到第1个点, 并用线段连接第0个点和第1个点, 开始绘制第2个点和第1个点之间的插值
  //4. 从此开始, 获取到第n(n > 2)个点时立刻结束n-1点和n-2点的插值绘制, 将图标传送到第n-1个点, 并用线段连接第n-1和n-2个点, 开始绘制n和n-1之间的插值

  const { data } = event
  const result = JSON.parse(data)

  let points
  if (result.hasOwnProperty('points')) {
    points = result['points']
  } else {
    points = [result]
  }

  let point

  for (let i = 0; i < points.length; i++) {
    if (rawPathPoints.length === 0) {
      point = new Point(points[i].longitude, points[i].latitude, points[i].rotation, points[i].time)
      rawPathPoints.push(point) //1
      drawPath(points.flat(1), true, debug, true, 'green')
    } else if (rawPathPoints.length === 1) {
      point = new Point(points[i].longitude, points[i].latitude, points[i].rotation, points[i].time)
      const interpolatedPoints = PointHandler.getInterpolatedPoints(rawPathPoints[rawPathPoints.length - 1], point)
      //console.log(interpolatedPoints);
      rawPathPoints.push(point)
      drawPath(interpolatedPoints, true, debug, true, 'green') //2
    } else {
      point = new Point(points[i].longitude, points[i].latitude, points[i].rotation, points[i].time)
      stopInterpolate({ normal: true, additional: true })
      //console.log(rawPathPoints[rawPathPoints.length - 1].toString() + " " + rawPathPoints[rawPathPoints.length - 2].toString());
      const interpolatedPoints = PointHandler.getInterpolatedPoints(rawPathPoints[rawPathPoints.length - 1], point)
      //console.log(interpolatedPoints);
      rawPathPoints.push(point)
      drawPath(interpolatedPoints, true, debug, true, 'green')
      for (let j = rawPathPoints.length - 2; j > 0; j--) {
        drawPath([rawPathPoints[j - 1], rawPathPoints[j]], true, debug, false, 'green')
      } //3，4
    }

    updatePositionInfo(point)
    updateSpeedInfo()
  }
}

wsPointServer.onerror = function (event) {
  console.error(event.data)
}

wsPointServer.onclose = function (event) {}
*/

/*wsImageServer.onopen = function(){
    console.log("开始连接服务器模拟图像通道");
}

wsImageServer.onmessage = function(event){
  const { data } = event;
  renderImage(data, document.getElementById("img-holder"));
}*/

export function loadMap() {
  const mapElement = document.querySelector('#map-content')
  console.log('加载地图')
  if (mapElement != null) {
    const origin = [118.648441, 32.082101]
    webMap = new WebMap(mapElement, origin)
    webMap.display()
    webMap.setEntityIcon('./resources/drone.png')
    wsPointServer.send(collectionNames[1])
    //wsImageServer.send("hello");
    //fetchVehicleName();
    Experience.initDragBehaviour(webMap.getMap(), document.querySelector('#header'), document.getElementsByClassName('button-wrapper'))
    isLoaded = true
  }
  //points = requestTestPoints();
}

window.onload = () => {}

window.onclose = () => {
  //TODO 是否有其他方式断开WebSocket连接? 例如, 用户通过导航回到了主页
  wsPointServer.close(1000, '用户退出页面。')
}
