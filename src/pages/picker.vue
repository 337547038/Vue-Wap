<!--Created by 337547038 on 2018/3/27.-->
<template>
    <div class="container">
        <comHeader title="Picker"/>
        <div @click="click1">单列（对象数组）{{value1}}</div>
        <picker :visible.sync="visible1" :data="pickerData1" v-model="value1" :change="_change1"></picker>
        <div @click="click2">单列{{value2}}</div>
        <picker :visible.sync="visible2" :data="pickerData2" v-model="value2"></picker>
        <div @click="click3">多列{{value3}}</div>
        <picker :visible.sync="visible3" :data="pickerData3" v-model="value3"></picker>
        <div @click="click4">动态值{{value4}}</div>
        <div @click="_setValue">动态设值</div>
        <picker :visible.sync="visible4" :data="pickerData4" v-model="value4"></picker>
        <div @click="click5">联动{{value5}}</div>
        <picker :visible.sync="visible5" :data="pickerData5" v-model="value5" :change="_changeCity"></picker>
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
                value1: '',
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
                     value: this.getProvinces()
                     },
                     {
                     value: this.getCity()
                     },
                     {
                     value: this.getArea()
                     },*/
                ],
                value5: ['广东', '广州市']
            }
        },
        props: {},
        components: {picker, jsAddress},
        methods: {
            click1(){
                this.visible1 = true;
            },
            click2(){
                this.visible2 = true;
            },
            click3(){
                this.visible3 = true;
            },
            click4(){
                this.visible4 = true;
            },
            click5(){
                this.visible5 = true;
            },
            _change1(v, index){
                console.log('change');
            },
            _setValue(){
                /*动态设值*/
                axios.get('/static/restful/picker.json').then((res)=> {
                    //this.pickerData4[0].value = res.data.result
                    this.pickerData4.push({value: res.data.result});
                }, res=> {
                    console.log('error');
                });
                this.value4 = 'a5'
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
            }
        },
        computed: {},
        mounted(){
            /*联动*/
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
        filters: {}
    }
</script>