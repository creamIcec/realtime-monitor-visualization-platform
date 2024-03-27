<script>
export default{
    props:{
        Name:{
            type: String,
            required: true
        },
        Value:{
            type:String,
            required: false
        },
        HighlightContent:{
            type: Boolean,
            default: false,
            required: false
        }
    },
    computed:{
        dynamicClass(){
            const classes = ['data-item-block-container'];
            if(this.HighlightContent){
                classes.push('highlight');
            }
            return classes;
        }
    },
    mounted(){
        
    }
}
</script>
<template>
    <div :class="dynamicClass">
        <h3>{{ Name }}</h3>
        <h2>{{ Value }}</h2>
    </div>
</template>
<style scoped>

    h3{
        font-size: 24px;
    }

    h2{
        font-weight: 1000;
        color: #2c2c2c;
    }
    .data-item-block-container{
        border-radius: 12px;
        width: 375px;
        height: 120px;
        background-color: #f8a938aa;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }
    .highlight{
        border: 5px solid #ff4b4b;
    }
</style>