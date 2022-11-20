<template>
    <div class="target">
        <Title :title="'5G指标'" />
        <div class="item-box-small">
            <div class="tables">
                <div class="tables-header">
                    <div>
                        <div>主套</div>
                        <div>餐5G</div>
                        <div>到达</div>
                    </div>
                    <div>
                        <div>可选</div>
                        <div>包5G</div>
                        <div>到达</div>
                    </div>
                    <div>
                        <div>5G</div>
                        <div>用户</div>
                    </div>
                    <div>
                        <div>5G</div>
                        <div>登网</div>
                        <div>用户数</div>
                    </div>
                    <div>
                        <div>5G</div>
                        <div>终端</div>
                        <div>用户数</div>
                    </div>
                    <div>
                        <div>5G</div>
                        <div>登网率</div>
                    </div>
                    <div>
                        <div>月5G登</div>
                        <div>网用户</div>
                        <div>5G流量</div>
                    </div>
                    <div>
                        <div>月5G登</div>
                        <div>网用户</div>
                        <div>总流量</div>
                    </div>
                    <div>
                        <div>月5G登</div>
                        <div>驻留比</div>
                    </div>
                </div>
                <div class="tables-list">
                    <div v-for="(item, index) in list" :key="index" class="tables-content" :class="index % 2 ? 'active' : ''">
                        <div>{{ item.name }}</div>
                        <div>{{ item.name }}</div>
                        <div>{{ item.name }}</div>
                        <div>{{ item.name }}</div>
                        <div>{{ item.name }}</div>
                        <div>{{ item.name }}</div>
                        <div>{{ item.name }}</div>
                        <div>{{ item.name }}</div>
                        <div>{{ item.name }}</div>
                    </div>
                </div>
            </div>
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
            list: [
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
                { name: 'xxx' },
            ]
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
        .tables {
            position: relative;
            width: 440px;
            margin: 0 auto;

            .tables-header {
                padding: 0 8px;
                height: 68px;
                background: url("../../assets/img/table.png") no-repeat;
                background-size: 100%;
                margin: 8px auto 0;
                font-size: 12px;
                font-weight: 500;
                color: #89C1FF;
                line-height: 16px;
                display: flex;
                align-items: center;
                justify-content: space-evenly;

                > div {
                    width: 48px;
                    height: 68px;
                }
            }

            .tables-list {
                height: 320px;
                overflow-y: auto;
                margin: 0 auto;

                &::-webkit-scrollbar {
                    display: none;
                }

                .tables-content {
                    height: 32px;
                    margin: 0 auto;
                    padding: 0 8px;
                    font-size: 14px;
                    font-weight: 400;
                    color: #FFFFFF;
                    line-height: 20px;
                    display: flex;
                    align-items: center;
                    justify-content: space-evenly;

                    > div {
                        width: 48px;
                    }

                    &.active {
                        background: linear-gradient(270deg, rgba(11,59,104,0.32) 0%, rgba(48,114,201,0.68) 100%);
                    }
                }
            }
        }
    }

}
</style>
