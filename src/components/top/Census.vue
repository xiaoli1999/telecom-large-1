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
            color: ['#EBC53F', '#3D97EE', '#94AEDB'],
            index: 1,
            cateArr: ['移动', '宽度', '高清'],
            list: [
                [
                    {
                        name: "月累计",
                        data: [16, 30, 34, 18, 42, 14],
                        type: 'bar',
                        barWidth: 12,
                    },
                    {
                        name: "出账用户数",
                        data: [12, 20, 10, 8, 20, 6],
                        type: 'bar',
                        barWidth: 12,
                    },
                    {
                        name: "出账用户数占比",
                        data: [62, 88, 58, 90, 66, 92],
                        type: 'line',
                        smooth: true,
                    },
                ],
                [
                    {
                        name: "月累计",
                        data: [24, 16, 28, 38, 16, 40],
                        type: 'bar',
                        barWidth: 12,
                    },
                    {
                        name: "出账用户数",
                        data: [8, 6, 8, 18, 6, 12],
                        type: 'bar',
                        barWidth: 12,
                    },
                    {
                        name: "出账用户数占比",
                        data: [54, 66, 84, 52, 48, 88],
                        type: 'line',
                        smooth: true,
                    },
                ],
                [
                    {
                        name: "月累计",
                        data: [34, 26, 42, 16, 64, 88],
                        type: 'bar',
                        barWidth: 12,
                    },
                    {
                        name: "出账用户数",
                        data: [24, 18, 24, 12, 55, 42],
                        type: 'bar',
                        barWidth: 12,
                    },
                    {
                        name: "出账用户数占比",
                        data: [34, 96, 72, 24, 66, 36],
                        type: 'line',
                        smooth: true,
                    },
                ]
            ]
        }
    },
    mounted() {
        this.initChart()

    },
    methods: {
        initChart() {
            const chartDom = document.getElementById('chart-2')
            const myChart = echarts.init(chartDom)
            myChart.clear()

            const option = {
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                grid: {
                    top: '20%',
                    left: '0%',
                    right: '0%',
                    bottom: '0%',
                    containLabel: true
                },
                legend: {
                    itemHeight: 12, itemWidth: 12,
                    right: '8%',
                    top: '5%',
                    textStyle: { fontSize: '12', color: '#fff' }
                },
                color: this.color,
                xAxis: {
                    type: 'category',
                    data: ['1月', '2月', '3月', '4月', '5月', '6月']
                },
                yAxis: [
                    {
                        type: 'value',
                        max: 100,
                        min: 0,
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.1)',
                                type: 'dashed'
                            }
                        },
                    },
                    {
                        type: 'value',
                        max: 100,
                        min: 0,
                        axisLabel: {
                            formatter: '{value} %'
                        },
                        splitLine: {
                            show: true,
                            lineStyle: {
                                color: 'rgba(255, 255, 255, 0.1)',
                                type: 'dashed'
                            }
                        },
                    }
                ],
                series: this.list[this.index]
            }

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
