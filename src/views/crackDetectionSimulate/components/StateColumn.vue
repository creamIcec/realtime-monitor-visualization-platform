<script>
import "../lib/svg-inject";
import { computed, ref } from 'vue';
function clamp(value, min, max){
    if(value < min){
        return min;
    }else if(value > max){
        return max;
    }
    return value;
}
export default{
    props:{
        icon: {type: String, required: false},
        values:{type: Array,required: true},
        svgInject:{type: Boolean, required: false, default: false}
    },
    setup(props){
        const index = ref(0);   //作为下标
        const currentState = computed({
            get(){
                return props.values[index.value];
            },
            set(level){
                try{
                    level = parseInt(level);
                    index.value = clamp(level, 0, props.values.length - 1);
                }catch(e){
                    console.error("State设置: 请检查传入的值, 确保是一个数字。" + "传入值:" + level);
                }
            }
        });
        const toggleState = function(){
            index.value = (index.value + 1) % props.values.length;
        }
        return{
            currentState,
            toggleState
        }
    },
    mounted(){
        if(this.svgInject){
            const icon = this.$refs.icon;
            SVGInject(icon);
            icon.classList.add("svg-injected");
        }
    }
}
</script>
<template>
    <div class="info-wrapper">
        <div class="icon-wrapper">
            <img ref="icon" :src=icon class="state-icon" alt="signal">
        </div>
        <div class="state-info">
            <span class="state-info-text">{{ currentState }}</span>
        </div>
    </div>
</template>
<style scoped>
.info-wrapper{
    width: 100%;
    height: 100%;
    display: grid;
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 100%;
    gap: 0;
}
.icon-wrapper{
    width: 32px;
    height: 32px;
}
.state-info{
    display: flex;
    align-items: center;
    
}
.state-icon{
    width: 100%;
    height: 100%;
}
.state-info-text{
    display: inline;
    color: var(--font-color);
}
</style>