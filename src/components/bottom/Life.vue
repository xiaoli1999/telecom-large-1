<template>
    <div class="life">
        <Title :title="'创新生活-月新增'" :is-big="true" />
        <div  class="item-box-big">
            <div class="list">
                <div v-for="(name, index) in cateArr" :key="index" class="list-item" @click="changeChart(index)">
                    <img v-if="index === cateIndex" src="../../assets/img/grid.png" alt="">
                    <img v-else src="../../assets/img/grid-active.png" alt="">
                    <div :class="index === cateIndex ? 'active' : ''">
                        <img v-if="index === cateIndex" src="../../assets/img/dot-active.png" alt="">
                        <img v-else src="../../assets/img/dot.png" alt="">
                        <span>{{ name }}</span>
                    </div>
                </div>
            </div>
            <div id="chart-4" class="chart"></div>
        </div>
    </div>
</template>

<script>
import Title from '../Title'
import * as echarts from 'echarts'

export default {
    name: 'Life',
    components: { Title },
    data () {
        return {
            cateIndex: 0,
            cateArr: ['视频彩铃', '通信助理', '挂机名片', '挂机名片'],
            list: [
                {
                    name: '视频彩铃',
                    data: [
                        [16, 30, 34, 18, 42, 14],
                        [12, 64, 84, 8, 20, 6]
                    ]
                },
                {
                    name: '通信助理',
                    data: [
                        [8, 12, 44, 20, 68, 44],
                        [42, 20, 88, 12, 46, 36]
                    ]
                },
                {
                    name: '挂机名片',
                    data: [
                        [24, 66, 48, 24, 12, 46],
                        [24, 48, 64, 84, 36, 34]
                    ]
                },
                {
                    name: '挂机名片',
                    data: [
                        [64, 84, 42, 68, 12, 28],
                        [44, 68, 88, 28, 44, 36]
                    ]
                }
            ]
        }
    },
    mounted () {
        this.initChart()
    },
    methods: {
        initChart () {
            const chartDom = document.getElementById('chart-4')
            const myChart = echarts.init(chartDom)
            myChart.clear()

            const option = {
                // backgroundColor: 'rbg(40,46,72,0)',
                grid: {
                    left: '4%',
                    right: '4%',
                    top: '14%',
                    bottom: '4%',
                    containLabel: true
                },
                legend: {
                    itemHeight: 3, itemWidth: 24,
                    right: '8%',
                    top: '5%',
                    textStyle: { fontSize: '12', color: '#fff' }
                },
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'line',
                        lineStyle: {
                            color: 'rgba(50, 216, 205, 1)'
                        }
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
                }

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
                                    color: '#EACC36',
                                    width: 2
                                }
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
                                ], false)
                            }
                        },
                        data: this.list[this.cateIndex].data[0]
                    },
                    {
                        name: '累计到达',
                        type: 'line',
                        smooth: true,
                        itemStyle: {
                            normal: {
                                color: '#4398FA',
                                lineStyle: {
                                    color: '#4398FA',
                                    width: 2
                                }
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
                                ], false)
                            }
                        },
                        data: this.list[this.cateIndex].data[1]
                    }
                ]
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
.life {
    .item-box-big {
        .list {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 16px auto 8px;

            .list-item {
                position: relative;
                cursor: pointer;

                > img {
                    width: 136px;
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
            width: 606px;
            height: 320px;
            margin: 0 auto;
        }
    }

}
</style>
