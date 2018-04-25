<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="container">
        <comHeader title="Badge"></comHeader>
        <div class="demo">
            <List>显示小圆点
                <Badge :isDot="true"></Badge>
            </List>
            <List>我的消息
                <Badge>20</Badge>
            </List>
            <List>我的消息
                <Badge>New</Badge>
            </List>
            <h2>API</h2>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>class</td>
                    <td></td>
                    <td>原生</td>
                </tr>
                <tr>
                    <td>isDot</td>
                    <td></td>
                    <td>显示原点</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td></td>
                    <td>超过最大值显示+号</td>
                </tr>
                <tr>
                    <td>isTop</td>
                    <td></td>
                    <td>在右上角显示</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import List from '../components/list/index'
    import Badge from '../components/badge/index'
    export default {
        name: 'badge',
        path: '/badge',
        data () {
            return {}
        },
        props: {},
        components: {Badge, List},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>