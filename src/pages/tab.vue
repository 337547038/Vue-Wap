<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="container">
        <comHeader title="Tabs"></comHeader>
        <div class="demo">
            <Tabs value="t2">
                <TabPane label="tabs 1" name="t1">this is tabs 1 content</TabPane>
                <TabPane label="tabs 2" name="t2">淡入</TabPane>
                <TabPane label="tabs 3" name="t3">this is tabs 3 content</TabPane>
            </Tabs>
            <br><br>
            <Tabs value="t1" animation="tabs-slide">
                <TabPane label="tabs 1" name="t1">从右边进来</TabPane>
                <TabPane label="tabs 2" name="t2">this is tabs 2 content</TabPane>
                <TabPane label="tabs 3" name="t3">this is tabs 3 content</TabPane>
            </Tabs>
            <br><br>
            <Tabs value="t1" animation="tabs-slide" class="tabs-animation">
                <TabPane label="tabs 1" name="t1">也可以通过添加或删除类active实现动画</TabPane>
                <TabPane label="tabs 2" name="t2">this is tabs 2 content</TabPane>
                <TabPane label="tabs 3" name="t3">this is tabs 3 content</TabPane>
            </Tabs>
            <br><br>
            <h2>API</h2>
            <h3>Tabs</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>value</td>
                    <td>当前激活 tab 面板的 name，可以使用 v-model 双向绑定数据</td>
                </tr>
                <tr>
                    <td>class</td>
                    <td>添加为当前Tabs的样式名</td>
                </tr>
                <tr>
                    <td>animation</td>
                    <td>tabs-fade默认，过渡动画。带有和tabs-slide两种过渡。其它的可添加动画名称，然后添加样式****-enter-active</td>
                </tr>
                <tr>
                    <td>onChange</td>
                    <td>切换回调事件</td>
                </tr>
            </table>
            <h3>TabPane</h3>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>class</td>
                    <td>添加为当前TabPane的样式名</td>
                </tr>
                <tr>
                    <td>label</td>
                    <td>标签名称</td>
                </tr>
                <tr>
                    <td>disabled</td>
                    <td>禁止点击选项</td>
                </tr>
                <tr>
                    <td>name</td>
                    <td>对应Tabs里的value，用于标识当前激活的选项</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import {Tabs, TabPane} from '../components/tabs/index'
    export default {
        name: 'tab',
        path: '/tab',
        data () {
            return {}
        },
        props: {},
        components: {Tabs, TabPane},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>
<style>
    .tabs-animation{ }
    .tabs-animation .tabs-tab{ position: relative }
    .tabs-animation .tabs-tab:after{ content: ''; display: block; height: 1px; background: #04ab02;margin: 0 auto;width: 0;transition: all .5s }
    .tabs-animation .tabs-tab.active:after{width: 100%}
</style>