<template>
    <div class="business">
        <Title :title="'重点业务日新增'" />
        <div class="item-box-small">
            <div id="chart-1" class="chart"></div>
        </div>
    </div>
</template>

<script>
import Title from '../Title'
import * as echarts from 'echarts'

export default {
    name: 'Business',
    components: { Title },
    data () {
        return {
            list: [
                {
                    name: '副卡数/移动总数',
                    value: 30,
                    color: '#278FFF'
                },
                {
                    name: '高清',
                    value: 25,
                    color: '#6FF697'
                },
                {
                    name: '千兆数/宽带数',
                    value: 45,
                    color: '#EBD554'
                }
            ]
        }
    },
    mounted() {
        this.initChart()

    },
    methods: {
        initChart() {
            const chartDom = document.getElementById('chart-1')
            const myChart = echarts.init(chartDom)

            let option = {};

            myChart.setOption(option)
        }

    }
}
</script>

<style lang="less" scoped>
.business {
    .item-box-small {

        .chart {
            width: 420px;
            height: 320px;
            margin: 0 auto;
        }
    }

}
</style>
