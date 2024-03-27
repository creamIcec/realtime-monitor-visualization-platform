<script>
import { ref } from "vue";
class Prop{

}
export default{
    props:{
        start: {type: Date, required: true},
        end: {type: Date, required: true},
        interval: {type: Number, required: true}
    },
    setup(props){
        const propObj = ref(Prop);
    }
}
</script>
<template>
    <div class="timeline-wrapper">
        <div class="timeline-content">
            <!--TODO: svg剪切? 拼装?-->
        </div>
    </div>
</template>
<style scoped></style>