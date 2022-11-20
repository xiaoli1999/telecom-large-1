<template>
    <div class="number">
        <Title :title="'数字生活-月新增'" :is-big="true" />
        <div class="item-box-big">
            <div class="list">
                <div v-for="(name, index) in cateArr" :key="index" class="list-item" @click="changeChart(index)">
                    <img v-if="index === cateIndex" src="../../assets/img/grid2.png" alt="">
                    <img v-else src="../../assets/img/grid2-active.png" alt="">
                    <div :class="index === cateIndex ? 'active' : ''">
                        <img v-if="index === cateIndex" src="../../assets/img/dot-active.png" alt="">
                        <img v-else src="../../assets/img/dot.png" alt="">
                        <span>{{ name }}</span>
                    </div>
                </div>
            </div>
            <div id="chart-6" class="chart"></div>
        </div>
    </div>
</template>

<script>
import Title from '../Title'
import * as echarts from 'echarts'

export default {
    name: 'Number',
    components: { Title },
    data () {
        return {
            color: ['#EBC53F', '#3D97EE', '#94AEDB'],
            cateIndex: 0,
            cateArr: ['智能组网', '天翼看家'],
            list: [
                [
                    {
                        name: "一次性礼包",
                        data: [16, 30, 34, 18, 42, 14],
                        type: 'bar',
                        stack: 'total',
                        barWidth: 12,
                    },
                    {
                        name: "月租型礼包",
                        data: [12, 20, 10, 8, 20, 6],
                        type: 'bar',
                        stack: 'total',
                        barWidth: 12,
                    },
                    {
                        name: "全量宽带渗透率",
                        data: [62, 88, 58, 90, 66, 92],
                        type: 'line',
                        smooth: true
                    },
                ],
                [
                    {
                        name: "一次性礼包",
                        data: [24, 16, 28, 38, 16, 40],
                        type: 'bar',
                        stack: 'total',
                        barWidth: 12,
                    },
                    {
                        name: "月租型礼包",
                        data: [8, 6, 8, 18, 6, 12],
                        type: 'bar',
                        stack: 'total',
                        barWidth: 12,
                    },
                    {
                        name: "全量宽带渗透率",
                        data: [54, 66, 84, 52, 48, 88],
                        type: 'line',
                        smooth: true
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
            const chartDom = document.getElementById('chart-6')
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
                    left: '4%',
                    right: '4%',
                    bottom: '4%',
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
                series: this.list[this.cateIndex]
            }

            myChart.setOption(option)
        },

        changeChart (i) {
            this.cateIndex = i
            this.initChart()
        }
    }
}
</script>

<style lang="less" scoped>
.number {
    .item-box-big {

        .list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 16px 24px 8px;


            .list-item {
                position: relative;
                cursor: pointer;

                > img {
                    width: 268px;
                    height: 42px;
                }

                > div {
                    position: absolute;
                    width: fit-content;
                    font-size: 16px;
                    font-weight: 600;
                    color: #AFC7FD;
                    line-height: 22px;
                    top: 0;
                    right: 0;
                    bottom: 0;
                    left: 0;
                    margin: auto;
                    z-index: 5;
                    display: flex;
                    align-items: center;

                    &.active {
                        color: #fff;
                    }

                    > img {
                        margin-right: 12px;
                    }
                }
            }
        }

        .chart {
            position: relative;
            width: 606px;
            height: 320px;
            margin: 0 auto;
        }
    }
}
</style>
