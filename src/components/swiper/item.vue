<!--Created by 337547038 on 2018/4/13.-->
<template>
    <div class="swiper-slide" :style="style" ref="slide">
        <slot/>
    </div>
</template>
<script>
    export default {
        name: 'swiperItem',
        data () {
            return {
                offset: 0
            }
        },
        props: {},
        components: {},
        methods: {},
        computed: {
            style(){
                return {
                    width: this.$parent.containerWidth + 'px',
                    float: 'left',
                    transform: `translate3d(${this.offset}px, 0, 0)`
                }
            }
        },
        mounted(){
            this.$parent.length++;//更新个数
            //console.log(this.$refs.slide)
            console.log(this)
        },
        filters: {}
    }
</script>