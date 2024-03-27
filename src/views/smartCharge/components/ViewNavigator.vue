<script>
export default{
    props:{
        targetViewName:{
            type: String,
            required: false
        },
        targetViewIcon:{
            type: String,
            required: false
        }
    }
}
</script>

<template>
    <div id="view-navigator-container">
        <div id="content-wrapper">
            <img :src="targetViewIcon" alt="导航图标"/>
            <span>{{ targetViewName }}</span>
        </div>
    </div>
</template>

<style scoped>
    span{
        color: #2c2c2c; /*TODO: 跟随系统*/
    }
    img{
        width: 30%;
        height: 30%;
    }
    #view-navigator-container{
        width: 100%;
        height: 128px;
    }
    #content-wrapper{
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        row-gap: 20px;
        justify-content: center;
        align-items: center;
        background-color: #c9c9c9;
    }
    </style>