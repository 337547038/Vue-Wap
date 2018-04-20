<!--Created by 337547038 on 2018/4/17.-->
<template>
    <div class="keyboard" @click="_click">
        <div class="input-control" v-text="showValue?showValue:placeholder" :class="{'placeholder':value==''}"
             ref="input"></div>
        <transition name="slide">
            <div class="keyboard-fixed" v-show="visible" ref="getHeight">
                <div class="keyboard-control" v-text="confirmText" @click="_confirmClick"></div>
                <div class="keyboard-num">
                    <a v-for="item in [1,2,3,4,5,6,7,8,9]" v-text="item" @click="_numClick(item)"></a>
                    <a v-if="float" @click="_numClick('.')">.</a>
                    <a v-else></a>
                    <a @click="_numClick(0)">0</a>
                    <a @click="_numDel" class="icon-delete"></a>
                </div>
            </div>
        </transition>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'keyboard',
        data(){
            return {
                visible: false,
                keyboardHeight: 0
                //newValue: this.value
            }
        },
        watch: {
            visible(v){
                if (v) {
                    this.$nextTick(()=> {
                        this.keyboardHeight = this.$refs.getHeight.offsetHeight;
                        this._setTranslate(this.$refs.input)
                    });
                }
            }
        },
        props: {
            value: [String, Number],
            confirmText: {
                type: String,
                default: '确定'
            },
            confirmEvent: Function,
            float: {//小数输入
                type: Boolean,
                default: true
            },
            placeholder: String,
            password: {//显示密码格式
                type: Boolean,
                default: false
            },
            maxLength: Number//允许输入的长度
        },
        mounted(){

        },
        components: {},
        methods: {
            _click(e){
                this.visible = true;
            },
            _setTranslate(el){
                //计算偏移量
                let wh = document.documentElement.clientHeight || document.body.clientHeight;//窗口高
                let clientHeight = wh - this.keyboardHeight;//弹出键盘后窗口的高
                let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;//滚动条位置
                //计算当前元素到浏览器顶部的距离
                let componentRect = el.getBoundingClientRect();
                let offsetTop = componentRect.top;
                let elHeight = componentRect.height;
                if (clientHeight < offsetTop + elHeight) {
                    //表示被键盘挡住了
                    //window.scrollTo(0, offsetTop - clientHeight + scrollTop + elHeight)//这效果太生硬
                    //将body上移键盘的高度，有时往上移到时会偏上了
                    let top = this.keyboardHeight;
                    //向上移动后距离浏览器顶部距离，即太靠近顶部时，就偏移半个键盘的高
                    if (offsetTop - top < clientHeight / 2) {
                        top = top / 2;
                    }
                    let body = document.querySelector('#app');
                    body.style.transition = 'all 300ms ease';
                    //body.style.transform = `translate3d(0, -${top}px, 0)`;//transform会让fixed失败
                    body.style.marginTop = -top + 'px';
                    //body.style.position='relative'
                }
            },
            _confirmClick(e){
                this.visible = false;
                this.confirmEvent ? this.confirmEvent(this.value) : "";
                let body = document.querySelector('#app');
                body.style.marginTop = '';
                e.stopPropagation();
            },
            _numClick(item){
                if (this.maxLength && this.maxLength <= this.value.length) {
                    return
                }
                let newValue = this.value.toString();
                if (item == '.') {
                    //第一个字符不允许是.号。
                    //点号也只允许出现一次
                    if (this.value != '' && this.value.indexOf('.') == -1) {
                        newValue += item
                    }
                } else {
                    newValue += item
                }
                this.$emit('input', newValue);
            },
            _numDel(){
                if (this.value) {
                    let newValue = this.value.substr(0, this.value.length - 1);
                    this.$emit('input', newValue);
                }
            }
        },
        computed: {
            showValue(){
                if (this.value != '') {
                    if (this.password) {
                        let v = '';
                        for (let i in this.value) {
                            v += '●'
                        }
                        return v
                    } else {
                        return this.value
                    }
                } else {
                    return this.placeholder
                }
            }
        }
    }
</script>