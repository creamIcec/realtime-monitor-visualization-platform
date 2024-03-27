<template>
  <div>
    <!--主内容开始-->
    <div id="container">
      <TopPane Title="裂纹检测系统演示"></TopPane>
      <!--模块-->
      <div id="main">
        <div class="left-side">
          <div class="main_visual">
            <div class="flicking_con flicking_cons">
              <div class="flicking_inner flicking_inners">
                <a href="#">1</a>
                <a href="#">2</a>
                <a href="#">3</a>
              </div>
            </div>
            <a href="javascript:;" id="btn_prev"></a>
            <a href="javascript:;" id="btn_next"></a>
            <div class="main_image">
              <ul>
                <li>
                  <div class="mode">
                    <ul class="square">
                      <div class="slide">
                        <div id="slides">
                          <div class="scroimg" style="left:0px;">
                            <a href="#"><img src="../images/img1.jpg" width="221" height="331" alt=""></a>
                          </div>
                          <div class="scrotext" style="bottom:0px;">
                            <h4><a href="#">检测结果生成示例图</a></h4>
                            <p>1111</p>
                          </div>
                          <div class="scroimg" style="left: -950px;">
                            <a href="#"><img src="../images/img2.jpg" width="221" height="331" alt=""></a>
                          </div>
                          <div class="scrotext" style="bottom: -950px;">
                            <h4><a href="#">检测结果生成示例图</a></h4>
                            <p>2222</p>
                          </div>
                          <div class="scroimg" style="left: -950px;">
                            <a href="#"><img src="../images/img1.jpg" width="221" height="331" alt=""></a>
                          </div>
                          <div class="scrotext" style="bottom:-950px;">
                            <h4><a href="#">检测结果生成示例图</a></h4>
                            <p>3333</p>
                          </div>
                          <div class="scroimg" style="left:-950px;">
                            <a href="#"><img src="../images/img2.jpg" width="221" height="331" alt=""></a>
                          </div>
                          <div class="scrotext" style="bottom:-950px;">
                            <h4><a href="#">检测结果生成示例图</a></h4>
                            <p>4444</p>
                          </div>
                          <div class="scroimg" style="left:-950px;">
                            <a href="#"><img src="../images/img1.jpg" width="221" height="331" alt=""></a>
                          </div>
                          <div class="scrotext" style="bottom:-950px;">
                            <h4><a href="#">检测结果生成示例图</a></h4>
                            <p>4444</p>
                          </div>
                          <div class="scroimg" style="left:-950px;">
                            <a href="#"><img src="../images/img2.jpg" width="221" height="331" alt=""></a>
                          </div>
                          <div class="scrotext" style="bottom: -950px;">
                            <h4><a href="#">检测结果生成示例图</a></h4>
                            <p>5555</p>
                          </div>
                        </div>
                        <!--左右按钮-->
                        <span id="prev"></span>
                        <span id="next"></span>
                        <div id="pagination">
                              <span onclick="gopaly(0)" onfocus="this.blur();" class="current">1</span>
                              <span onclick="gopaly(1)" onfocus="this.blur();">2</span>
                              <span onclick="gopaly(2)" onfocus="this.blur();">3</span>
                              <span onclick="gopaly(3)" onfocus="this.blur();">4</span>
                              <span onclick="gopaly(4)" onfocus="this.blur();">5</span>
                              <span onclick="gopaly(5)" onfocus="this.blur();">6</span>
                            </div>
                        <div class="txt">示例</div>
                      </div>
                      <li>
                        <div class="light-r img action-block">
                          <h2>路线模拟</h2>
                          <div class="icon"></div>
                        </div>
                        <span><img src="../images/f1.jpg" width="226" height="158"></span>
                      </li>
                      <li>
                        <div class="light-r red img action-block">
                          <h2>调节参数</h2>
                          <div class="icon"></div>
                        </div>
                        <span><img src="../images/f2.jpg" width="226" height="158"></span>
                      </li>
                      <div class="deep-b action-block">
                        <div class="messagge">
                          <h2>预训练结果精确度</h2>
                          <p>预训练模型的精确度是指在训练阶段使用大量的通用数据进行预训练后，模型在特定任务上的性能表现。</p>
                        </div>
                        <div class="bbs"><img src="../images/bbs.png" width="117" height="115" alt="" /></div>
                      </div>
                    </ul>
                  </div>
                  <div class="mode m-right">
                    <ul class="square">
                      
                      <li>
                        <div class="green img action-block">
                          <h2>在线裂缝检测</h2>
                          <div class="icon"></div>
                        </div>
                        <span><img src="../images/f1.jpg" width="226" height="158"></span>
                      </li>
                      <div class="chart-container">
                        <canvas id="myChart" ref="myChart" style="width: 1000px; height: 700px;"></canvas>
                      </div>
                    </ul>
                  </div>
                </li>
                <li>2</li>
                <li>3</li>
              </ul>
            </div>
          </div>

        </div>
        <!--右侧-->
        <div class="right-side">
          <!--日期-->
          <div class="date">
            <div class="d-top">
              <h2>模型选择</h2>
              <a href="#" class="prev"></a>
              <a href="#" class="next"></a>
            </div>
            <div class="d-con">
              <span class="当前模型">当前模型：YOLOv5s（小模型）</span>
              <span class="全部模型"><br>所有模型：YOLOv5s（小模型）<br>YOLOv5m（中等模型）<br>YOLOv5l（大模型）<br>YOLOv5x（超大模型）</span>
            </div>
          </div>
          <!--文件上传-->
          <div class="date">
            <div class="d-top">
              <h2>文件上传</h2>
              <a href="#" class="add"></a>
            </div>
            <div class="contact">
              <ul>
                <li class="xz">
                  <div>
                    <!--<div class="toux"><img src="../images/doctor.png" alt=""></div>-->
                    <span class="name">请上传文件</span>
                    <a href="#" class="voice"></a>
                    <a href="#" class="edtior"></a>
                  </div>
                  <ul>
                    <textarea cols="" rows="" class="textarea">请输入您的信息...</textarea>
                    <a href="#" class="bar">发送消息</a>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
          <!--个人消息-->
          <div class="date">
            <div class="d-top">
              <h2 class="xiaox">信息处理<em class="r-dot"></em></h2>
            </div>
            <div class="infor">
              <span>您有一份数据集需要处理
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!--主内容结束-->
  </div>
</template>


<script>
import '/src/views/crackDetection/js/jquery-1.7.1.min.js';
import '/src/views/crackDetection/js/jquery.mousewheel.js';
import '/src/views/crackDetection/js/jquery.jscrollpane.min.js';
import '/src/views/crackDetection/js/jquery.event.drag-1.5.min.js';
import '/src/views/crackDetection/js/jquery.touchSlider.js';
import '/src/views/crackDetection/js/jquery.nicescroll.js';
import '/src/views/crackDetection/js/slide.js';


import '/src/views/crackDetection/css/jquery.jscrollpane.css';
import '/src/views/crackDetection/css/jquery.jscrollpane.css';
import '/src/views/crackDetection/css/layout.css';
import axios from "axios";
import Chart from 'chart.js/auto';

import ActionBlock from "./components/ActionBlock.vue";

import { TopPane } from '@/components/Platform'

export default {
  components: {
    TopPane
  },
  data() {
    return {
      chartData: {
        labels: ['2023-09-20', '2023-09-21', '2023-09-22', '2023-09-23', '2023-09-24', '2023-09-25', '2023-09-26', '2023-09-27'],
        datasets: [{
          label: '当日检测图片数量',
          data: [366, 121, 521, 1420, 912, 132, 1314, 842],
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1
        }]
      }
    };
  },

  mounted() {
    this.updateChart(); // 在组件挂载后调用updateChart方法以绘制图表

    // 为左右按钮添加事件监听器
    document.getElementById('prev').addEventListener('click', () => {
      const newIndex = (this.currentImageIndex - 1 + this.images.length) % this.images.length;
      this.showImage(newIndex);
    });

    document.getElementById('next').addEventListener('click', () => {
      const newIndex = (this.currentImageIndex + 1) % this.images.length;
      this.showImage(newIndex);
    });

    // 获取所有的图片元素和相应的文本元素
    this.images = document.querySelectorAll('.scroimg');
    this.texts = document.querySelectorAll('.scrotext');

    this.currentImageIndex = 0; // 当前显示的图片索引
  },

  methods: {
    updateChart() {
      const ctx = document.getElementById('myChart').getContext('2d');
      const myChart = new Chart(ctx, {
        type: 'line',
        data: this.chartData,
        options: {
          scales: {
            y: {
              beginAtZero: true,
              title: {
                display: true,
                text: '已检测图片数量'
              }
            },
            x: {
              title: {
                display: true,
                text: '截止时间'
              }
            }
          }
        }
      });
    },

    showImage(index) {
      this.images[this.currentImageIndex].style.display = 'none';
      this.texts[this.currentImageIndex].style.display = 'none';
      this.images[index].style.display = 'block';
      this.texts[index].style.display = 'block';
      this.currentImageIndex = index;
    },
  }
}

</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  display: flex;
  align-items: flex-start;
}

.content {
  flex-grow: 1;
  display: flex;
}

.action-block{
  border-radius: 12px;
}
</style>
