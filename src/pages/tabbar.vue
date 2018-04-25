<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="container">
        <comHeader title="TabBar"></comHeader>
        <div class="demo">
            <h2>Use</h2>
            <pre>import {TabBar, TabItem} from '../components/tabbar/index'</pre>
<pre>&lt;TabBar>
    &lt;TabItem to="/" icon="icon-home">首页&lt;/TabItem>
    &lt;TabItem to="/tabbar" :icon="['icon-fenlei2','icon-fenlei']" :active="true">分类&lt;/TabItem>
    &lt;TabItem to="/" icon="icon-set">设置&lt;/TabItem>
    &lt;TabItem to="/" icon="icon-my">我的&lt;/TabItem>
    &lt;/TabBar></pre>
            <h2>API</h2>
            <h3>TabBar</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>无</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
            <h3>TabItem</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>to</td>
                    <td>String</td>
                    <td>url链接地址</td>
                </tr>
                <tr>
                    <td>icon</td>
                    <td>String|Array</td>
                    <td>icon图标样式名。等于Array时[默认样式，active时样式]</td>
                </tr>
                <tr>
                    <td>active</td>
                    <td>Boolean|false</td>
                    <td>当前项</td>
                </tr>
                <tr>
                    <td>slot</td>
                    <td></td>
                    <td></td>
                </tr>
            </table>
        </div>
        <TabBar>
            <TabItem to="/" icon="icon-home">首页</TabItem>
            <TabItem to="/tabbar" :icon="['icon-fenlei2','icon-fenlei']" :active="true">分类</TabItem>
            <TabItem to="/" icon="icon-set">设置</TabItem>
            <TabItem to="/" icon="icon-my">我的</TabItem>
        </TabBar>
    </div>
</template>
<script>
    import {TabBar, TabItem} from '../components/tabbar/index'
    export default {
        name: 'tabbar',
        path: '/tabbar',
        data () {
            return {}
        },
        props: {},
        components: {TabBar, TabItem},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>