<!--Created by 337547038 on 2018/4/23.-->
<template>
    <span class="badge" :class="{'badge-dot':isDot}">
        <!--<slot></slot>-->
        {{slot}}
    </span>
</template>
<script>
    export default {
        name: 'badge',
        data () {
            return {}
        },
        props: {
            isDot: {
                type: Boolean,
                default: false
            },
           /* isTop: {
                type: Boolean,
                default: false
            },*/
            max: {
                type: Number,
                default: 99
            }
        },
        components: {},
        methods: {},
        computed: {
            slot(){
                let slots = this.$slots.default;
                if (slots) {
                    // let text = slots.default[0].text;
                    let text = slots[0].text;
                    if (!isNaN(text) && text > this.max) {
                        //如果是数字且大于最大值，显示+号
                        return this.max + '+'
                    } else {
                        return text
                    }
                }

            }
        },
        mounted(){
            //console.log(this.$children);
            /* if(this.$slots.default){
             console.log(this.$slots.default[0].text);
             }*/
        },
        filters: {}
    }
</script>