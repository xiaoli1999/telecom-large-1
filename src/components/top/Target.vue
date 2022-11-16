<template>
    <div class="target">
        <Title :title="'5G指标'" />
        <div class="item-box-small">
            5G指标区域
            <div class="chart"></div>
        </div>
    </div>
</template>

<script>
import Title from '../Title'

export default {
    name: 'Target',
    components: { Title },
    data () {
        return {
            list: []
        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.target {
    .item-box-small {

        .chart {
            width: 420px;
            height: 320px;
            margin: 0 auto;
        }
    }

}
</style>
