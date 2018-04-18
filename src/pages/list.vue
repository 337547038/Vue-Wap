<!--Created by 337547038 on 2018/3/29.-->
<template>
    <div class="container">
        <comHeader title="List"/>
        <div class="demo">
            <list icon="correct" class="first">列表名称
                <div slot="other" class="list-slot">123</div>
            </list>
            <list icon="user">用户名
                <div slot="other">123</div>
            </list>
            <list icon="lock1">密码</list>
            <list icon="date">其他</list>
            <list icon="tips" :arrow="false">没箭头方向</list>
            <list href="/">点击跳转</list>
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