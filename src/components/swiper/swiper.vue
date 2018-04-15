<!--Created by 337547038 on 2018/4/13.-->
<template>
    <div class="swiper-container" ref="container">
        <div class="swiper-wrapper" :style="styleWrap">
            <slot/>
        </div>
        <div class="swiper-pagination">
            <span></span>
            <span class="swiper-pagination-active"></span>
            <span></span>
            <span></span>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'swiper',
        data () {
            return {
                containerWidth: '',//组件宽
                length: 0,//切换的个数，由item更新
                translate: 0,//移动的距离
                duration: 500//transition-duration过渡时间
            }
        },
        props: {
            active: {//当前第几个
                type: Number,
                default: 1
            }
        },
        components: {},
        methods: {},
        computed: {
            styleWrap(){
                return {
                    width: this.containerWidth * this.length + 'px',
                    paddingLeft: this.containerWidth + 'px',
                    transform: `translate3d(-${this.translate}px,0,0)`,
                    transition: `transform ${this.duration}ms`
                }
            }
        },
        mounted(){
            this.containerWidth = this.$refs.container.offsetWidth;//宽
            this.translate = this.containerWidth * this.active;//初始设置偏移
        },
        filters: {}
    }
</script>