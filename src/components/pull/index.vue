<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="pull-refresh-loading" @touchstart="_touchStart" @touchmove="_touchMove" @touchend="_touchEnd"
         @touchcancel="_touchEnd" :style="pullStyle">
        <div class="pull-refresh"></div>
        <div class="pull-content">
            <slot></slot>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'pull',
        data () {
            return {
                startY: 0,
                offset: 0
            }
        },
        props: {},
        components: {},
        methods: {
            _getTouch(event){
                return event.changedTouches[0] || event.touches[0];
            },
            _touchStart(e){
                const touch = this._getTouch(event);
                //this.startOffset = this.offset;
                this.startY = touch.clientY;
            },
            _touchMove(e){
                const touch = this._getTouch(event);
                const currentY = touch.clientY;
                let distance = currentY - this.startY;
                if (distance < 0) {
                    distance = 0
                }
                this.offset = distance;
            },
            _touchEnd(e){
            }
        },
        computed: {
            pullStyle(){
                return {
                    transition: 'all 150ms ease',
                    transform: `translate3d(0, ${this.offset}px, 0)`
                }
            }
        },
        mounted(){
        },
        filters: {}
    }
</script>