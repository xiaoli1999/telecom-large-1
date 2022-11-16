<template>
    <div class="product">
        <Title :title="'创新产品-日新增'" :is-big="true" />
        <div class="item-box-big">
            创新产品-日新增
        </div>
    </div>
</template>

<script>
import Title from '../Title'
export default {
    name: 'Product',
    components: { Title },
    data () {
        return {

        }
    },
    mounted() {

    },
    methods: {

    }
}
</script>

<style lang="less" scoped>
.product {

}
</style>
