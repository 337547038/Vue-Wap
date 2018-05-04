<!--Created by 337547038 on 2018/4/26.-->
<template>
    <div class="dialog" v-if="!insertDialog" :class="{[className]:className}">
        <transition name="fade">
            <div class="overlay" v-if="maskLayer" v-show="visible2" @click="_maskClick"></div>
        </transition>
        <transition :name="transition">
            <div class="dialog-flex" v-show="visible2" @click="_maskClick">
                <div class="dialog-body">
                    <a href="javascript:;" class="dialog-close icon-close" @click="_closeClick" v-if="showClose"></a>
                    <div class="dialog-title" v-text="title" v-if="title"></div>
                    <div class="dialog-content">
                        <div class="dialog-text" v-text="content" v-if="content"></div>
                        <slot v-else></slot>
                    </div>
                    <div class="dialog-footer" v-if="confirmText||cancelText">
                        <Btn class="btn-cancel" v-text="cancelText" @click="_cancelClick" v-if="cancelText"></Btn>
                        <Btn class="btn-confirm" v-text="confirmText" @click="_confirmClick" v-if="confirmText"></Btn>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>
<script type="text/ecmascript-6">
    import Btn from '../button/index'
    export default {
        name: 'Dialog',
        data () {
            return {
                insertDialog: false,//如果是this.$dialog方式，关闭时用于移除控制
                visible2: this.visible,
                clearTime: '',//定时器
                autoTime: ''//自动关闭时间
            }
        },
        props: {
            className: String,
            maskLayer: {//显示遮罩层
                type: Boolean,
                default: true
            },
            maskClose: {//点击遮罩层关闭
                type: Boolean,
                default: true
            },
            visible: {//显示隐藏
                type: Boolean,
                default: false
            },
            insert: {//插入方式，一种是普通组件使用，另一种是将内容插入到body，这个参数不用手动传
                type: Boolean,
                default: false
            },
            transition: {//动画过渡名称
                type: String,
                default: 'scale'
            },
            autoClose: {
                type: Number,
                default: 0
            },
            showClose: {//显示关闭按钮
                type: Boolean,
                default: false
            },
            closeEvent: Function,
            title: String,//dialog标题
            content: String,
            confirmText: String,//确定按钮
            confirmEvent: Function,
            cancelText: String,//取消按钮
            cancelEvent: Function
        },
        watch: {
            visible(v){
                if (v) {
                    this.open();
                }
            }
        },
        components: {Btn},
        methods: {
            _maskClick(e){
                //实际上点击不到遮罩层，这dialog-flex层挡住了，因此事件加在dialog-flex
                //遮罩层点击
                this.maskLayer && this.maskClose ? this._closeClick(e) : "";
            },
            _close(){
                //关闭方法
                this.$emit('update:visible', false);
                this.visible2 = false;
                if (this.insert) {
                    //如果是插入到body的，关闭时移除。要不每点击会生成一个新窗口
                    // 这里设置个延时，要不没有关闭动画
                    setTimeout(()=> {
                        this.insertDialog = true;
                    }, 500);
                }
                clearInterval(this.clearTime);
            },
            _closeClick(e){
                this.closeEvent ? this.closeEvent(e) : this._close();
                e.stopPropagation();
            },
            open(){
                //提供给this.$dialog方式用于打开
                this.visible2 = true;
                this._autoClose();
            },
            close(){
                //对应于open
                this._close();
            },
            _cancelClick(e){
                this.cancelEvent ? this.cancelEvent(e) : this._close();
                e.stopPropagation();
            },
            _confirmClick(e){
                this.confirmEvent ? this.confirmEvent(e) : this._close();
                e.stopPropagation();
            },
            _autoClose(){
                //自动关闭
                if (this.autoClose > 0) {
                    this.autoTime = this.autoClose;
                    this.clearTime = setInterval(()=> {
                        if (this.autoTime > 0) {
                            this.autoTime--;
                        } else {
                            this._close();
                        }
                    }, 1000);
                }
            }
        },
        computed: {},
        mounted(){

        },
        filters: {}
    }
</script>