<template>
    <div id="home" class="home">
        <Header />
        <div class="main">
            <div class="main-top">
                <Add />
                <Add />
                <Add />
                <Add />
            </div>
            <div class="main-bottom">
                <Life />
                <Life />
                <Life />
            </div>
        </div>
    </div>
</template>

<script>
import Header from '../components/Header'
import Add from "@/components/top/Add";
import Life from "@/components/bottom/Life";
import { screenAuto } from '@/libs/screen.tools'
import { throttle } from '@/libs/common'

export default {
    name: 'Home',
    components: { Header, Add, Life },
    data () {
        return {

        }
    },
    created () {

    },
    async mounted () {
        // screenAuto()
        // window.onresize = () => (throttle(screenAuto(), 360))
    },
    destroyed() {
        window.onresize = null
    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.home {
    position: relative;
    //box-sizing: border-box;
    width: 1920px;
    height: 1080px;
    background: url("../assets/img/bg.png") center no-repeat;
    background-size: 100%;
    transform-origin: 50% 0;
    transition: all .28s;
    //border: 1px dashed #fff;

    .main {
        width: 100%;
        height: 940px; // 1080 - 140
        box-sizing: border-box;
        padding: 0 30px 30px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        background: transparent;

        > div {
            width: 100%;
            height: 446px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
    }
}
</style>
