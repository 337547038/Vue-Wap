<!--Created by 337547038 on 2018/3/27.-->
<template>
    <div class="picker">
        <transition name="fade">
            <div class="mask" v-show="visible" @click="_maskClick"></div>
        </transition>
        <transition name="slide">
            <div class="picker-content" v-show="visible" ref="content">
                <div class="picker-control">
                    <a href="javascript:;" class="picker-cancel" v-text="cancelText" @click="_cancelClick"></a>
                    <h3 v-text="title" v-if="title"></h3>
                    <a href="javascript:;" class="picker-confirm" v-text="confirmText" @click="_confirmClick">确定</a>
                </div>
                <div class="picker-group" :style="{height:visibleCount*liHeight+'px'}">
                    <div class="picker-border" :style="pickerBorder"></div>
                    <pickerItem v-for="(item,index) in data" :data="item.value" :key="index" :index="index" :height="liHeight"
                                :change="_change" :value="typeof pickerValue=='string'?pickerValue:pickerValue[index]"
                                ref="pickItem"></pickerItem>
                </div>
            </div>
        </transition>
    </div>
</template>
<script type="text/ecmascript-6">
    import pickerItem from './item'
    export default {
        name: 'picker',
        data () {
            return {
                liHeight: 0,
                pickerValue: this.value
            }
        },
        watch: {
            visible(v){
                /*if (v && this.liHeight == '') {
                 //这种是动态加载数据时，初始化完成是取不到liHeight值的
                 this._getDisplayHeight();
                 }
                 v ? this._setDefaultValue() : "";//弹出层时重新设一次*/
            },
            /*data(){
                if (this.liHeight == '') {
                    //这种是动态加载数据时，初始化完成是取不到liHeight值的
                    this._getDisplayHeight();
                    console.log(this.liHeight);
                }
            }*/
            value(){
                console.log('v change');
                console.log(this.pickerValue);
            }
        },
        props: {
            visible: {//显示或隐藏，通过sync实现双向绑定
                type: Boolean,
                default: false
            },
            maskClose: {//点闭遮罩层是否关闭
                type: Boolean,
                default: true
            },
            cancelText: {//取消按钮文本
                type: String,
                default: ''
            },
            confirmText: {//确定按钮文本
                type: String,
                default: '确认'
            },
            confirmEvent: Function,
            change: Function,
            title: {
                type: String,
                default: '请选择'
            },
            visibleCount: {//显示的个数
                type: Number,
                default: 5
            },
            data: Array,
            value: [String, Array]
        },
        components: {pickerItem},
        methods: {
            _maskClick(){
                //点闭遮罩层是否关闭
                this.maskClose ? this._cancelClick() : "";
            },
            _cancelClick() {
                //点击取消，关闭退出
                this.$emit("update:visible", false);
            },
            _confirmClick(){
                this._cancelClick();
                this.$emit('input', this.pickerValue);
                this.confirmEvent ? this.confirmEvent() : ""
            },
            _change(value, index, bool){
                //bool=false时是初始时设置的，如值为空时，默认选中第一项，
                //否则弹出直接按确定没法取值
                if (typeof this.pickerValue === 'string') {
                    //单列
                    this.pickerValue = value;
                } else {
                    //多列时，值为数组
                    //this.pickerValue[index] = value;
                    //采用上面方法是不会同步更新的，因为vue监听的是this.pickerValue，
                    //没有监听this.pickerValue的子项，所以直接改变子项不会触发更新
                    this.pickerValue.splice(index, 1, value);//先移除再添加
                }
                if (bool) {
                    this.change ? this.change(value, index) : "";
                    this.$emit('input', this.pickerValue);
                }
            },
            _getDisplayHeight(){
                //取隐藏标签的高
                const obj = this.$refs.content;
                const clone = obj.cloneNode(true);
                clone.style.display = "block";
                clone.style.position = "absolute";
                clone.style.top = '-10000px';
                obj.parentNode.appendChild(clone);
                const li = clone.querySelector('li');
                if (li) {
                    this.liHeight = li.offsetHeight;
                }
                obj.parentNode.removeChild(clone);
            },
            /*_setDefaultValue(){
             //设置默认选中值
             let newValue;
             for (let i in this.$refs.pickItem) {
             if (typeof this.value == 'string') {
             newValue = this.value;
             } else {
             newValue = this.value[i];
             }
             //这里将当前值传进去，值动态加载进来时，没有同步到item.vue
             this.$refs.pickItem[i].setTransform(newValue);
             }
             }*/
        },
        computed: {
            pickerBorder(){
                return {
                    top: Math.floor(this.visibleCount / 2) * this.liHeight + 'px'
                }
            }
        },
        mounted(){
            this._getDisplayHeight();
            //设置默认选中值
            //this._setDefaultValue();
        },
        filters: {}
    }
</script>