<!--Created by 337547038 on 2018/4/17.-->
<template>
    <div class="container">
        <comHeader title="Keyboard"/>
        <div class="demo">
            <h2>Use</h2>
            <p>数字模拟键盘，（一个页面两时有两个或以上使用时，同时弹起键盘时，键盘会重叠，考虑到情况使用，没对情况处理）</p>
            <br>
            <Keyboard v-model="value1"></Keyboard>
            <br>
            <Keyboard placeholder="placeholder" v-model="value2"></Keyboard>
            <br>
            <Keyboard placeholder="password" :password="true" v-model="value3"></Keyboard>
            <br>
            <Keyboard placeholder="maxLength=3" v-model="value4" :maxLength="3"></Keyboard>
            <br>
            <Keyboard placeholder="不能输入小数" v-model="value5" :float="false"></Keyboard>
            <br>
            <Keyboard placeholder="confirmText" v-model="value6" confirmText="ok"></Keyboard>
            <br>
            <Keyboard placeholder="弹出键盘挡住了输入框时" v-model="value7"></Keyboard>

            <h2>API</h2>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>value</td>
                    <td></td>
                    <td>通过v-model绑定</td>
                </tr>
                <tr>
                    <td>confirmText</td>
                    <td>String</td>
                    <td>按钮文本</td>
                </tr>
                <tr>
                    <td>confirmEvent</td>
                    <td>Function</td>
                    <td>按钮事件</td>
                </tr>
                <tr>
                    <td>float</td>
                    <td>Boolean|true</td>
                    <td>是否允许输入小数</td>
                </tr>
                <tr>
                    <td>placeholder</td>
                    <td>String</td>
                    <td>模拟input</td>
                </tr>
                <tr>
                    <td>password</td>
                    <td>Boolean|false</td>
                    <td>密码类型</td>
                </tr>
                <tr>
                    <td>maxLength</td>
                    <td>Number</td>
                    <td>输入的最大长度</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import Keyboard from '../components/keyboard/index'
    export default {
        name: 'keyboard',
        path: '/keyboard',
        data(){
            return {
                value1: '',
                value2: '',
                value3: '',
                value4: '',
                value5: '',
                value6: '',
                value7: '',
            }
        },
        props: [],
        mounted(){
        },
        components: {Keyboard},
        methods: {},
        computed: {}
    }
</script>