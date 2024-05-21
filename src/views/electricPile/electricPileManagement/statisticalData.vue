<template>
  <div>
    <div class="title divs">
      <div>
        <h1>统计数据</h1>
      </div>
      <div>
        <p>当前温度：{{ Data.tempureture }}度 当前湿度：{{ Data.humidity }}%</p>
      </div>
    </div>
    <div class="monitor divs">
      <div class="title">
        <div>
          <h2>监控图像概览：</h2>
        </div>
        <div>
          <a-button type="link" size="small" @click="goToNewPage('/more')">更多>></a-button>
        </div>
      </div>
      <div class="imgs">
        <div v-for="(item, key) of Data.img" :key="key">
          <div>
            <p>{{ item.name }}:</p>
          </div>
          <div>
            <img :src="item.image" alt="NoSignal">
          </div>
        </div>
      </div>
    </div>
    <div class="powerConsumption divs">
      <div class="title">
        <div>
          <h2>实时耗电量：</h2>
        </div>
        <div>
          <a-button type="link" size="small" @click="goToNewPage('/more')">更多>></a-button>
        </div>
      </div>
      <div class="Datas">
        <div class="Data">
          <h4>总耗电量:</h4>
          <h1>{{ sumPower }}kW/h</h1>
        </div>
        <div v-for="(item, key) of Data.powerConsumptionData" :key="key" class="Data">
          <h4>{{ item.name }}:</h4>
          <h1>{{ item.power }}kW/h</h1>
        </div>
      </div>
    </div>
    <div class="powerOnSituation divs">
      <div class="title">
        <div>
          <h2>电桩通电情况：</h2>
        </div>
        <div>
          <a-button type="link" size="small" @click="goToNewPage('/more')">告警处理>></a-button>
        </div>
      </div>
      <div class="Datas">
        <div class="Data">
          <div>
            <h3>电站</h3>
          </div>
          <div>
            <h2 :style="{ color: powerIsError ? 'red' : 'green' }">{{ powerIsError ? '存在异常' : '正常' }}</h2>
          </div>
        </div>
        <div v-for="(item, key) of Data.powerIsError" :key='key' class="Data">
          <div>
            <h3>{{ item.name }}</h3>
          </div>
          <div>
            <h2 :style="{ color: item.error ? 'red' : 'green' }">{{ item.error ? '存在异常' : '正常' }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="smokeAlarm divs">
      <div class="title">
        <div>
          <h2>烟雾报警：</h2>
        </div>
        <div>
          <a-button type="link" size="small" @click="goToNewPage('/more')">烟雾处理>></a-button>
        </div>
      </div>
      <div class="Datas">
        <div class="Data">
          <div>
            <div>
              <h3>电站</h3>
            </div>
            <div>
              <h2 :style="{ color: smokeIsError ? 'red' : 'green' }">{{ smokeIsError ? '发生烟雾' : '正常' }}</h2>
            </div>
          </div>
        </div>
        <div v-for="(item, key) of Data.smokeIsError" :key='key' class="Data">
          <div>
            <h3>{{ item.name }}</h3>
          </div>
          <div>
            <h2 :style="{ color: item.error ? 'red' : 'green' }">{{ item.error ? '发生烟雾' : '正常' }}</h2>
          </div>
        </div>
      </div>
    </div>
    <div class="leakageAlarm divs">
      <div class="title">
        <div>
          <h2>漏电情况：</h2>
        </div>
        <div>
          <a-button type="link" size="small" @click="goToNewPage('/more')">漏电处理>></a-button>
        </div>
      </div>
      <div class="Datas">
        <div class="Data">
          <div>
            <div>
              <h3>电站</h3>
            </div>
            <div>
              <h2 :style="{ color: leakageIsError ? 'red' : 'green' }">{{ leakageIsError ? '发生漏电' : '正常' }}</h2>
            </div>
          </div>
        </div>
        <div v-for="(item, key) of Data.leakageIsError" :key='key' class="Data">
          <div>
            <h3>{{ item.name }}</h3>
          </div>
          <div>
            <h2 :style="{ color: item.error ? 'red' : 'green' }">{{ item.error ? '发生漏电' : '正常' }}</h2>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { columns } from '@/views/bpm/form/form.data';

// import { Button } from "ant-design-vue"

export default {
  data() {
    return {
      Data: null,
      powerIsError: null,
      smokeIsError: null,
      leakageIsError: null,
    }
  },
  created() {
    const Data = {
      tempureture: 20,
      humidity: 75,
      img: [
        {
          name: '区域1',
          image: 'src/views/electricPile/electricPileManagement/img/house-753270_1920.jpg'
        },
        {
          name: '区域2',
          image: 'src/views/electricPile/electricPileManagement/img/pexels-felixmittermeier-956981.jpg'
        },
        {
          name: '区域3',
          image: 'src/views/electricPile/electricPileManagement/img/pexels-jplenio-3262249.jpg'
        },
        {
          name: '区域4',
          image: 'src/views/electricPile/electricPileManagement/img/pexels-michal-osinski-1863102-3454270.jpg'
        },
        {
          name: '区域5',
          image: 'src/views/electricPile/electricPileManagement/img/pexels-pixabay-326055.jpg'
        }
      ],
      powerConsumptionData: [
        {
          name: '区域1',
          power: 450
        },
        {
          name: '区域2',
          power: 200
        },
        {
          name: '区域3',
          power: 300
        },
        {
          name: '区域4',
          power: 150
        },
        {
          name: '区域5',
          power: 700
        }
      ],
      powerIsError: [
        {
          name: '区域1',
          error: false,
        },
        {
          name: '区域2',
          error: true,
        },
        {
          name: '区域3',
          error: false,
        },
        {
          name: '区域4',
          error: false,
        },
        {
          name: '区域5',
          error: false,
        },
      ],
      smokeIsError: [
        {
          name: '区域1',
          error: false,
        },
        {
          name: '区域2',
          error: false,
        },
        {
          name: '区域3',
          error: false,
        },
        {
          name: '区域4',
          error: false,
        },
        {
          name: '区域5',
          error: false,
        },
      ],
      leakageIsError: [
        {
          name: '区域1',
          error: false,
        },
        {
          name: '区域2',
          error: true,
        },
        {
          name: '区域3',
          error: false,
        },
        {
          name: '区域4',
          error: true,
        },
        {
          name: '区域5',
          error: false,
        },
      ]
    };
    this.Data = Data;
    this.powerIsError = false;
    this.smokeIsError = false;
    this.leakageIsError = false;
    this.pIsError();
    this.sIsError();
    this.lIsError();
  },
  methods: {
    goToNewPage(router) {
      this.$router.push(router);
    },
    pIsError() {
      for (let index in this.Data.powerIsError) {
        if (this.Data.powerIsError[index].error === true) {
          this.powerIsError = true;
          break;
        }
      }
    },
    sIsError() {
      for (let index in this.Data.smokeIsError) {
        if (this.Data.smokeIsError[index].error === true) {
          this.smokeIsError = true;
          break;
        }
      }
    },
    lIsError() {
      for (let index in this.Data.leakageIsError) {
        if (this.Data.leakageIsError[index].error === true) {
          this.leakageIsError = true;
          break;
        }
      }
    },
    handleDateChange(dates, dateStrings) {
      console.log(dates, dateStrings);
    }
  },
  mounted() {

  },
  components: {

  },
  computed: {
    sumPower() {
      return this.Data.powerConsumptionData.reduce((total, item) => total + item.power, 0);
    }
  },
  watch: {

  },
}
</script>

<style scoped>
.title {
  display: flex;
  justify-content: space-between;
}

.imgs {
  background-color: #cccccc;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  padding: 20px;
  margin-left: 5vh;
  margin-right: 5vh;
}

.Datas {
  background-color: #cccccc;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;
  padding: 10px;
  margin-left: 5vh;
  margin-right: 5vh;
}

.Data {
  display: grid;
  grid-template-columns: 1;
  grid-template-rows: 2;
  place-items: center;
  padding: 10px;
  margin-left: 5vh;
  margin-right: 5vh;
  background-color: #ebebeb;
  border-radius: 10px;
  width: 20vh;
}

.divs {
  margin-top: 10px;
  margin-bottom: 10px;
}

img {
  width: 25vh;
  height: auto;
  border-radius: 10px;
}

h1 {
  font-size: 24px;
}
</style>