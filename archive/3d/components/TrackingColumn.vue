<script>
export default{
    methods: {
        setData(data){
            this.data = data;
        }
    },
    props: {
        icon: { type: String, required: false },
        title: "",
        data: "暂无数据"
    }
};
</script>
<template>
     <div class="info-title-wrapper">
        <span style="font-size: 20px; color: #4477CE; font-weight: 600; display: block;">{{ title }}</span>
        <img :src=icon id="speed-meter-icon" class="info-helper-icon" alt="speed">
    </div>
    <span style="font-size: 16px; color: black; display: inline-block;" id="speed">{{ data }}</span>
</template>
<style scoped>
.info-helper-icon{
    width: 32px;
    height: 32px;
    grid-row: 1;
    grid-column: 2;
}
.info-title-wrapper{
    display: grid;
    grid-template-columns: 1fr 1.5fr;
    grid-template-rows: 100%;
}
</style>