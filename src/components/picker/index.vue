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
                    <pickerItem v-for="(item,index) in data" :data="item.value" :key="index" :index="index"
                                :height="liHeight"
                                :change="_change" :value="typeof value=='string'?value:value[index]"></pickerItem>
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
                liHeight: 0
            }
        },
        watch: {
            visible(v){
                //初始时数据为空，在显示时再计算位置
                if (v && this.liHeight == 0) {
                    this._getDisplayHeight();
                }
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
                this.confirmEvent ? this.confirmEvent(this.value) : ""
            },
            _change(value, index, bool){
                if (typeof this.value == 'string') {
                    this.$emit('input', value);
                } else {
                    let newValue = this.value;
                    //newValue[index] = value;
                    //采用上面方法是不会同步更新的，因为vue监听的是this.value，
                    //没有监听this.value的子项，所以直接改变子项不会触发更新
                    newValue.splice(index, 1, value);//先移除再添加
                    this.$emit('input', newValue);
                }
                //bool=false时是初始时设置的
                if (bool) {
                    this.change ? this.change(value, index) : "";
                }
                /* //bool=false时是初始时设置的，如值为空时，默认选中第一项，
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
                 }*/
            },
            _getDisplayHeight(){
                //取隐藏标签的高
                const obj = this.$refs.content;
                const clone = obj.cloneNode(true);
                clone.style.display = "block";
                clone.style.position = "absolute";
                clone.style.opacity = 0;
                clone.style.top = '-10000px';
                obj.parentNode.appendChild(clone);
                const li = clone.querySelector('li');
                if (li) {
                    this.liHeight = li.offsetHeight;
                }
                obj.parentNode.removeChild(clone);
            }
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
        },
        filters: {}
    }
</script>