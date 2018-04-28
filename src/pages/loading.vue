<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="container">
        <comHeader title="Loading"></comHeader>
        <div class="demo">
            <Loading :fixed="true" :visible="visible1"></Loading>
            <Loading>正在加载</Loading>
            <h2>API</h2>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>visible</td>
                    <td>Boolean|true</td>
                    <td>显示或隐藏</td>
                </tr>
                <tr>
                    <td>fixed</td>
                    <td>Boolean|false</td>
                    <td>添加不同的样式，以达到不同的效果。主要还是看样式怎么写</td>
                </tr>
                <tr>
                    <td>maskLayer</td>
                    <td>Boolean|true</td>
                    <td>遮罩层，前提是fixed=true</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script type="text/ecmascript-6">
    import Loading from '../components/loading/index'
    export default {
        name: 'loading',
        path: '/loading',
        data () {
            return {
                visible1: true
            }
        },
        props: {},
        components: {Loading},
        methods: {},
        computed: {},
        mounted(){
            //模拟加载效果，3秒后关闭
            setTimeout(()=> {
                this.visible1 = false;
            }, 3000)
        },
        filters: {}
    }
</script>