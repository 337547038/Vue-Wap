<!--Created by 337547038 on 2018/4/12.-->
<template>
    <div class="container">
        <comHeader title="DatePicker"/>
        <div class="demo">
            <p>基于picker的select，为方便使用</p>
            <h2>Demo</h2>
            <DatePicker v-model="value1" placeholder="请选择年" min="2010-1" ></DatePicker><br>
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
                    <td>选择的值</td>
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
                value1: '2018-4-15',
                min:'2010-05'
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