<!--Created by 337547038 on 2018/3/27.-->
<template>
    <div class="container">
        <comHeader title="Picker"/>
        <div class="demo">
            <h2>Use</h2>
            <pre>import picker from '../components/picker/index'</pre>
            <pre>&lt;picker :visible.sync="visible" :data="pickerData" v-model="value" :change="_change">&lt;/picker></pre>
            <pre>pickerData: [
         {
         value: [
            {name: '1', value: '01', disabled: true},
            {name: '2', value: '02'},
            {name: '3', value: '03'},
            {name: '4', value: '04'},
            {name: '5', value: '05'}
                 ]
         },
         {
            value:['01','02','03']
         }
                ]</pre>
            <h2>Demo</h2>
            <div class="list">
                <ul>
                    <li @click="visible1 = true">单列（对象数组）<span class="right">{{value1}}</span></li>
                    <li @click="visible2 = true">单列<span class="right">{{value2}}</span></li>
                    <li @click="visible3=true">多列<span class="right">{{value3}}</span></li>
                    <li @click="visible4=true">动态值
                        <span class="right">{{value4}}</span></li>
                    <li @click="_setValue">点击这里设置动态值</li>
                    <li @click="visible5=true">联动<span class="right">{{value5}}</span></li>
                </ul>

            </div>
            <h2>API</h2>
            <h3>Picker</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>visible</td>
                    <td>Boolean｜false</td>
                    <td>显示隐藏，使用visible.sync同步更新</td>
                </tr>
                <tr>
                    <td>maskClose</td>
                    <td>Boolean｜true</td>
                    <td>点击遮罩隐藏</td>
                </tr>
                <tr>
                    <td>cancelText</td>
                    <td>String｜取消</td>
                    <td>取消按钮文本</td>
                </tr>
                <tr>
                    <td>cancelEvent</td>
                    <td>Function</td>
                    <td>取消事件</td>
                </tr>
                <tr>
                    <td>confirmText</td>
                    <td>String｜确定</td>
                    <td>确定按钮文本</td>
                </tr>
                <tr>
                    <td>confirmEvent</td>
                    <td>Function</td>
                    <td>确认事件</td>
                </tr>
                <tr>
                    <td>change</td>
                    <td>Function</td>
                    <td>改变事件</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>String｜请选择</td>
                    <td>标题</td>
                </tr>
                <tr>
                    <td>visibleCount</td>
                    <td>Number｜5</td>
                    <td>显示的个数，应为奇数</td>
                </tr>
                <tr>
                    <td>data</td>
                    <td>Array</td>
                    <td>显示的数据</td>
                </tr>
                <tr>
                    <td>value</td>
                    <td>[String, Array]</td>
                    <td>选择的值，多列选择时为Array</td>
                </tr>
            </table>
            <h3>data</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>value</td>
                    <td>Array</td>
                    <td>显示的数据，支持两种形式，如上pickerData示例</td>
                </tr>
            </table>
        </div>
        <picker :visible.sync="visible1" :data="pickerData1" v-model="value1" :change="_change1"></picker>
        <picker :visible.sync="visible2" :data="pickerData2" v-model="value2"></picker>
        <picker :visible.sync="visible3" :data="pickerData3" v-model="value3"></picker>
        <picker :visible.sync="visible4" :data="pickerData4" v-model="value4"></picker>
        <!--联动原理：通过change来设置下一级的数据，取消时重置为初始状态-->
        <picker :visible.sync="visible5" :data="pickerData5" v-model="value5" :change="_changeCity"
                :cancelEvent="_cancelEvent"></picker>
    </div>
</template>
<script type="text/ecmascript-6">
    import picker from '../components/picker/index'
    import axios from 'axios';
    import jsAddress from '../../static/js/jsAddress'
    export default {
        name: 'Picker',
        path: '/picker',
        data () {
            return {
                visible1: false,
                visible2: false,
                visible3: false,
                visible4: false,
                visible5: false,
                pickerData1: [
                    {
                        value: [
                            {name: '1不能选择，往下选择', value: '01', disabled: true},
                            {name: '2初始默认', value: '02'},
                            {name: '3', value: '03'},
                            {name: '4不能选择，往下选择', value: '04', disabled: true},
                            {name: '5', value: '05'}
                        ]
                    }
                ],
                value1: '02',
                pickerData2: [
                    {
                        value: ['11', '21', '31', '41', '51', '61', '71', '81', '91', '101']
                    }
                ],
                value2: '51',
                pickerData3: [
                    {
                        value: ['011', '021', '031', '041', '051', '061', '071', '081', '091', '0101']
                    },
                    {
                        value: ['111', '121', '131', '141', '151', '161', '171', '181', '191', '1101']
                    }
                ],
                value3: ['021', '191'],
                pickerData4: [],
                value4: '',
                pickerData5: [
                    /*{
                     value: ''
                     },
                     {
                     value: ''
                     },
                     {
                     value: ''
                     },*/
                ],
                value5: ['广东', '广州市']
            }
        },
        props: {},
        components: {picker, jsAddress},
        methods: {
            _change1(v, index){
                console.log('change');
            },
            _setValue(){
                /*动态设值*/
                if (this.pickerData4.length == 0) {
                    axios.get('/static/restful/picker.json').then((res)=> {
                        //this.pickerData4[0].value = res.data.result
                        this.pickerData4.push({value: res.data.result});
                    }, res=> {
                        console.log('error');
                    });
                    this.value4 = 'a5'
                }
            },
            _changeCity(value, index){
                let array2 = [];
                if (index == 0) {
                    for (let i in jsAddress) {
                        if (jsAddress[i].name == value) {
                            for (let j in jsAddress[i].children) {
                                array2.push(jsAddress[i].children[j].name);
                            }
                            break;
                        }
                    }
                    this.pickerData5.splice(1, 1, {value: array2})
                }
            },
            _links(){
                /*联动*/
                /*先清空pickerData5数组*/
                this.pickerData5.splice(0, this.pickerData5.length);
                let array = [];
                let array2 = [];
                for (let i in jsAddress) {
                    array.push(jsAddress[i].name);
                    if (jsAddress[i].name == this.value5[0]) {
                        for (let j in jsAddress[i].children) {
                            array2.push(jsAddress[i].children[j].name);
                        }
                    }
                }
                this.pickerData5.push({value: array});
                this.pickerData5.push({value: array2})
            },
            _cancelEvent(){
                /*联动取消时恢复原初始值*/
                this._links();
            }
        },
        computed: {},
        mounted(){
            this._links()
        },
        filters: {}
    }
</script>