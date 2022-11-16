<template>
    <div class="census">
        <Title :title="'业务统计'" />
        <div class="item-box-small">
            <div id="chart-2" class="chart"></div>
        </div>
    </div>
</template>

<script>
import Title from '../Title'
import * as echarts from 'echarts'

export default {
    name: 'Census',
    components: { Title },
    data () {
        return {
            list: []
        }
    },
    mounted() {
        // this.initChart()

    },
    methods: {
        initChart() {
            const chartDom = document.getElementById('chart-2')
            const myChart = echarts.init(chartDom)

            let option = {}

            myChart.setOption(option)
        }

    }
}
</script>

<style lang="less" scoped>
.census {
    .item-box-small {

        .chart {
            width: 420px;
            height: 320px;
            margin: 0 auto;
        }
    }

}
</style>
