<template>
    <div :class="isBig ? 'title big' : 'title small'">
        <div>{{ title }}</div>
    </div>
</template>

<script>
export default {
    name: 'Title',
    props: {
        title: {
            type: Object,
            require: true
        },
        isBig: {
            type: Boolean,
            default: false
        }
    }
}
</script>

<style lang="less" scoped>
.title {
    height: 41px;
    margin: 0 auto 10px;

    &.small {
        width: 450px;
        background: url("../assets/img/title.png") no-repeat;
        background-size: 100%;
    }

    &.big {
        width: 602px;
        background: url("../assets/img/title.png") no-repeat;
        background-size: 100%;
    }

    > div {
        font-size: 18px;
        font-family: AlimamaShuHeiTi;
        color: #FFFFFF;
        background: linear-gradient(180deg, #FFFFFF 0%, #7BC7FF 99%);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        margin-left: 39px;
        padding-top: 6px;
    }
}
</style>
