<script>
import { MapHandler } from '../app/map_handler';
import Button from './Button.vue';
import Switcher from './Switcher.vue';
export default{
    props:{
        mainContent: {type: String, required: false},
        subContent: {type: String, required: false},
        mapHandler: {type: MapHandler, required: true},
    },
    mounted(){
        const themeSwitch = this.$refs.themeSwitch;
        themeSwitch.toggle();
    },
    components:{
        Button,
        Switcher
    },
    methods:{
        displayPopup(){
            const popup = this.$refs["notification-popup"];
            popup.style.visibility = (popup.style.visibility == "hidden" ? "visible" : "hidden");
        }
    }
}
</script>
<template>
    <div>
        <div>
            <div ref="titleWrapper" id="title-wrapper" class="title-wrapper">
                <h2 ref="mainContent" id="main-content" class="title">{{ mainContent }}</h2>
                <h2 ref="subContent" id="sub-content" class="title">{{ subContent }}</h2>
            </div>
            <Switcher ref="themeSwitch" id="mode-switch" :mapHandler="this.mapHandler"></Switcher>
            <Button class="top-button" id="user" pos="top" action="user" icon="./src/views/crackDetectionSimulate/resources/user.svg" :standAlone=true adjustSize="80%"></Button>
            <Button class="top-button" id="notification" pos="top" action="notification" icon="./src/views/crackDetectionSimulate/resources/notification.svg" :standAlone="true" @click="displayPopup()"></Button>
        </div>
        <div ref="notification-popup" class="notification-popup" style="visibility: hidden;">
            <div class="notification-content">通知中心</div>
        </div>
    </div>
</template>
<style scoped>

.notification-popup{
    position: absolute;
    width: 300px;
    height: 600px;
    right: var(--right-area-pos);
    top: var(--header-top-pos);
    z-index: 98;
}

.notification-content{
    position: absolute;
    width: 100%;
    height: calc(600px - var(--top-button-size));
    background-color: #fff;
    top: calc(var(--header-top-pos) + var(--top-button-size) - 10px);
    border-radius: 20px 0 20px 20px;
    padding: 15px 0 0 10px;
    font-weight: 600;
    letter-spacing: 1px;
}

#title-wrapper{
    width: fit-content;
    height: 100px;
    position: absolute;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    column-gap: 10px;
    align-items: flex-start;
    z-index: 100;

    border-radius: 20px;
    border: 1px solid rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    box-shadow: 0px 8px 32px 0px rgba(0, 0, 0, 0.37);
    margin-top: 0.5%;
    margin-left: 1%;

    background: linear-gradient(135deg, var(--header-color-start), var(--header-color-end)),
                linear-gradient(270deg, var(--header-color-end) 20%, var(--header-color-start) 80%);

    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
}

.title{
    color: var(--font-color);
    padding-block: 0;
    margin-block: 0;
}

#main-content {
    margin: 0;
    font-weight: 600;
    width: 100%;
    height: fit-content;
    margin-block-start: 0;
    margin-block-end: 0;
}

.top-button{
    position: absolute;
    width: var(--top-button-size);
    height: var(--top-button-size);
    display: flex;
    z-index: 100;
    justify-content: center;
    align-items: center;
}

#notification{
    top: var(--header-top-pos);
    right: var(--right-area-pos);
}

#user{
    top: var(--header-top-pos);
    right: calc(var(--right-area-pos) + var(--top-button-size));
    margin-right: 10px;
}

#mode-switch{
    top: var(--header-top-pos);
    right: calc(var(--right-area-pos) + 2 * var(--top-button-size) + 10px);
    z-index: 99;
    width: 150px;
    height: var(--top-button-size);
    background-color: var(--controller-color-start);
    margin-right: 10px;
}

@media (max-width: 600px) {
    #title {
        padding-left: unset;
        text-align: center;
        font-size: 20px;
    }
}

@media (min-width: 600px) {
    #title {
        text-align: left;
        font-size: 36px;
    }
}
</style>