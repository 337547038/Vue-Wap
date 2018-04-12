<!--Created by 337547038 on 2017/12/14.-->
<!--example
<ProgressBar :value="30" :radius="400" :border="10" color="#999" borderColor="#f60" type="line"></ProgressBar>-->
<template>
    <div class="progress">
        <template v-if="type=='line'">
            <div class="progress-line" :style="{width:radius/75+'rem',background:color,minHeight:border/75+'rem'}"
                 :class="{[className]:className}">
                <slot></slot>
                <span class="progress-text" v-if="showText" :style="lineStyleText"><b>{{percent}}</b>%</span>
                <span class="progress-bar" :style="lineStyle"></span>
            </div>
        </template>
        <template v-else-if="type=='circle'">
            <div class="progress-circle" v-style.pro="circleStyle" :class="{[className]:className}">
                <slot></slot>
                <span class="progress-text" v-if="showText"><b>{{percent}}</b>%</span>
                <div class="circle-circle" v-style.circle="circleStyle" :style="circleStyle2">
                    <span class="circle-left" v-style.left="circleStyle" :style="circleRotateStyle"></span>
                    <span class="circle-right" v-style.right="circleStyle" v-if="percent>=50"></span>
                </div>
            </div>
        </template>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'Progress',
        data () {
            return {
                circleStyle: {//定义个方便传到指令去
                    radius: this.radius/75,
                    border: this.border/75,
                    color: this.color,
                    borderColor: this.borderColor
                },
                percent: 0
            }
        },
        props: {
            type: String,
            className: String,
            value: {//进度
                type: Number,
                default: 0
                /*validator: function (value) {
                 return value >= 0 && value <= 100;
                 }*/
            },
            radius: {//外半径
                type: Number,
                default: 0

            },
            border: {//边框
                type: Number,
                default: 0
            },
            color: String,//底环颜色
            borderColor: String,//进度条颜色
            duration: {//动画持续时间，单位毫秒
                type: Number,
                default: 1000
            },
            showText: {//显示进度数字
                type: Boolean,
                default: true
            },
            follow: {//进度数字跟进进度
                type: Boolean,
                default: true
            }
        },
        created(){
        },
        components: {},
        methods: {
            _animation(){
                //这里还是用js控制，css控制不了，因为大于50%后还要处理其他
                let clearTime;
                clearTime = setInterval(()=> {
                    if (this.percent < this.value && this.percent < 100) {
                        this.percent++;
                    } else {
                        clearInterval(clearTime);
                    }
                }, this.duration / this.value);
            }
        },
        computed: {
            lineStyle(){
                return {
                    height: this.border/75 + 'rem',
                    width: this.percent + '%',
                    background: this.borderColor,
                    transition: `all ${this.duration / 1000}s`
                }
            },
            lineStyleText(){
                if (this.follow && this.showText) {
                    return {
                        left: this.percent + '%',
                        transition: `all ${this.duration / 1000}s`
                    }
                }
            },
            circleStyle2(){
                //value大于50%时显示完整，小于50%，显示右半边　　360/100
                if (this.percent > 50) {
                    return {
                        clip: 'rect(auto,auto,auto,auto)'
                    }
                } else {
                    return {
                        clip: `rect(0,${this.radius * 2/75}rem,${this.radius * 2/75}rem,${this.radius/75}rem)`
                    }
                }
            },
            circleRotateStyle(){
                //左半圆根据value值旋转即可，360度/100=3.6
                return {
                    transform: "rotate(" + 3.6 * this.percent + "deg)",
                    webkitTransform: "rotate(" + 3.6 * this.percent + "deg)"
                }
            }
        },
        mounted(){
            if (this.type == 'circle') {
                this._animation();
            } else if (this.type == 'line') {
                //这里用css3动画的transition，设置下延时
                setTimeout(()=> {
                    this.percent = this.value;
                }, 10)
            }
        },
        filters: {},
        directives: {
            //每个都指定宽高等，但每个标签又不太一致，部分共公的，这里用指令，并且是bind形式只调用一次
            //发现每个都要写style好麻烦
            style: {
                bind(el, binding)
                {
                    let value = binding.value;
                    let type = binding.modifiers;
                    let style = el.style;
                    style.width = value.radius * 2 + 'rem';
                    style.height = value.radius * 2 + 'rem';
                    if (type.pro) {
                        style.border = `${value.border}rem solid ${value.color}`;
                    } else if (type.circle) {
                        style.left = `-${value.border}rem`;
                        style.top = `-${value.border}rem`;
                    } else if (type.left) {
                        style.border = `${value.border}rem solid ${value.borderColor}`;
                        style.clip = `rect(0, ${value.radius}rem, ${value.radius * 2}rem, 0px)`;
                    } else if (type.right) {
                        style.border = `${value.border}rem solid ${value.borderColor}`;
                        style.clip = `rect(0, ${value.radius * 2}rem, ${value.radius * 2}rem, ${value.radius}rem)`;
                    }
                }
            }
        }
    }
</script>