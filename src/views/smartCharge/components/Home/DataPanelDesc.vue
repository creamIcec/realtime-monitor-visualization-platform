<script>
export default{
    props:{
        Title: String,
        Tip: String
    }
}
</script>
<template>
    <div class="data-panel-title-container">
        <div class="text-wrapper">
            <h1>{{ Title }}</h1>
            <h3>{{ Tip }}</h3>
        </div>
    </div>
</template>
<style scoped>
    h1,h3{
        width: fit-content;
        height: fit-content;
        padding: 0;
        margin: 0;
    }
    h1{
        font-size: 20px;
    }
    h3{
        font-size: 14px;
    }
    .data-panel-title-container{
        width: 100%;
        height: auto;
    }
    .text-wrapper{
        width: auto;
        height: auto;
        display: flex;
        flex-direction: row;
        column-gap: 10px;
        align-items: end;
    }
</style>