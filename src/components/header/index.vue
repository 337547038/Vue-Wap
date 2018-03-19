<!--Created by 337547038 on 2018/3/9.-->
<template>
    <div class="header">
        <a href="javascript:history.go(-1);" class="back" v-if="back&&!backUrl"></a>
        <router-link :to="backUrl" v-if="back&&backUrl" class="back"></router-link>
        <h1 v-text="title"></h1>
        <slot name="right"></slot>
    </div>
</template>
<script>
    export default {
        name: 'Header',
        data () {
            return {}
        },
        props: {
            title: String,
            back: {
                type: Boolean,
                default: true
            },
            backUrl:String
        },
        components: {},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>