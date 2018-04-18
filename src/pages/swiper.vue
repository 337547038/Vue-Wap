<!--Created by 337547038 on 2018/4/13.-->
<template>
    <div class="container">
        <comHeader title="Swiper"/>
        <div class="demo">
            <h2>Demo</h2>
            <Swiper>
                <SwiperItem>01默认</SwiperItem>
                <SwiperItem>02默认</SwiperItem>
                <SwiperItem>03默认</SwiperItem>
                <SwiperItem>04默认</SwiperItem>
            </Swiper>
            <br>
            <Swiper :autoPlay="false" :slideAfter="_slideAfter">
                <SwiperItem>01 autoPlay="false" slideAfter="_slideAfter"</SwiperItem>
                <SwiperItem>02 autoPlay="false" slideAfter="_slideAfter"</SwiperItem>
                <SwiperItem>03 autoPlay="false" slideAfter="_slideAfter"</SwiperItem>
                <SwiperItem>04 autoPlay="false" slideAfter="_slideAfter"</SwiperItem>
            </Swiper>
            <br>
            <Swiper :pagination="false" :active="2">
                <SwiperItem>不显示分页小圆点</SwiperItem>
                <SwiperItem>02不显示分页小圆点</SwiperItem>
                <SwiperItem>03不显示分页小圆点</SwiperItem>
                <SwiperItem>04不显示分页小圆点</SwiperItem>
            </Swiper>
            <br>
            <h2>API</h2>
            <h3>Swiper</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>active</td>
                    <td>Number|1</td>
                    <td>初始化显示第几个</td>
                </tr>
                <tr>
                    <td>showTime</td>
                    <td>Number|3000</td>
                    <td>停留的时间，单位毫秒</td>
                </tr>
                <tr>
                    <td>autoPlay</td>
                    <td>Boolean|true</td>
                    <td>自动轮播</td>
                </tr>
                <tr>
                    <td>slideAfter</td>
                    <td>Function</td>
                    <td>切换事件，切换开始时事件。切换结束事件延时过度时间即可</td>
                </tr>
                <tr>
                    <td>distance</td>
                    <td>Number|50</td>
                    <td>触摸时事件触发距离，单位px。即左右触摸移动时，当移动距离小于设定距离时，则回弹到当前，即不切换</td>
                </tr>
                <tr>
                    <td>duration</td>
                    <td>Number|500</td>
                    <td>transition-duration过渡时间</td>
                </tr>
                <tr>
                    <td>pagination</td>
                    <td>Boolean|true</td>
                    <td>显示分页小圆点</td>
                </tr>
            </table>
            <h3>SwiperItem</h3>
            <p>无</p>
        </div>
    </div>
    </div>
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
        methods: {
            _slideAfter(index){
                console.log(index);
            }
        },
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>