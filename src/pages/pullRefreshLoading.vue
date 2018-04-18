<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="container">
        <comHeader title="pullRefreshLoading"/>
        <pull>
            <p>this is content</p>
            <p style="height: 3336px;"></p>
            <p>this is content</p>
        </pull>
    </div>
</template>
<script>
    import Pull from '../components/pull/index'
    export default {
        name: 'pullRefreshLoading',
        path: '/pull',
        data () {
            return {}
        },
        props: {},
        components: {Pull},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>