<!--Created by 337547038 on 2018/4/11.-->
<template>
    <div class="container">
        <comHeader title="cityPicker"/>
        <div class="demo">
            <h2>Use</h2>
            <pre>import CityPicker from '../components/cityPicker/index'</pre>
            <pre>&lt;CityPicker placeholder="请选择" v-model="value">&lt;/CityPicker></pre>
            <p>基于picker的城市联动，为方便使用</p>
            <h2>Demo</h2>
            <CityPicker v-model="value1" placeholder="默认状态"></CityPicker><br>
            <CityPicker v-model="value2" placeholder="两级联动" :children="2"></CityPicker><br>
            <CityPicker placeholder="请选择" v-model="value3" cancelText="cancel"></CityPicker>
            <h2>API</h2>
            <h3>cityPicker</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>value</td>
                    <td>Array</td>
                    <td>选择的值</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>String</td>
                    <td>value为空时的占位符，模拟input</td>
                </tr>
                <tr>
                    <td>children</td>
                    <td>Number｜3</td>
                    <td>联动级数，最大3</td>
                </tr>
                <tr>
                    <td>cancelText</td>
                    <td></td>
                    <td>同picker</td>
                </tr>
                <tr>
                    <td>cancelEvent</td>
                    <td></td>
                    <td>同picker</td>
                </tr>
                <tr>
                    <td>confirmText</td>
                    <td></td>
                    <td>同picker</td>
                </tr>
                <tr>
                    <td>confirmEvent</td>
                    <td></td>
                    <td>同picker</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td></td>
                    <td>同picker</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td></td>
                    <td>同picker</td>
                </tr>
                <tr>
                    <td>visibleCount</td>
                    <td></td>
                    <td>同picker</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import CityPicker from '../components/cityPicker/index'
    export default {
        name: 'cityPicker',
        path: '/cityPicker',
        data () {
            return {
                value1: [],
                value2: [],
                value3: ['广东', '广州市', '天河区']
            }
        },
        props: {},
        components: {CityPicker},
        methods: {

        },
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>