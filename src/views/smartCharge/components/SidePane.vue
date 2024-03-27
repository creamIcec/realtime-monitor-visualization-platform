<script>
import ViewNavigator from './ViewNavigator.vue';
export default{
    components:{
        ViewNavigator
    }
}
</script>
<template>
    <div class="view-navigator-container">
        <ViewNavigator targetViewName="总览" targetViewIcon="../assets/images/home.svg"></ViewNavigator>
        <ViewNavigator targetViewName="账户管理" targetViewIcon="../assets/images/account.svg"></ViewNavigator>
        <ViewNavigator targetViewName="财务管理" targetViewIcon="../assets/images/money-check.svg"></ViewNavigator>
        <ViewNavigator targetViewName="电桩管理" targetViewIcon="../assets/images/charging-pile.svg"></ViewNavigator>
        <ViewNavigator targetViewName="操作指南" targetViewIcon="../assets/images/book.svg"></ViewNavigator>
        <ViewNavigator targetViewName="设置" targetViewIcon="../assets/images/settings.svg"></ViewNavigator>   <!--TODO: 改为算法动态生成, 不固定个数-->
    </div>
</template>
<style scoped>
    .view-navigator-container{
        width: 128px;
        height: calc(100% - 80px);
        display: flex;
        flex-direction: column;
        align-items: center;
        column-gap: 0;
    }
</style>