<template>
    <div class="life">
        <Title :title="'创新生活-月新增'" :is-big="true" />
        <div  class="item-box-big">
            <div class="cate"></div>
            <div id="chart-4" class="chart"></div>
        </div>
    </div>
</template>

<script>
import Title from '../Title'
import * as echarts from "echarts";

export default {
    name: 'Life',
    components: { Title },
    data () {
        return {

        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            const chartDom = document.getElementById('chart-4')
            const myChart = echarts.init(chartDom)
            myChart.clear()

            const option = {
                // backgroundColor: 'rbg(40,46,72,0)',
                grid: {
                    left: '0%',
                    right: '0%',
                    top: '10%',
                    bottom: '10%',
                    containLabel: true
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: 'rgba(50, 216, 205, 1)'
                        },
                    }
                },
                xAxis: [{
                    type: 'category',
                    boundaryGap: 1,
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        color: '#fff'
                    },
                    splitLine: {
                        show: false
                    },
                    axisTick: {
                        show: false
                    },
                    data: ['1月', '2月', '3月', '4月', '5月', '6月']
                }],
                yAxis: [{
                    type: 'value',
                    name: '',
                    padding: 5,
                    // max: 1000,
                    splitLine: {
                        show: true,
                        lineStyle: {
                            color: 'rgba(255, 255, 255, 0.1)',
                            type: 'dashed'
                        }
                    },
                    axisLine: {
                        show: false
                    },
                    axisLabel: {
                        show: true,
                        margin: 10,
                        textStyle: {
                            color: '#fff'

                        }
                    },
                    axisTick: {
                        show: false
                    }
                },

                ],
                series: [
                    {
                        name: '月新增',
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#EACC36',
                                lineStyle: {
                                    color: "#EACC36",
                                    width: 2
                                },
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#EACC3690'
                                },
                                    {
                                        offset: 1,
                                        color: '#EACC3660'
                                    }
                                ], false),
                            }
                        },
                        data: [40, 60, 76, 64, 52, 88]
                    },
                    {
                        name: '累计到达',
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#4398FA',
                                lineStyle: {
                                    color: "#4398FA",
                                    width: 2
                                },
                            }
                        },
                        areaStyle: {
                            normal: {
                                color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                    offset: 0,
                                    color: '#4398FA90'
                                },
                                    {
                                        offset: 1,
                                        color: '#4398FA60'
                                    }
                                ], false),
                            }
                        },
                        data: [60, 40, 55, 80, 88, 66]
                    },
                ],
            };

        myChart.setOption(option)
      }
    }
}
</script>

<style lang="less" scoped>
.life {
    .item-box-big {

        .chart {
            width: 606px;
            height: 320px;
            margin: 0 auto;
        }
    }

}
</style>
