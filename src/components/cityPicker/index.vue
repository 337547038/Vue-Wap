<!--Created by 337547038 on 2018/4/11.-->
<template>
    <div class="select-control" @click="visible=true">
        <div class="input-control" v-text="inputValue" :class="{placeholder:value.length==0}"></div>
        <CityPicker :visible.sync="visible" :data="pickerData" v-model="valueNew" :change="_changeCity"
                    :cancelEvent="_cancelEvent" :confirmEvent="_confirmEvent" :cancelText="cancelText" :confirmText="confirmText" :title="title" :visibleCount="visibleCount"></CityPicker>
    </div>
</template>
<script>
    import CityPicker from '../picker/index'
    import jsAddress from './jsAddress'
    export default {
        name: 'cityPicker',
        data () {
            return {
                visible: false,
                pickerData: [],
                valueNew: this.value,
                valueSub: []//选中值在数组中的下标位置
            }
        },
        props: {
            value: Array,
            placeholder: String,//模拟input效果
            children: {
                //级数
                type: Number,
                default: 3
            },
            cancelText: String,
            cancelEvent: Function,
            confirmText: String,
            confirmEvent: Function,
            change: Function,
            title: String,
            visibleCount: Number
        },
        components: {CityPicker},
        methods: {
            _changeCity(value, index){
                if (index == 0) {
                    //一级改变，对第二，第三级数据重新赋值
                    let a1 = this._getSub(value, jsAddress);
                    this.pickerData.splice(1, 1, this._getData(jsAddress[a1].children));//二级赋值
                    if (this.children > 2) {
                        this.pickerData.splice(2, 1, this._getData(jsAddress[a1].children[0].children));//三级赋值
                    }
                    this.valueSub[0] = a1;//更新
                } else if (index == 1 && this.children > 2) {
                    //二级改变，对第三级重新赋值
                    let a2 = this._getSub(value, jsAddress[this.valueSub[0]].children);
                    this.pickerData.splice(2, 1, this._getData(jsAddress[this.valueSub[0]].children[a2].children));
                } else if (index == 2) {
                }
                this.change ? this.change(value, index) : "";
            },
            _cancelEvent(value){
                this.__init();
                this.cancelEvent ? this.cancelEvent(value) : "";
            },
            _confirmEvent(value){
                this.$emit('input', value);
                this.confirmEvent ? this.confirmEvent(value) : "";
            },
            _getData(data){
                let array = [];
                for (let i in data) {
                    array.push(data[i].name || data[i]);
                }
                return {value: array};
            },
            __init(){
                this.pickerData.splice(0, this.pickerData.length);//清空
                this.valueSub.splice(0, this.valueSub.length);//清空
                this.pickerData.push(this._getData(jsAddress));//一级赋值
                let a1 = this._getSub(this.value[0], jsAddress);
                this.valueSub.push(a1);//保存下标值
                this.pickerData.push(this._getData(jsAddress[a1].children));//二级赋值
                if (this.children > 2) {
                    let a2 = this._getSub(this.value[1], jsAddress[a1].children);
                    this.pickerData.push(this._getData(jsAddress[a1].children[a2].children));//三级赋值
                    this.valueSub.push(a2);//保存下标值
                }
            },
            _getSub(city, data){
                //根据城市名计算在数组中的下标位置
                if (city) {
                    for (let i in data) {
                        if (city == (data[i].name || data[i])) {
                            return i;
                        }
                    }
                } else {
                    return 0
                }
            }
        },
        computed: {
            inputValue(){
                let v;
                if (this.value.length == 0) {
                    v = this.placeholder;
                } else {
                    v = this.value.toString();
                }
                return v;
            }
        },
        mounted(){
            this.__init();
        },
        filters: {}
    }
</script>