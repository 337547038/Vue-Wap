<!--Created by 337547038 on 2018/3/29.-->
<template>
    <div class="list-item">
        <i :class="{['icon-'+icon]:icon}" v-if="icon"></i>
        <h3 v-text="title"></h3>
        <slot></slot>
        <i class="list-arrow icon-arrow"></i>
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
            title: String,
            arrow: {
                type: Boolean,
                default: true
            }
        },
        mounted(){
        },
        components: {},
        methods: {},
        computed: {}
    }
</script>