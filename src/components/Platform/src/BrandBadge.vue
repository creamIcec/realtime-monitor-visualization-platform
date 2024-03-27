<script>
export default{
    props:{
        brandIcon:{
            type: String,
            required: false
        },
        brandTitle: String
    }
}
</script>

<template>
    <div class="brand-badge-container">
        <div class="round-corner-badge">
            <img :src="brandIcon" alt=""/>  <!--TODO: alt="品牌标识"-->
            <span class="brand-title">{{ brandTitle }}</span>
        </div>
    </div>
</template>

<style scoped>
    img{
        width: 64px;
        height: 64px;
        display: none; /*TODO*/
    }
    .brand-badge-container{
        width: 300px;
        height: 60px;
    }
    .round-corner-badge{
        width: 100%;
        height: 100%;
        background-color: #f86633;
        border-radius: 35px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
    .brand-title{
        font-size: 24px;
    }
</style>