<!--Created by 337547038 on 2018/3/9.-->
<template>
    <div class="container">
        <comHeader title="Button"></comHeader>
        <div class="demo">
            <pre>&lt;Button>default&lt;/Button></pre>
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
            <br>
            <vButton @click="_click" class="btn-block">click event</vButton>
            <h2>API</h2>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>class</td>
                    <td>null</td>
                    <td>样式名</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td></td>
                    <td>禁用</td>
                </tr>
                <tr>
                    <td>slot</td>
                    <td></td>
                    <td>slot插槽</td>
                </tr>
            </table>
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
        methods: {
            _click(){
                console.log('click')
            }
        },
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>