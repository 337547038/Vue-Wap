<!--Created by 337547038 on 2018/3/29.-->
<template>
    <div class="container">
        <comHeader title="List"/>
        <div class="demo">
            <list icon="correct" class="first" title="列表名称">123</list>
            <list></list>
        </div>
    </div>
</template>
<script>
    import list from '../components/list/index'
    export default {
        name: 'List',
        path: '/list',
        data(){
            return {}
        },
        props: [],
        mounted(){
        },
        components: {list},
        methods: {},
        computed: {}
    }
</script>