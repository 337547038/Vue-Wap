<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="container">
        <comHeader title="Badge"></comHeader>
        <div class="demo">
            <h2>Use</h2>
            <pre>&lt;Badge>123&lt;/Badge></pre>
            <List>显示小圆点
                <Badge :isDot="true"></Badge>
            </List>
            <List>我的消息
                <Badge>10</Badge>
            </List>
            <List>我的消息
                <Badge>200</Badge>
            </List>
            <List>我的消息
                <Badge>New</Badge>
            </List>
            <div class="badge-demo">
                <p>通过添加样式控制显示在不同的位置</p>
                <ul>
                    <li class="icon-daifukuan1">待付款
                        <Badge>108</Badge>
                    </li>
                    <li class="icon-daipingjia">待评价
                        <Badge>10</Badge>
                    </li>
                    <li class="icon-daifahuo">待发货
                        <Badge>0</Badge>
                    </li>
                    <li class="icon-daishouhuo">待收货
                        <Badge>8</Badge>
                    </li>
                </ul>
            </div>
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
                    <td>Boolean|false</td>
                    <td>显示原点。添加样式badge-dot，然后通过样式控制</td>
                </tr>
                <tr>
                    <td>max</td>
                    <td>Number|99</td>
                    <td>超过最大值显示+号</td>
                </tr>
                <!--<tr>
                    <td>isTop</td>
                    <td>Boolean|false</td>
                    <td>在右上角显示。添加样式badge-top，然后通过样式控制。要根据实际应用写展示样式</td>
                </tr>-->
                <tr>
                    <td>slot</td>
                    <td></td>
                    <td>插槽。只能是数字或文字，不带标签</td>
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
<style>
    .badge-demo{ padding: 20px 10px; }
    .badge-demo ul{ display: flex; padding-top: 20px; }
    .badge-demo li{ width: 100%; text-align: center; font-size: 16px; position: relative; }
    .badge-demo li:before{ font-size: 50px; margin: 0 auto; display: block; color: #795da3; }
    .badge-demo li span{ position: absolute; right: 0; top: 0 }
</style>