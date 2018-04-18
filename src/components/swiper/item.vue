<!--Created by 337547038 on 2018/4/13.-->
<template>
    <div class="swiper-slide" :style="style">
        <slot/>
    </div>
</template>
<script>
    export default {
        name: 'swipeItem',
        data () {
            return {
                offset: 0//由父组件swiper更新
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
            this.$parent.swipes.push(this);//更新item个数
            //console.log(this.$refs.slide)
        },
        filters: {}
    }
</script>