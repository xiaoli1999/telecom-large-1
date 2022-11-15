<template>
    <div class="home">
        <Header />
        <div class="main"></div>
    </div>
</template>

<script>
import Header from '../components/Header'
import Title from '../components/Title'

export default {
    name: 'Home',
    components: { Header, Title },
    data () {
        return {

        }
    },
    created () {

    },
    async mounted () {

    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.home {
    position: relative;
    min-width: 1920px;
    min-height: 1080px;
    overflow: hidden;
    background: url("../assets/img/bg.png") center no-repeat;
    background-size: 100%;
    transform-origin: center;

    .main {
        width: 100%;
        height: 940px; // 1080 - 140
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        background: transparent;

        .main-left,
        .main-right {
            min-width: 440px;
            height: 100%;
            //border: 1px solid #469221;

        }

        .main-content {
            position: relative;
            flex: 1;
            height: 100%;

            .map-wrap {
                position: absolute;
                width: 994px;
                height: 540px;
                top: 0;
                right: 0;
                bottom: 0;
                left: 0;
                margin: auto;
            }

            .map-bottom {
                position: absolute;
                width: 646px;
                height: 405px;
                bottom: 60px;
                left: calc(50% - 323px);
            }
        }
    }
}
</style>
