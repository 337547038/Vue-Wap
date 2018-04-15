<!--Created by 337547038 on 2018/4/13.-->
<template>
    <Swiper :active="2">
        <SwiperItem>1</SwiperItem>
        <SwiperItem>2</SwiperItem>
        <SwiperItem>3</SwiperItem>
        <SwiperItem>4</SwiperItem>
    </Swiper>
</template>
<script>
    import {Swiper, SwiperItem} from '../components/swiper/index'
    export default {
        name: 'swiper',
        path: '/swiper',
        data () {
            return {}
        },
        props: {},
        components: {Swiper, SwiperItem},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>