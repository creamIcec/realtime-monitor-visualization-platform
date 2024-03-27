<script>
import "../lib/svg-inject";
export default{
    props:{
        type:{
            type: String, required: true,
            validator: (value) => {
                return ['vertical', 'horizontal'].includes(value);
            }
        },
        icon1:{type: String, required: false},
        icon2:{type: String, required: true},
        alt1:{type: String,required: false},
        alt2:{type: String, required: true},
        svgInject:{type: Boolean, required: false, default: true},
    },
    mounted(){
        const wrapper = this.$refs.wrapper;
        const part0 = this.$refs.part0;
        const part1 = this.$refs.part1;
        if(this.type == 'vertical'){
            wrapper.classList.add("switcher-v");
            part0.classList.add("switcher-up-part");
            part1.classList.add("switcher-down-part");
        }else if(this.type == 'horizontal'){
            wrapper.classList.add("switcher-h");
            part0.classList.add("switcher-left-part");
            part1.classList.add("switcher-right-part");
        }
        if(this.svgInject){
            const iconImage0 = this.$refs.part0Icon;
            const iconImage1 = this.$refs.part1Icon;
            SVGInject(iconImage0);
            SVGInject(iconImage1);
            iconImage0.classList.add("svg-injected");
            iconImage1.classList.add("svg-injected");
        }
    },
    methods:{
        toggle(part){
            const referee = this.$refs['part' + part];
            referee.classList.toggle("switcher-activated");
            console.log(part);
        }
    }
}
</script>
<template>
    <div class="switcher">
        <div ref="wrapper" class="switcher-container">
            <button @click="this.toggle(0)" class="" ref="part0">
                <img :src="icon1" :alt="alt1" class="icon" ref="part0Icon" />
            </button>
            <button @click="this.toggle(1)" class="" ref="part1">
                <img :src="icon2" :alt="alt2" class="icon" ref="part1Icon" />
            </button>
        </div>
    </div>
</template>
<style scoped>
    .switcher{
        display: flex;
        align-items: center;
        justify-content: center;
        width: fit-content;
        height: fit-content;
        padding-bottom: 10px;
        border-radius: 20px;
        background: linear-gradient(135deg, var(--controller-color-start), var(--controller-color-end)),
                    linear-gradient(270deg, var(--controller-color-end) 20%, var(--controller-color-start) 80%);
        box-shadow: -3px -3px 3px -1px var(--shadow-start),
                3px 3px 3px -1px var(--shadow-end);
    }
    .switcher-container{
        display: grid;
        align-items: center;
        justify-content: center;
        padding: 5px;
    }
    .switcher-h{
        height: var(--left-area-button-size);
        width: calc(2 * var(--left-area-button-size) + 10px);
        grid-template-columns: calc(50% - 5px) calc(50% - 5px);
        grid-template-rows: 100%;
        column-gap: 10px;
    }
    .switcher-v{
        width: var(--left-area-button-size);
        height: calc(2 * var(--left-area-button-size) + 10px);
        grid-template-rows: 50% 50%;
        grid-template-columns: 100%;
        row-gap: 10px;
    }
    button{
        border: none;
        border-radius: 10px;
        background-color: var(--button-color);
        width: 80%;
        height: 80%;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 100;
        cursor: pointer;
        box-shadow: -5px -5px 5px -1px var(--shadow-start),
                    5px 5px 5px -1px var(--shadow-end);
        box-sizing: content-box;
    }
    .icon{
        width: 80%;
        height: 80%;
    }
    button.switcher-activated{
        box-shadow: inset -5px -5px 5px -1px var(--shadow-start),
                    inset 5px 5px 5px -1px var(--shadow-end);
    }
    .switcher-up-part{
        grid-row: 1;
        grid-column: 1;
    }
    .switcher-down-part{
        grid-row: 2;
        grid-column: 1;
    }
    .switcher-left-part{
        grid-row: 0;
        grid-column: 0;
    }
    .switcher-right-part{
        grid-row: 0;
        grid-column: 1;
    }
</style>