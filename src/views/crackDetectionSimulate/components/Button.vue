<script>
export default {
    props: {
        action: {type: String, required: true},
        icon: {type: String, required: false},
        pos: {type: String, required: false},
        standAlone:{type: Boolean, required: false, default: false},
        svgInject: {type: Boolean, required: false, default: true},
        adjustSize:{type: String, required: false, default: false}
    },
    mounted(){
        if(this.standAlone){
            const wrapper = this.$refs.wrapper;
            wrapper.classList.add("glass-pad");
        }
        if(this.svgInject){
            const icon = this.$refs.icon;
            SVGInject(icon);
            icon.classList.add("svg-injected");
        }
        if(this.adjustSize != undefined){
            const icon = this.$refs.icon;
            icon.style.width = this.adjustSize;
            icon.style.height = this.adjustSize;
        }
    }
}
</script>
<template>
    <div ref="wrapper" :class="'button-wrapper all-button ' + pos + '-button'">
        <button ref="button" class="control-button">
            <img ref="icon" :src="icon" :alt="action" class="icon"/>
        </button>
    </div>
</template>
<style scoped>
@media( max-width:580px ) {
    .all-button{
        width: 50px;
        height: 100px;
    }

    .control-button {
        border: none;
        background-color: transparent;
    }
}

.icon{
    width: 100%;
    height: 100%;
}

.left-button{
    left: 20px;
}

.top-button{
    top: 20px;
}

.right-button{
    right: 20px;
}

.bottom-button{
    bottom: 20px;
}

.button-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: fit-content;
    height: fit-content;
}

.all-button {
    width: 100%;
    height: 100%;
    pointer-events: all;
}

.control-button {
    border-style: none;
    border-radius: 10px;
    background-color: var(--button-color);
    box-shadow: -3px -3px 3px -1px var(--shadow-start),
                3px 3px 3px -1px var(--shadow-end);
    outline: none;
    cursor: pointer;
    z-index: 100;
    width: 100%;
    height: 100%;
}
</style>