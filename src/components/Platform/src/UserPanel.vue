<script></script>
<template>
    <div class="user-panel-container">
        <div class="notification-center-btn-wrapper">
            <button class="notification-center-btn">
                <img src="./assets/images/notification.svg" alt="通知中心"/>
            </button>
        </div>
        <div class="user-center-wrapper">
            <img src="./assets/images/user.svg" alt="用户中心" class="dock-button-icon adjust-size"/>
        </div>
    </div>
</template>


<style scoped>
    img{
        width: 100%;
        height: 100%;
    }

    .adjust-size{
        width: 80%;
        height: 80%; /*TODO: 修正图标尺寸以去掉此行*/
    }

    .dock-button-icon{
        position: absolute;
        left: 5px;
        top: 5px;
    }
    .user-panel-container{
        width: 148px;
        height: 42px;
        display: flex;
        flex-direction: row;
        align-items: center;
        column-gap: 5px;
        justify-content: center;
    }
    .notification-center-btn-wrapper{
        width: 32px;
        height: 32px;
        overflow: hidden;
        border-radius: 16px;
    }
    .notification-center-btn{
        width: 100%;
        height: 100%;
        background-color: unset;
        border: none;
    }
    .user-center-wrapper{
        width: 100px;
        height: 42px;
        background-color: #f8a938;
        border-radius: 21px;
    }
</style>