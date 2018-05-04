<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="container">
        <comHeader title="Dialog"></comHeader>
        <div class="demo">
            <h2>Use</h2>
            <pre>this.$dialog({content:'this is content'})</pre>
            <p>一个dialog适用所有对话框窗口，只需要重写css样式即可</p>
            <List @click="_openDialog(1)">1.基本使用</List>
            <List @click="_openDialog(2)">2.带标题和按钮</List>
            <List @click="_openDialog(3)">3.按钮事件</List>
            <List @click="_openDialog(4)">4.带关闭按钮</List>
            <List @click="_openDialog(5)">5.自动关闭</List>
            <List @click="_openDialog(6)">6.过渡动画</List>
            <List @click="_openDialog(7)">7.通过添加样式随意定位窗口位置</List>
            <h2>Use</h2>
            <p>也可以像普通组件的方法引用</p>
            <pre>import Dialog from '../components/dialog/dialog'</pre>
            <pre>&lt;Dialog :visible.sync="visible">this is content&lt;/Dialog></pre>
            <List @click="visible=true">8.普通模式</List>
            <vDialog :visible.sync="visible">this is content</vDialog>
            <h2>API</h2>
            <table class="table-1">
                <tr>
                    <th>参数</th>
                    <th>默认</th>
                    <th>说明</th>
                </tr>
                <tr>
                    <td>className</td>
                    <td>String</td>
                    <td>添加不同的样式，也可以是class</td>
                </tr>
                <tr>
                    <td>maskLayer</td>
                    <td>Boolean|true</td>
                    <td>显示遮罩层</td>
                </tr>
                <tr>
                    <td>maskClose</td>
                    <td>Boolean|true</td>
                    <td>点击遮罩层关闭</td>
                </tr>
                <tr>
                    <td>visible</td>
                    <td>Boolean|false</td>
                    <td>显示或隐藏。通过sync同步。this.$dialog({})调用时不用传这参数</td>
                </tr>
                <tr>
                    <td>transition</td>
                    <td>String|scale</td>
                    <td>过渡动画名称，不同的动画在css里写就好，可参数dialog样式表</td>
                </tr>
                <tr>
                    <td>autoClose</td>
                    <td>Number|0</td>
                    <td>自动关闭时间，单位秒。0不自动关闭</td>
                </tr>
                <tr>
                    <td>showClose</td>
                    <td>Boolean|false</td>
                    <td>显示关闭按钮</td>
                </tr>
                <tr>
                    <td>closeEvent</td>
                    <td>Function</td>
                    <td>关闭事件，同下确定</td>
                </tr>
                <tr>
                    <td>title</td>
                    <td>String</td>
                    <td>标题名称</td>
                </tr>
                <tr>
                    <td>content</td>
                    <td>String</td>
                    <td>内容。也可是slot</td>
                </tr>
                <tr>
                    <td>confirmText</td>
                    <td>String</td>
                    <td>确定按钮文本</td>
                </tr>
                <tr>
                    <td>confirmEvent</td>
                    <td>Function</td>
                    <td>确定事件，当指定回调事件时，窗口要手动关闭</td>
                </tr>
                <tr>
                    <td>cancelText</td>
                    <td>String</td>
                    <td>取消文本</td>
                </tr>
                <tr>
                    <td>cancelText</td>
                    <td>Function</td>
                    <td>取消事件，同确定</td>
                </tr>
            </table>
        </div>
    </div>
</template>
<script>
    import List from '../components/list/index'
    import vDialog from '../components/dialog/dialog'
    export default {
        name: 'DialogPage',
        path: '/dialog',
        data () {
            return {
                visible: false
            }
        },
        props: {},
        components: {vDialog, List},
        methods: {
            _openDialog(index){
                if (index == 1) {
                    this.$dialog({
                        content: 'this is content',
                        visible: true
                    });
                } else if (index == 2) {
                    this.$dialog({
                        title: 'title',
                        content: 'this is content',
                        cancelText: 'cancel',
                        confirmText: 'confirm'
                    });
                } else if (index == 3) {
                    this.$dialog({
                        title: 'title',
                        content: 'this is content',
                        cancelText: 'cancel',
                        confirmText: 'confirm',
                        cancelEvent() {
                            alert('点击了取消，确定关闭');
                            this.close();
                        },
                        confirmEvent() {
                            alert('点击了确定，点击确认关闭');
                            this.close();
                        }
                    });
                } else if (index == 4) {
                    this.$dialog({
                        title: 'title',
                        content: 'this is content',
                        showClose: true,
                        confirmText: 'confirm'
                    });
                } else if (index == 5) {
                    this.$dialog({
                        title: 'title',
                        content: 'this is content',
                        autoClose: 3,
                        confirmText: 'confirm'
                    });
                } else if (index == 6) {
                    this.$dialog({
                        title: 'title',
                        content: 'this is content',
                        transition: 'shake',
                        confirmText: 'confirm'
                    });
                }
                else if (index == 7) {
                    this.$dialog({
                        className: 'dialog-test',
                        content: '一个dialog适用所有对话框窗口'
                    });
                }
            }
        },
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>
<style>
    .dialog-test .dialog-flex{ display: block; bottom: auto }
    .dialog-test .dialog-flex .dialog-body{ width: 100% }
</style>