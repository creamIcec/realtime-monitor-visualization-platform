<script>
import { MapHandler } from '../app/map_handler';

export default {
    props:{
        mapHandler: {type: MapHandler, required: true}
    },
    methods: {
        toggle() {
            const button1 = this.$refs.button1;
            const button2 = this.$refs.button2;
            const indicator = this.$refs.indicator;
            const wrapper = this.$refs.wrapper;
            button2.onclick = () => {
                indicator.classList.remove("indicator-animating2left");
                indicator.classList.add("indicator-animating2right");
                wrapper.classList.remove("wrapper-animating2day");
                wrapper.classList.add("wrapper-animating2night");

                document.documentElement.setAttribute("theme", "night");
                this.mapHandler.switchDayNight("night");

            }
            button1.onclick = () => {
                indicator.classList.remove("indicator-animating2right");
                indicator.classList.add("indicator-animating2left");
                wrapper.classList.remove("wrapper-animating2night");
                wrapper.classList.add("wrapper-animating2day");

                document.documentElement.setAttribute("theme", "day");
                this.mapHandler.switchDayNight("day");
            }
        }
    }
}
</script>
<template>
    <div ref="wrapper" class="switcher-wrapper neumorphism">
        <button ref="button1" id="button1"></button>
        <button ref="button2" id="button2"></button>
        <div ref="indicator" id="indicator" class="grid-enabled"></div>
    </div>
</template>
<style scoped>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
}

.switcher-wrapper {
    width: 160px;
    height: 70px;
    border-radius: 10px;
    box-shadow: -3px -3px 3px -1px var(--shadow-start),
                3px 3px 3px -1px var(--shadow-end);
    display: grid;
    justify-content: center;
    align-items: center;
    grid-template-rows: 100%;
    grid-template-columns: 50% 50%;
    position: absolute;
}

button {
    padding-block: 0;
    padding-inline: 0;
    width: 100%;
    height: 61.8%;
    z-index: 2;
    border: none;
    cursor: pointer;
}

#button1 {
    background: url("./state-card-assets/day-mode.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    grid-column: 1;
}

#button2 {
    background: url("./state-card-assets/night-mode.svg");
    background-repeat: no-repeat;
    background-position: center;
    background-size: 50%;
    grid-column: 2;
}

#indicator {
    width: calc(50% * 0.9);
    height: 61.8%;
    margin: 0 5px;
    position: absolute;
    z-index: 1;
    background: linear-gradient(180deg, rgb(252, 128, 56) 0%, rgb(255, 160, 56) 60%);
    border-radius: 20px;
    box-shadow: inset 10px 10px 10px -1px rgb(255, 165, 70),
        inset -10px -10px 10px -1px rgb(223, 109, 43);
}

@keyframes toggle2right {
    from {
        background: linear-gradient(180deg, rgb(252, 128, 56) 0%, rgb(255, 160, 56) 60%);
        box-shadow: inset 10px 10px 10px -1px rgb(255, 165, 70),
            inset -10px -10px 10px -1px rgb(223, 109, 43);
        left: 0%;
    }

    to {
        background: linear-gradient(180deg, rgb(56, 125, 252) 0%, rgb(56, 169, 255) 60%);
        box-shadow: inset -10px -10px 10px -1px rgb(32, 117, 183),
            inset 10px 10px 10px -1px rgb(31, 83, 181);
        left: 50%;
    }
}

@keyframes toggle-night {
    from {
        background-color: var(--day-controller-color-end);
        box-shadow: -3px -3px 3px -1px var(--shadow-start),
                    3px 3px 3px -1px var(--shadow-end),
                    inset 0 0 0 0 #000000,
                    inset 0 0 0 0 #000000
    }

    to {
        background-color: var(--day-controller-color-start);
        box-shadow: 0 0 0 0 #000000,
                    0 0 0 0 #000000,
                    inset 10px 10px 10px -1px rgba(1, 23, 40, 0.25),
                    inset -10px -10px 10px -1px rgba(199, 199, 199, 0.25);
    }
}

@keyframes toggle-day {
    from {
        background-color: var(--day-controller-color-start);
        box-shadow: 0 0 0 0 #000000,
                    0 0 0 0 #000000,
                    inset 10px 10px 10px -1px rgba(1, 23, 40, 0.25),
                    inset -10px -10px 10px -1px rgba(199, 199, 199, 0.25);
    }

    to {
        background-color: var(--day-controller-color-end);
        box-shadow: -3px -3px 3px -1px var(--shadow-start),
                    3px 3px 3px -1px var(--shadow-end),
                    inset 0 0 0 0 #000000,
                    inset 0 0 0 0 #000000
    }
}

@keyframes toggle2left {
    from {
        background: linear-gradient(180deg, rgb(56, 125, 252) 0%, rgb(56, 169, 255) 60%);
        box-shadow: inset -10px -10px 10px -1px rgb(32, 117, 183),
                    inset 10px 10px 10px -1px rgb(31, 83, 181);
        left: 50%;
    }

    to {
        background: linear-gradient(180deg, rgb(252, 128, 56) 0%, rgb(255, 160, 56) 60%);
        box-shadow: inset 10px 10px 10px -1px rgb(255, 165, 70),
            inset -10px -10px 10px -1px rgb(223, 109, 43);
        left: 0%;
    }
}

.wrapper-animating2night {
    animation: 0.5s ease 0s toggle-night;
    animation-fill-mode: forwards;
}

.wrapper-animating2day {
    animation: 0.5s ease 0s toggle-day;
    animation-fill-mode: forwards;
}

.indicator-animating2left {
    animation: 0.5s ease 0s toggle2left;
    animation-fill-mode: forwards;
}

.indicator-animating2right {
    animation: 0.5s ease 0s toggle2right;
    animation-fill-mode: forwards;
}</style>