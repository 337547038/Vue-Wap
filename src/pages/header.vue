<!--Created by 337547038 on 2018/3/9.-->
<template>
    <div class="container">
        <vHeader title="默认"></vHeader>
        <br>
        <vHeader title="自定义右则内容">
            <div slot="right" class="right">自定义</div>
        </vHeader>
        <br>
        <vHeader title="不显示后退" :back="false"></vHeader>
        <br>
        <vHeader title="后退到指定url" backUrl="/"></vHeader>

        <div class="demo">
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
                    <td>title</td>
                    <td>null</td>
                    <td>标题</td>
                </tr>
                <tr>
                    <td>back</td>
                    <td>Boolean|true</td>
                    <td>是否显示后退按钮</td>
                </tr>
                <tr>
                    <td>backUrl</td>
                    <td>String|null</td>
                    <td>后退到指定地址，默认返回上一面</td>
                </tr>
                <tr>
                    <td>slot</td>
                    <td>right</td>
                    <td>right插槽</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import vHeader from '../components/header/index'
    export default {
        name: 'Header',
        path: '/header',
        data () {
            return {}
        },
        props: {},
        components: {vHeader},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>