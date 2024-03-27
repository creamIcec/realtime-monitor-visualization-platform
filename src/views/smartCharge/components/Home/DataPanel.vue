<script>
import DataItemBlock from './DataItemBlock.vue';
import DataPanelDesc from './DataPanelDesc.vue';
export default{
    components:{
        DataPanelDesc,
        DataItemBlock
    },
    props:{
        Title: String,
        Tip: String,
        CardContents: Array,
        HighlightContent: Boolean
    }
}
</script>
<template>
    <div class="data-panel-container">
        <DataPanelDesc :Title=Title :Tip=Tip></DataPanelDesc>
        <div class="content">
            <DataItemBlock v-for="item in CardContents" :Name="item.name" :Value="item.value" :HighlightContent="HighlightContent"></DataItemBlock>
        </div>
    </div>
</template>
<style scoped>
    .data-panel-container{
        width: 100%;
        height: 130px;
        display: flex;
        flex-direction: column;
        column-gap: 5px;
    }
    .content{
        width: 100%;
        height: 120px;
        display: flex;
        flex-direction: row;
        column-gap: 10px;
        justify-content: space-around;
    }
</style>