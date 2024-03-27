<script setup>
defineProps({
    title: {
        type: String,
        required: false
    }
})
</script>
<template>
    <div id="header">
        <div>
            <h2 id="title">{{ title }}</h2>
            <div id="user-icon-wrapper">
                <img id="user-icon" src="z" alt="User">
            </div>
        </div>
    </div>
</template>
<style scoped>
#header {
    width: 100%;
    height: 100px;
    background-color: #35155D;
    position: fixed;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    z-index: 100;
}

#title {
    margin: 0;
    font-weight: 600;
    color: #ffffff;
    width: 100%;
    height: fit-content;
}

#user-icon-wrapper{
    position: absolute;
    right: 32px;
    width: 32px;
    height: 100%;
    top: 0;
}

#user-icon{
    width: 100%;
    height: 100%;
}

@media (max-width: 600px) {
    #title {
        padding-left: unset;
        text-align: center;
        font-size: 25px;
    }
}

@media (min-width: 600px) {
    #title {
        margin-left: 25px;
        text-align: left;
        font-size: 40px;
    }
}
</style>
