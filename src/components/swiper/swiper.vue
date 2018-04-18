<!--Created by 337547038 on 2018/4/13.-->
<!--原理：
前后预留一个单位宽
当处于最后一个到循环到第一个时，touchMove时将第一个移到最后，下次touchStart时先恢复第一个
-->
<template>
    <div class="swiper-container" ref="container" @touchstart="_touchStart"
         @touchmove="_touchMove"
         @touchend="_touchEnd"
         @touchcancel="_touchEnd">
        <div class="swiper-wrapper" :style="styleWrap">
            <slot/>
        </div>
        <div class="swiper-pagination" v-if="pagination">
            <span v-for="(item,index) in swipes" :class="{'swiper-pagination-active':index+1==current}"></span>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'swiper',
        data () {
            return {
                containerWidth: '',//组件宽
                swipes: [],//切换的item，由item更新
                translate: 0,//移动的距离
                duration2: this.duration,//transition-duration过渡时间
                startX: 0,//触摸点位置
                current: this.active,//从1开始，当前第几个
                timer: ''
            }
        },
        props: {
            active: {//当前第几个
                type: Number,
                default: 1
            },
            showTime: {//动画停留时间，单位毫秒
                type: Number,
                default: 3000
            },
            autoPlay: {
                type: Boolean,
                default: true
            },
            slideAfter: Function,
            distance: {//事件触发距离
                type: Number,
                default: 50
            },
            duration: {//transition-duration过渡时间
                type: Number,
                default: 500
            },
            pagination: {//显示分页小圆点
                type: Boolean,
                default: true
            }
        },
        components: {},
        methods: {
            _getTouch(event){
                return event.changedTouches[0] || event.touches[0];
            },
            _touchStart(event){
                clearInterval(this.timer);
                const touch = this._getTouch(event);
                this.startX = touch.clientX;
                //重置item项初始状态
                /*for (let i in this.swipes) {
                 this.swipes[i].offset = 0;
                 }
                 //到最后+1个的时候，先回到第一个
                 const length = this.swipes.length;
                 if (this.current > length) {
                 this.current = 1;
                 } else if (this.current == 0) {
                 //第0个，即由第一个向右到最后一个，此时显示为最后一个(通过translate移到最前面)，但current=0
                 this.current = length;
                 }
                 this._translate(0);*/
                event.preventDefault()
            },
            _touchMove(event){
                const touch = this._getTouch(event);
                const distance = touch.clientX - this.startX;
                const startOffset = -this.containerWidth * this.current;//移动前的位置
                const length = this.swipes.length;
                const offset = this.containerWidth * length;//最后或第一个将要偏移的距离
                //如果是最后一个到第一个时，将第一个移到最后
                if (this.current == length && distance < 0) {
                    this.swipes[0].offset = offset;//即移padding-right位置
                }
                //第一个到最后一个时
                if (this.current == 1 && distance > 0) {
                    this.swipes[length - 1].offset = -offset;//padding-left位置
                }
                this.duration2 = 0;
                this.translate = startOffset + distance;
                event.preventDefault()
            },
            _touchEnd(event){
                const touch = this._getTouch(event);
                const distance = touch.clientX - this.startX;//大于0向右
                if (Math.abs(distance) > this.distance) {
                    //移动大于多少个单位触发
                    if (distance > 0) {
                        //向右移，
                        this.current--
                    } else if (distance < 0) {
                        //向左移
                        this.current++
                    }
                }
                this._translate();
                this._slideAfter();
                this._autoPlay();
            },
            _translate(duration = this.duration){
                this.translate = -this.containerWidth * this.current;
                this.duration2 = duration;
                //当第一个后移或最后一个前移时，这里设个时间，等移动结束后恢复状态
                //这里触摸和autoPlay合并，要不在touchStart时要恢复状态
                let length = this.swipes.length;
                let index = 0;
                if (this.current > length || this.current < 1) {
                    //加个定时器等待上面动画执行完再重置状态
                    if (this.current > length) {
                        this.current = 1;
                        //this.swipes[0].offset = 0;
                    } else {
                        this.current = length;
                        //this.swipes[length - 1].offset = 0;
                        index = length - 1;
                    }
                    setTimeout(()=> {
                        this.swipes[index].offset = 0;
                        this._translate(0);
                    }, this.duration)
                }
            },
            _autoPlay(){
                if (this.autoPlay) {
                    const length = this.swipes.length;
                    this.timer = setInterval(()=> {
                        if (this.current == length) {
                            this.swipes[0].offset = this.containerWidth * length;
                        }
                        this.current++;
                        this._translate();
                        /*if (this.current > length) {
                         //加个定时器等待上面动画执行完再重置状态
                         setTimeout(()=> {
                         this.current = 1;
                         this.swipes[0].offset = 0;
                         this._translate(0);
                         //debugger
                         }, this.duration)
                         }*/
                        this._slideAfter();
                    }, this.showTime);
                }
            },
            _slideAfter(){
                this.slideAfter ? this.slideAfter(this.current) : "";
            }
        },
        computed: {
            styleWrap(){
                return {
                    width: this.containerWidth * this.swipes.length + 'px',
                    padding: `0 ${this.containerWidth}px`,
                    transform: `translate3d(${this.translate}px,0,0)`,
                    transition: `transform ${this.duration2}ms`
                }
            }
        },
        mounted(){
            this.containerWidth = this.$refs.container.offsetWidth;//宽
            this._translate();
            this._autoPlay();
        },
        filters: {}
    }
</script>