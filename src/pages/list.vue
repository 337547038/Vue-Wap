<!--Created by 337547038 on 2018/3/29.-->
<template>
    <div class="container">
        <comHeader title="List"/>
        <div class="demo">
            <list icon="youhuiquan" class="first">优惠券
                <div slot="other" class="list-slot">123</div>
            </list>
            <list icon="meg">我的消息
                <div slot="other">123</div>
            </list>
            <list icon="xin">我的收藏</list>
            <list icon="zuji">足迹</list>
            <list icon="server">客服</list>
            <list icon="tips" :arrow="false">没箭头方向</list>
            <list href="/" icon="loading">点击跳转</list>
            <h2>API</h2>
            <h3>List</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>String</td>
                    <td>前缀图标名称</td>
                </tr>
                <tr>
                    <td>arrow</td>
                    <td>Boolean|true</td>
                    <td>右边方向箭头</td>
                </tr>
                <tr>
                    <td>href</td>
                    <td>String</td>
                    <td>链接地址</td>
                </tr>
            </table>
            <h3>slot</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>other</td>
                    <td></td>
                </tr>
            </table>
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
<style>
    .list-item{}
    .list-item:nth-child(1) .list-icon{color: #ff3d66}
    .list-item:nth-child(2) .list-icon{color: #3d98ff}
    .list-item:nth-child(3) .list-icon{color: #ff7d3d}
    .list-item:nth-child(4) .list-icon{color: #13de09}
    .list-item:nth-child(5) .list-icon{color: #ff623d}
</style>