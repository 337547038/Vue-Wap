<!--Created by 337547038 on 2018/3/9.-->
<template>
    <div class="container">
        <div class="demo">
            <vButton>default</vButton>
            <vButton class="btn-cancel">cancel</vButton>
            <vButton class="btn-border">border</vButton>
            <vButton :disabled="true">disabled</vButton>
            <br><br>
            <vButton class="btn-block">block</vButton>
            <br>
            <vButton class="btn-cancel btn-block">cancel</vButton>
            <br>
            <vButton class="btn-border btn-block">border</vButton>
            <br>
            <vButton :disabled="true" class="btn-block">disabled</vButton>
        </div>
    </div>
</template>
<script>
    import vButton from '../components/button/index'
    export default {
        name: 'btn',
        path: '/button',
        data () {
            return {}
        },
        props: {},
        components: {vButton},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>