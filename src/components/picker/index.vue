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
                    <span v-text="title" v-if="title" class="picker-title"></span>
                    <a href="javascript:;" class="picker-confirm" v-text="confirmText" @click="_confirmClick">确定</a>
                </div>
                <div class="picker-group" :style="{height:visibleCount*liHeight+'px'}">
                    <div class="picker-border"></div>
                    <pickerItem v-for="(item,index) in data" :data="item.value" :key="index" :index="index"
                                :height="liHeight"
                                :change="_change" :value="typeof value=='string'?value:value[index]"
                                ref="item"></pickerItem>
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
                newValue: this.value
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
                default: '取消'
            },
            cancelEvent: Function,
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
            _maskClick(e){
                //点闭遮罩层是否关闭
                this.maskClose ? this._cancelClick(e) : "";
            },
            _cancelClick(e) {
                //点击取消，关闭退出
                //恢复状态
                let item = this.$refs.item;
                for (let i in item) {
                    item[i]._moveTo();
                }
                this.$emit("update:visible", false);
                this.cancelEvent ? this.cancelEvent(this.value) : "";
                e.stopPropagation();
            },
            _confirmClick(e){
                //this._cancelClick();
                this.$emit("update:visible", false);
                this.confirmEvent ? this.confirmEvent(this.newValue) : "";
                this.$emit('input', this.newValue);
                e.stopPropagation();
            },
            _change(value, index, bool){
                //这里修改为点击确认才更新选中值
                if (typeof this.value == 'string') {
                    //this.$emit('input', value);
                    this.newValue = value;
                } else {
                    let newValue = this.newValue.slice(0);
                    newValue[index] = value;
                    //采用上面方法是不会同步更新的，因为vue监听的是this.value，
                    //没有监听this.value的子项，所以直接改变子项不会触发更新
                    //newValue.splice(index, 1, value);//先移除再添加
                    //this.$emit('input', newValue);
                    this.newValue = newValue;
                }
                //bool=false时是初始时设置的
                if (bool) {
                    this.change ? this.change(value, index) : "";
                }
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
            /*pickerBorder(){
                return {
                    top: Math.floor(this.visibleCount / 2) * this.liHeight + 'px'
                }
            }*/
        },
        mounted(){
            this._getDisplayHeight();
        },
        filters: {}
    }
</script>