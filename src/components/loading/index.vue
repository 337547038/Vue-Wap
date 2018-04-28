<!--Created by 337547038 on 2018/4/26.-->
<!--example
<Loading></Loading>
});-->
<template>
    <div class="loading" v-if="visible" :class="{'fixed':fixed,'normal':!fixed}">
        <template v-if="fixed">
            <div class="overlay" v-if="maskLayer"></div>
            <div class="loading-content">
                <span class="loading-rotate"></span>
                <slot/>
            </div>
        </template>
        <template v-else>
            <slot/>
        </template>
    </div>
</template>
<script>
    export default {
        name: 'Loading',
        data () {
            return {

            }
        },
        props: {
            visible: {//显示状态
                type: Boolean,
                default: true
            },
            maskLayer: {//遮罩层，前提是fixed=true
                type: Boolean,
                default: true
            },
            fixed: {//固定
                type: Boolean,
                default: false
            }
        },
        components: {},
        mounted(){
        },
        methods: {
        },
        computed: {},
        filters: {}
    }
</script>