<script>
import { TopPane } from "@/components/Platform";
import SidePane from "./components/SidePane.vue";
import HomeView from "./components/Home/HomeView.vue";
export default{
  components:{
    TopPane,
    SidePane,
    HomeView
}
}
</script>

<template>
  <div>
    <TopPane id="top-pane" Title="电桩检测系统演示"></TopPane>
    <HomeView id="home"></HomeView> <!--TODO: 改为动态切换-->
    <!--<SidePane id="side-pane"></SidePane>-->
  </div> 
</template>

<style scoped>
#top-pane{
  position: absolute;
  top: 0;
  left: 0;
}
#home{
  position: absolute;
  top: 80px;
  left: 0px;  /*TODO: 128px*/
}
#side-pane{
  position: absolute;
  top: 80px;
  left: 0;
}
</style>
