/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
/*const ak = '5gD6rxkR6DTV0vBEsitMD9KtQIwE580R'
const path = 'https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=5gD6rxkR6DTV0vBEsitMD9KtQIwE580R'
import * as MapObjs from 'https://api.map.baidu.com/api?v=1.0&&type=webgl&ak=5gD6rxkR6DTV0vBEsitMD9KtQIwE580R'
*/

class Drone {
  constructor(position) {
    this.position = position
    this.icon = null
  }

  setIcon = function (icon) {
    this.icon = icon
  }

  setPosition = function () {
    this.position = position
  }

  display = function () {}
}

class WebMap {
  constructor(container, positionRaw) {
    //暂不启用参数检查, 只简单判空
    if (container != null && positionRaw != null) {
      this.map = new BMapGL.Map(container)
      this.position = positionRaw
      this.point = new BMapGL.Point(this.position[0], this.position[1])
      this.tilt = 55
      this.zoom = 20
      this.points = []
      this.trackAnimation = null
      this.entityIcon = null
      this.entityMarker = null
    }
  }

  display = function () {
    if (this.map != null) {
      this.map.centerAndZoom(this.point, this.zoom)
      this.map.setTilt(this.tilt)
      return 0
    } else {
      return this.handleError()
    }
  }

  animatePath = function (refresh, forceStopIfPlaying) {
    if (forceStopIfPlaying && this.trackAnimation != null) {
      this.trackAnimation.cancel()
    }
    if (this.points.length <= 1) {
      return
    }
    if (refresh) {
      this.refreshOverlay()
    }
    const pathPoints = []
    console.log(this.points)
    this.sortPathPoints()
    for (let i = 0; i < this.points.length; i++) {
      pathPoints.push(new BMapGL.Point(this.points[i].getLongitude(), this.points[i].getLatitude()))
    }
    const polyline = new BMapGL.Polyline(pathPoints, { strokeColor: 'green', strokeWeight: 5, strokeOpacity: 0.8 })
    this.trackAnimation = new BMapGLLib.TrackAnimation(this.map, polyline, {
      overallView: false, // 动画完成后自动调整视野到总览
      tilt: this.tilt, // 轨迹播放的角度，默认为55
      duration: 5000, // 动画持续时长，默认为10000，单位ms
      delay: 0, // 动画开始的延迟，默认0，单位ms
      zoom: this.zoom
    })
    this.trackAnimation.start()
  }

  handleError = function () {
    return -1
  }

  addPathPoint = function (point) {
    this.points.push(point)
  }

  setEntityIcon = function (imgPath) {
    const size = 24
    this.entityIcon = new BMapGL.Icon(imgPath, new BMapGL.Size(size, size), {
      // 指定定位位置。
      // 当标注显示在地图上时，其所指向的地理位置距离图标左上
      // 角各偏移*像素和*像素。您可以看到在本例中该位置即是
      // 图标中央下端的尖角位置。
      anchor: new BMapGL.Size(size / 2, size / 2),
      // 设置图片偏移。
      // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
      // 需要指定大图的偏移位置，此做法与css sprites技术类似。
      imageOffset: new BMapGL.Size(0, 0) // 设置图片偏移
    })
    let baiduPoint = new BMapGL.Point(0, 0)
    this.entityMarker = new BMapGL.Marker(baiduPoint, { icon: this.entityIcon })
    this.map.addOverlay(this.entityMarker)
    this.entityMarker.hide()
  }

  //创建标注对象并设置位置
  setEntityPosition = function (point) {
    let baiduPoint = new BMapGL.Point(point.getLongitude(), point.getLatitude())
    this.entityMarker.setPosition(baiduPoint)
  }

  drawStaticPath = function (config) {
    const refresh = config.refresh,
      showEntity = config.showEntity,
      debug = config.debug,
      color = config.color
    if (debug) {
      this.debugDrawPoint(refresh, color)
      return
    }
    if (this.points.length <= 1) {
      return
    }
    if (refresh) {
      this.refreshOverlay()
    }
    //console.log(this.points);
    this.sortPathPoints()
    for (let i = 0; i < this.points.length - 1; i++) {
      //pathPoints.push(new BMapGL.Point(this.points[i].getLongitude(), this.points[i].getLatitude()));
      this.map.addOverlay(
        new BMapGL.Polyline(
          [
            new BMapGL.Point(this.points[i].getLongitude(), this.points[i].getLatitude()),
            new BMapGL.Point(this.points[i + 1].getLongitude(), this.points[i + 1].getLatitude())
          ],
          { strokeColor: color, strokeWeight: 3, strokeOpacity: 0.8 }
        )
      )
    }

    if (showEntity) {
      this.map.addOverlay(this.entityMarker)
    }
  }

  debugDrawPoint = function (refresh, color) {
    if (refresh) {
      this.refreshOverlay()
    }
    const colorString = color.toString()
    const pathPoints = []
    this.sortPathPoints()
    const pointMarker = new BMapGL.Icon('./resources/point' + colorString.toLowerCase() + '.png', new BMapGL.Size(4, 4), {
      anchor: new BMapGL.Size(0, 0)
    })
    for (let i = 0; i < this.points.length; i++) {
      pathPoints.push(new BMapGL.Point(this.points[i].getLongitude(), this.points[i].getLatitude()))
      this.map.addOverlay(new BMapGL.Marker(pathPoints[i], { icon: pointMarker }))
    }
  }

  additionalDrawStaticPath = function (newPoints, obj) {
    const showEntity = obj.showEntity,
      debug = obj.debug,
      color = obj.color
    if (debug) {
      this.debugDrawPoint(false)
      return
    }
    const sorted = this.sortPoints(newPoints)
    const pathPoints = []
    for (let i = 0; i < sorted.length; i++) {
      pathPoints.push(new BMapGL.Point(sorted[i].getLongitude(), sorted[i].getLatitude()))
    }
    this.map.addOverlay(new BMapGL.Polyline(pathPoints, { strokeColor: color, strokeWeight: 5, strokeOpacity: 0.8 }))
    if (showEntity) {
      if (!this.entityMarker.isVisible()) {
        this.entityMarker.show()
      }
    }
  }

  sortPoints = function (points) {
    return points.sort((a, b) => {
      return a.getTime() - b.getTime()
    })
  }

  sortPathPoints = function () {
    this.points.sort((a, b) => {
      return a.getTime() - b.getTime()
    })
  }

  refreshOverlay = function () {
    this.map.clearOverlays()
  }

  getPathPoints = function () {
    return this.points
  }

  getMap = function () {
    return this.map
  }
}

export { Drone, WebMap }
