<!--Created by 337547038 on 2018/4/12.-->
<template>
    <div class="container">
        <comHeader title="DatePicker"/>
        <div class="demo">
            <p>基于picker的datePicker，为方便使用</p>
            <h2>Demo</h2>
            <DatePicker v-model="value0" placeholder="请选择"></DatePicker>
            <br>
            <DatePicker v-model="value1" placeholder="请选择"></DatePicker>
            <br>
            <DatePicker v-model="value2" placeholder="请选择年" type="y"></DatePicker>
            <br>
            <DatePicker v-model="value3" placeholder="请选择年月" type="ym"></DatePicker>
            <br>
            <DatePicker v-model="value4" placeholder="请选择时间" type="ymdhms"></DatePicker>
            <br>
            <DatePicker v-model="value5" placeholder="请选择时间(带单位)" type="ymdhms" :showUnit="true"></DatePicker>
            <br>
            <DatePicker v-model="value5" placeholder="请选择时间(两位数显示小于10前补0)" type="ymdhms" :fill0="true"></DatePicker>
            <br>
            <DatePicker v-model="value6" placeholder="选择范围2015/5/1-2020/10/1" min="2015/5/1"
                        max="2020/10/1"></DatePicker>
            <br>
            <h2>API</h2>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>value</td>
                    <td>String</td>
                    <td>选择的值，时间类型</td>
                </tr>
                <tr>
                    <td>min</td>
                    <td>String</td>
                    <td>最小值，时间类型</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>String</td>
                    <td>最大值，时间类型</td>
                </tr>
                <tr>
                    <td>showUnit</td>
                    <td>Boolean|false</td>
                    <td>显示单位</td>
                </tr>
                <tr>
                    <td>fill0</td>
                    <td>Boolean|false</td>
                    <td>小于10时前面补0</td>
                </tr>
                <tr>
                    <td>type</td>
                    <td>String|ymd</td>
                    <td>显示的时间类型，可选y，ym，ymd(默认)，ymdh，ymdhm，ymdhms</td>
                </tr>
                <tr>
                    <td>其它同picker</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import DatePicker from '../components/datePicker/index'
    export default {
        name: 'datePicker',
        path: '/datePicker',
        data () {
            return {
                value0: '2018-4-12',
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: ''
            }
        },
        props: {},
        components: {DatePicker},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>