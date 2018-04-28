<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="pull-refresh-loading" @touchstart="_touchStart" @touchmove="_touchMove" @touchend="_touchEnd"
         @touchcancel="_touchEnd" :style="pullStyle">
        <div class="pull-refresh" v-if="refresh" v-text="refreshText" :class="{'loading-loading':loading}"></div>
        <div class="pull-content">
            <slot></slot>
        </div>
        <div class="pull-loading" v-text="loadingText" :class="{'loading-loading':loading}"></div>
    </div>
</template>
<script type="text/ecmascript-6">
    export default {
        name: 'pull',
        data () {
            return {
                startY: 0,
                offset: 0,
                duration2: this.duration,
                direction: '',//方向0下1上
                refresh: false,//显示隐藏
                refreshText: this.refreshTips[0],//刷新提示文本
                loadingText: this.loadingTips[0],
                allowLoading: true,//允许加载
                loading: false,//正在执行状态
                documentHeight: ''//文档高度
            }
        },
        props: {
            duration: {//完成过渡效果需要多少毫秒
                type: Number,
                default: 500
            },
            distance: {//触发距离
                type: Number,
                default: 50
            },
            refreshTips: {
                type: Array,
                default: function () {
                    return ['下拉刷新', '松手刷新', '正在刷新']
                }
            },
            loadingTips: {
                type: Array,
                default: function () {
                    return ['上拉加载', '松手加载', '正在加载', '没有更多了']
                }
            },
            onRefresh: Function,
            onLoading: Function
        },
        components: {},
        methods: {
            _touchStart(e){
                const touch = this.getTouch(e);
                this.startY = touch.clientY;
                //重置，包括隐藏加载标签，将加载相关的提示文字设置为初始状态
                this.direction = -1;
                this.refresh = false;
                this.refreshText = this.refreshTips[0];
                let t = 0;
                if (!this.allowLoading) {
                    t = 3
                }
                this.loadingText = this.loadingTips[t];
                //this.loading = false;//正在加载状态样式
                //更新文档高度
                this.documentHeight = this.getHeight(document);
            },
            _touchMove(e){
                const touch = this.getTouch(e);
                const currentY = touch.clientY;
                let distance = currentY - this.startY;
                var scrollTop = this.getScrollTop();
                this.duration2 = 0;
                if (distance > 0) {
                    //往下拉，如果在顶部
                    if (scrollTop == 0) {
                        this.refresh = true;
                        this.offset = distance;
                        if (distance > this.distance && !this.loading) {
                            //刷新条件成立
                            this.refreshText = this.refreshTips[1];
                            this.direction = 0;
                        }
                        //正在刷新时
                        if (this.loading) {
                            this.refreshText = this.refreshTips[2];
                        }
                        e.preventDefault();
                    }
                } else if (distance < 0) {
                    //往上拉时，如果在底部
                    if (scrollTop == this.documentHeight - this.windowHeight) {
                        this.offset = distance;
                        e.preventDefault();
                        if (!this.allowLoading) {
                            //没有更多数据时不能加载
                            this.loadingText = this.loadingTips[3];
                            return
                        }
                        if (Math.abs(distance) > this.distance && !this.loading) {
                            //显示松手加载，加载条件成立
                            this.loadingText = this.loadingTips[1];
                            this.direction = 1;
                        }
                        //正在刷新时
                        if (this.loading) {
                            this.loadingText = this.loadingTips[2];
                        }
                    }
                }
            },
            _touchEnd(e){
                this.duration2 = this.duration;
                this.offset = 0;
                //防止多次刷新加载
                if (this.loading) {
                    return
                }
                if (this.direction == 0) {
                    let refresh = ()=> {
                        //刷新完成后重置状态
                        this.refresh = false;
                        this.refreshText = this.refreshTips[0];
                        this.loading = false;
                    };
                    this.loading = true;//正在加载状态样式
                    this.refreshText = this.refreshTips[2];
                    this.onRefresh ? this.onRefresh(refresh) : '';
                } else if (this.direction == 1) {
                    let loading = (t)=> {
                        if (t == 0) {
                            //没有更多时
                            this.allowLoading = false;
                            this.loading = false;
                            this.loadingText = this.loadingTips[3];
                        } else {
                            this.loadingText = this.loadingTips[0];
                        }
                        this.loading = false;
                    };
                    this.loading = true;//正在加载状态样式
                    this.loadingText = this.loadingTips[2];
                    this.onLoading ? this.onLoading(loading) : '';
                } else {
                    //这种是下拉或上拉时滑动的距离没有大小触发距离
                    this.refresh = false;//隐藏下拉提示
                }
            }
        },
        computed: {
            pullStyle(){
                return {
                    // transition: 'all 150ms ease',
                    transition: `all ${this.duration2}ms ease`,
                    transform: `translate3d(0, ${this.offset}px, 0)`
                }
            },
            /* documentHeight(){
             return this.getHeight(document);
             },*/
            windowHeight(){
                return this.getHeight(window);
            }
        },
        mounted(){
            this.documentHeight = this.getHeight(document);
        },
        filters: {}
    }
</script>