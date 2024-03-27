<script>
    import BrandBadge from './BrandBadge.vue';
    import UserPanel from './UserPanel.vue';
    export default{
        components:{
            BrandBadge,
            UserPanel
        }
    }
</script>

<template>
    <div class="top-pane-container">
        <BrandBadge class="brand-badge" brandIcon="" brandTitle="电桩检测系统演示"></BrandBadge>
        <UserPanel class="user-panel"></UserPanel>
    </div>
</template>


<style scoped>
    .top-pane-container{
        width: 100%;
        height: 80px;
        background-color: #c9c9c9;
    }

    .brand-badge{
        position: absolute;
        left: 27px;
        top: 10px;
    }

    .user-panel{
        position: absolute;
        right: 16px;
        top: 19px;
    }
</style>