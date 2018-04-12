<!--Created by 337547038 on 2018/4/12.-->
<template>
    <div class="select-control" @click="visible=true">
        <div class="input-control" v-text="value?value:placeholder" :class="{placeholder:value==''}"></div>
        <Picker :visible.sync="visible" :data="data" v-model="valueNew" :change="_change"
                :cancelEvent="_cancelEvent" :confirmEvent="_confirmEvent" :cancelText="cancelText"
                :confirmText="confirmText" :title="title" :visibleCount="visibleCount"></Picker>
    </div>
</template>
<script>
    import Picker from '../picker/index'
    export default {
        name: 'datePicker',
        data () {
            return {
                visible: false,
                valueCache: [],//改变后临时保存的值
                data: []
            }
        },
        props: {
            min: String,
            max: String,
            type: {
                type: String,
                default: 'ymd'
            },
            value: String,
            placeholder: String,//模拟input效果
            cancelText: String,
            cancelEvent: Function,
            confirmText: String,
            confirmEvent: Function,
            change: Function,
            title: String,
            visibleCount: Number,
            showUnit: {
                type: Boolean,
                default: false
            },
            fill0: {//小于10前面补0
                type: Boolean,
                default: false
            }
        },
        components: {Picker},
        methods: {
            _change(value, index){
                const valueNum = parseInt(value);//带单位时，这个value会是01月
                if (index == 0) {
                    this.valueCache[0] = valueNum;
                } else if (index == 1) {
                    //只在月份改变时做联动
                    let day = new Date(this.valueCache[0], valueNum, 0);
                    let array = this._forArray(1, day.getDate(), '日');
                    this.data.splice(2, 1, array);
                }
                this.cancelEvent ? this.cancelEvent(valueNum) : "";
            },
            _cancelEvent(value){
                this.cancelEvent ? this.cancelEvent(this._format(value)) : "";
            },
            _confirmEvent(value){
                this.$emit('input', this._format(value));
                this.confirmEvent ? this.confirmEvent(this._format(value)) : "";
            },
            _setDate(){
                this.data.splice(0, this.data.length);
                let min = new Date(this.min);
                let max = new Date(this.max);
                let value = new Date(this.value);
                let cur = new Date();
                let yearMin, yearMax;
                //无起始和结束时间，显示前后10年
                if (isNaN(min)) {
                    yearMin = cur.getFullYear() - 10;
                } else {
                    yearMin = min.getFullYear();
                }
                if (isNaN(max)) {
                    yearMax = cur.getFullYear() + 10;
                } else {
                    yearMax = max.getFullYear();
                }
                //如果没有初始值，则设置为当前时间
                if (value == 'Invalid Date') {
                    value = cur;
                }
                //取当月天数
                //new Date(2018,4,1)输出2018-5-1，月份从0开始
                //new Date(2018,4,0)输出2018-4-30，0表示前一天，即上月最后一天
                let day = new Date(value.getFullYear(), value.getMonth() + 1, 0).getDate();
                this.data.push(this._forArray(yearMin, yearMax, '年'));
                let type = this.type;
                //type第2位为m时显示月份
                if (type.substr(1, 1) == 'm') {
                    this.data.push(this._forArray(1, 12, '月'));
                }
                if (type.substr(2, 1) == 'd') {
                    this.data.push(this._forArray(1, day, '日'));
                }
                if (type.substr(3, 1) == 'h') {
                    this.data.push(this._forArray(0, 23, '时'));
                }
                if (type.substr(4, 1) == 'm') {
                    this.data.push(this._forArray(0, 59, '分'));
                }
                if (type.substr(5, 1) == 's') {
                    this.data.push(this._forArray(0, 59, '秒'));
                }
            },
            _forArray(min, max, unit){
                let array = [];
                let v;
                for (let i = min; i <= max; i++) {
                    //前面补0
                    v = i.toString();
                    if (this.fill0 && i < 10) {
                        v = '0' + i
                    }
                    if (this.showUnit) {
                        v = v + unit
                    }
                    array.push(v.toString());
                }
                return {value: array}
            },
            _format(value){
                //格式化时间
                let day, day2;
                if (this.showUnit) {
                    day = value.toString().replace(/,/g, '');
                    day2 = value.toString().replace('年,', '-');
                    day2 = day2.toString().replace('月,', '-');
                    day2 = day2.toString().replace('日,', ' ');
                    day2 = day2.toString().replace('时,', ':');
                    day2 = day2.toString().replace('分,', ':');
                    day2 = day2.toString().replace('秒', '');
                } else {
                    day = value.toString().replace(',', '-');
                    day = day.toString().replace(',', '-');
                    day = day.toString().replace(',', ' ');
                    day = day.toString().replace(',', ':');
                    day = day.toString().replace(',', ':');
                    day2 = day;
                }

                //当选择的时候超出最大或最小值时，做限制
                if (this.min != '' || this.max != '') {
                    const minMax = new Date(day2);
                    const min = new Date(this.min);
                    const max = new Date(this.max);
                    if (min > minMax) {
                        day = this.min;
                    }
                    if (max < minMax) {
                        day = this.max;
                    }
                    //这里也要做格式化转换，为简化代码先跳过
                }
                return day;
            }
        },
        computed: {
            valueNew: {
                get(){
                    let v = new Date(this.value);
                    let array = [];
                    if (this.value == '') {
                        v = new Date();
                    }
                    this.valueCache[0] = v.getFullYear();
                    this.valueCache[1] = v.getMonth();
                    if (this.showUnit) {
                        array = [v.getFullYear().toString() + '年', (v.getMonth() + 1).toString() + '月', v.getDate().toString() + '日', v.getHours().toString() + '时', v.getMinutes().toString() + '分', v.getSeconds().toString() + '秒']
                    } else {
                        array = [v.getFullYear().toString(), (v.getMonth() + 1).toString(), v.getDate().toString(), v.getHours().toString(), v.getMinutes().toString(), v.getSeconds().toString()]
                    }
                    //按显示格式裁剪数组
                    return array.splice(0, this.type.length);
                },
                set(){
                }
            }
        },
        mounted(){
            this._setDate();
        },
        filters: {}
    }
</script>