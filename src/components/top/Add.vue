<template>
    <div class="add">
        <Title :title="'数字生活日新增'" />
        <div class="item-box-small">
            <div class="chart">
                <div id="chart-3" class="chart-content"></div>
                <img class="chart-wrap" src="../../assets/img/circle-wrap.png" alt="">
                <img class="chart-inline" src="../../assets/img/circle-2.png" alt="">
            </div>
            <div class="list">
                <div class="list-item">
                    <div class="list-item-bg" :style="`background:  ${list[0].color}`"></div>
                    <div class="list-item-content">
                        <div>{{ list[0].name }}</div>
                        <div>
                            <animate-number from="0" :to="list[0].value" duration="1200" />%
                        </div>
                    </div>
                </div>
                <div class="list-line"></div>
                <div class="list-item">
                    <div class="list-item-bg" :style="`background:  ${list[1].color}`"></div>
                    <div class="list-item-content">
                        <div>{{ list[1].name }}</div>
                        <div>
                            <animate-number from="0" :to="list[1].value" duration="1200" />%
                        </div>
                    </div>
                </div>
                <div class="list-line"></div>
                <div class="list-item">
                    <div class="list-item-bg" :style="`background:  ${list[2].color}`"></div>
                    <div class="list-item-content">
                        <div>{{ list[2].name }}</div>
                        <div>
                            <animate-number from="0" :to="list[2].value" duration="1200" />%
                        </div>
                    </div>
                </div>
                <div class="list-line"></div>
                <div class="list-item">
                    <div class="list-item-bg" :style="`background:  ${list[3].color}`"></div>
                    <div class="list-item-content">
                        <div>{{ list[3].name }}</div>
                        <div>
                            <animate-number from="0" :to="list[1].value" duration="1200" />%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Title from '../Title'
import * as echarts from 'echarts'

export default {
    name: 'Add',
    components: { Title },
    data () {
        return {
            list: [
                {
                    name: '一次性礼包',
                    value: 60,
                    color: '#278FFF'
                },
                {
                    name: '月租型礼包',
                    value: 18,
                    color: '#70F697'
                },
                {
                    name: '云回看',
                    value: 15,
                    color: '#94AEDB'
                },
                {
                    name: '终端礼包',
                    value: 12,
                    color: '#EBD553'
                }
            ]
        }
    },
    mounted() {
        this.initChart()

    },
    methods: {
        initChart() {
            const chartDom = document.getElementById('chart-3')
            const myChart = echarts.init(chartDom)
            myChart.clear()

            let option = {
                tooltip: {
                    trigger: 'item',
                },
                series: [
                    {
                        //实线外环
                        type: 'pie',
                        hoverAnimation: false,
                        radius: ['74%', '74%'],
                        center: ['50%', '50%'],
                        data: [100],
                        itemStyle: {
                            color: 'transparent',
                            borderColor: '#2D476C',
                            borderWidth: 1,
                            borderType: 'solid',
                        },
                        label: {
                            show: false,
                        },
                    },
                    {
                        //虚线内环
                        type: 'pie',
                        hoverAnimation: false,
                        radius: ['52%', '52%'],
                        center: ['50%', '50%'],
                        data: [100],
                        itemStyle: {
                            color: 'transparent',
                            borderColor: '#2A4971',
                            borderWidth: 1,
                            borderType: 'dashed',
                        },
                        label: {
                            show: false,
                        },
                    },
                    {
                        name: '',
                        type: 'pie',
                        startAngle: 320,
                        hoverAnimation: false,
                        radius: ['56%', '68%'],
                        center: ['50%', '50%'],
                        color: this.list.map(i => i.color),
                        label: {
                            normal: {
                                show: false,
                                position: 'inside',
                                textStyle: {
                                    align: 'center',
                                    baseline: 'middle',
                                    fontSize: 16,
                                    fontWeight: '100',
                                },
                            },
                        },
                        labelLine: {
                            normal: {
                                smooth: true,
                                length: 10,
                                lineStyle: {
                                    width: 1.5,
                                },
                            },
                        },
                        itemStyle: {
                            borderColor: '#000000',
                            borderWidth: '4',
                        },
                        data: this.list
                    },
                ],
            }


            myChart.setOption(option)
        }

    }
}
</script>

<style lang="less" scoped>
.add {
    .item-box-small {

        .chart {
            position: relative;
            width: 420px;
            height: 320px;
            margin: 0 auto;

            .chart-content {
                position: absolute;
                width: 420px;
                height: 320px;
                left: 0;
                right: 0;
                z-index: 5;
            }

            .chart-wrap {
                position: absolute;
                left: 0;
                right: 0;
                top: 50px;
                bottom: 0;
                margin: auto;
                z-index: 0;
            }

            .chart-inline {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                margin: auto;
                border-radius: 50%;
                overflow: hidden;
                z-index: 10;
            }
        }
    }

    .list {
        width: 426px;
        height: 52px;
        margin: 12px auto;
        box-sizing: border-box;
        padding: 0 8px;
        display: flex;
        justify-content: space-around;
        align-items: center;
        background: linear-gradient(180deg, rgba(5, 55, 122, .5) 0%, rgba(9, 26, 61, .5) 100%);
        border: 1px solid;
        border-image: linear-gradient(180deg, rgba(54, 120, 194, .5), rgba(43, 90, 162, 0)) 1 1;

        .list-item {
            position: relative;
            display: flex;
            justify-content: center;

            .list-item-bg {
                width: 12px;
                height: 12px;
                margin: 4px 8px 0 0;
            }

            .list-item-content {
                font-size: 14px;
                font-weight: 400;
                color: #FFFFFF;
                line-height: 20px;
            }
        }

        .list-line {
            width: 1px;
            height: 23px;
            margin: 0 auto;
            background: linear-gradient(180deg, rgba(50,104,166,0) 0%, #2D6CB0 50%, rgba(43,112,166,0) 98%);
        }
    }

}
</style>
