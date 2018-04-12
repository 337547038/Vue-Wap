<!--Created by 337547038 on 2018/4/12.-->
<template>
    <div class="container">
        <comHeader title="Select"/>
        <div class="demo">
            <p>基于picker的select，为方便使用</p>
            <h2>Demo</h2>
            <Select v-model="value1" :data="data1" placeholder="默认状态"></Select><br>
            <Select v-model="value2" placeholder="默认状态" :data="data2"></Select><br>
            <Select v-model="value3" placeholder="请选择" :data="data3"></Select><br>
            <Select v-model="value4" placeholder="disabled" :data="data4"></Select><br>
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
                    <td>placeholder</td>
                    <td>String</td>
                    <td>占位符，模拟input效果</td>
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
    import Select from '../components/select/index'
    export default {
        name: 'selectPicker',
        path: '/select',
        data () {
            return {
                value1: '',
                data1: [
                    {value: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']}
                ],
                value2: '05',
                data2: [
                    {value: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10']}
                ],
                value3: '',
                data3: [
                    {
                        value: [
                            {name: '01', value: '001'},
                            {name: '02', value: '002'},
                            {name: '03', value: '003'},
                            {name: '04', value: '004'}
                        ]
                    }
                ],
                value4: '02',
                data4: [
                    {
                        value: [
                            {name: '1', value: '01'},
                            {name: '2初始默认', value: '02'},
                            {name: '3', value: '03'},
                            {name: '4不能选择，往下选择', value: '04', disabled: true},
                            {name: '5不能选择，往下选择', value: '05', disabled: true},
                            {name: '6', value: '06'}
                        ]
                    }
                ]
            }
        },
        props: {},
        components: {Select},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>