<template>
    <div class="product">
        <Title :title="'创新产品-日新增'" :is-big="true" />
        <div class="item-box-big">
            <div class="chart">
                <div id="chart-5" class="chart-content"></div>
                <img class="chart-inline" src="../../assets/img/circle-1.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import Title from '../Title'
import * as echarts from 'echarts'

export default {
    name: 'Product',
    components: { Title },
    data () {
        return {
            list: [
                {
                    name: '视频彩铃',
                    value: 40,
                    color: '#EBD554'
                },
                {
                    name: '挂机名片',
                    value: 18,
                    color: '#1BD6FF'
                },
                {
                    name: '通信助理',
                    value: 18,
                    color: '#278FFF'
                },
                {
                    name: '挂机名片',
                    value: 18,
                    color: '#6FF697'
                }
            ]
        }
    },
    mounted() {
        this.initChart()
    },
    methods: {
        initChart() {
            const chartDom = document.getElementById('chart-5')
            const myChart = echarts.init(chartDom)
            myChart.clear()

            let option = {
                tooltip: {},
                // backgroundColor: '#2c343c',
                grid: {
                    left: '0%',
                    right: '0%',
                    top: '0%',
                    bottom: '0%',
                    containLabel: true
                },
                series: [
                    {
                        type: 'pie',
                        radius: ['44%', '64%'],
                        emphasis: {
                            disabled: true
                        },
                        animation: false,
                        data: [
                            {
                                value: 0,
                                itemStyle: {
                                    color: '#092B62ae'
                                }
                            }
                        ],
                        tooltip: {
                            show: false
                        }
                    },
                    {
                        type: 'pie',
                        radius: ['46%', '60%'],
                        startAngle: 300,
                        label: {
                            alignTo: 'edge',
                            formatter: '{name|{b}}\n{time|{c}% }',
                            minMargin: 5,
                            edgeDistance: 50,
                            lineHeight: 30,
                            rich: {
                                time: {
                                    fontSize: 12,
                                    color: '#fff'
                                }
                            }
                        },
                        labelLine: {
                            length: 24,
                            length2: 6,
                            maxSurfaceAngle: 80
                        },
                        labelLayout: function (params) {
                            const isLeft = params.labelRect.x < myChart.getWidth() / 2;
                            const points = params.labelLinePoints;
                            points[2][0] = isLeft
                                    ? params.labelRect.x
                                    : params.labelRect.x + params.labelRect.width;
                            return {
                                labelLinePoints: points
                            };
                        },
                        data: this.list.map(i => ({
                            ...i,
                            label: {
                                color: i.color
                            },
                            itemStyle: {
                                color: i.color
                            }
                        }))
                    }
                ]
            }

            myChart.setOption(option)
        }
    }
}
</script>

<style lang="less" scoped>
.product {
    .item-box-big {

        .chart {
            position: relative;
            width: 606px;
            height: 320px;
            margin: 0 auto;

            .chart-content {
                position: absolute;
                width: 606px;
                height: 320px;
                left: 0;
                top: 0;
                z-index: 10;
            }

            .chart-inline {
                position: absolute;
                width: 112px;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                border-radius: 50%;
                overflow: hidden;
                z-index: 5;
            }
        }
    }
}
</style>
