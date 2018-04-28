<!--Created by 337547038 on 2018/3/29.-->
<template>
    <div class="list-item" @click="_click">
        <template v-if="href">
            <router-link :to="href">
                <i :class="{['icon-'+icon]:icon}" v-if="icon" class="list-icon"></i>
                <div class="list-title">
                    <slot/>
                </div>
                <div slot="other"></div>
                <i class="list-arrow" v-if="arrow"></i>
            </router-link>
        </template>
        <template v-else>
            <i :class="{['icon-'+icon]:icon}" v-if="icon" class="list-icon"></i>
            <div class="list-title">
                <slot/>
            </div>
            <slot name="other"></slot>
            <i class="list-arrow" v-if="arrow"></i>
        </template>
    </div>
</template>
<script>
    export default {
        name: 'List',
        data(){
            return {}
        },
        props: {
            icon: String,//前缀icon
            arrow: {
                type: Boolean,
                default: true
            },
            href: String
        },
        mounted(){
        },
        components: {},
        methods: {
            _click(e){
                this.$emit('click', e);
            }
        },
        computed: {}
    }
</script>