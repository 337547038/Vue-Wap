<!--Created by 337547038 on 2018/4/17.-->
<template>
    <div class="keyboard" @click="_click">
        <div class="input-control" v-text="showValue?showValue:placeholder" :class="{'placeholder':value==''}"></div>
        <transition name="slide">
            <div class="keyboard-fixed" v-show="visible" ref="getHeight">
                <div class="keyboard-control" v-text="confirmText" @click="_confirmClick"></div>
                <div class="keyboard-num">
                    <a v-for="item in [1,2,3,4,5,6,7,8,9]" v-text="item" @click="_numClick(item)"></a>
                    <a v-if="float" @click="_numClick('.')">.</a>
                    <a v-else></a>
                    <a @click="_numClick(0)">0</a>
                    <a @click="_numDel">del</a>
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
            _click(){
                this.visible = true;
                this.$nextTick(()=> {
                    this.keyboardHeight = this.$refs.getHeight.offsetHeight;
                    this._setTranslate()
                })
            },
            _setTranslate(){
                //计算偏移量
            },
            _confirmClick(e){
                this.visible = false;
                this.confirmEvent ? this.confirmEvent(this.value) : "";
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