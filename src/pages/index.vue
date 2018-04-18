<!--Created by 337547038 on 2018/2/2.-->
<template>
    <div class="container">
        <comHeader :title="msg" :back="false"/>
        <List v-for="(item,index) in link" :href="item.link" :key="index">{{item.title}}</List>
        <!--<div class="hello">
            <h1>{{ msg }}</h1>
            <ul>
                <li v-for="item in link">
                    <router-link :to="item.link">{{item.title}}</router-link>
                </li>
            </ul>
        </div>-->
    </div>

</template>
<script>
    import List from '../components/list/index'
    export default {
        name: 'index',
        path: '/',
        data () {
            return {
                msg: 'Vue.js@2.5 components for mobile',
                link: [
                    {
                        title: 'Badge 消息提示 X',
                        link: '/badge'
                    },
                    {
                        title: 'Button 按钮',
                        link: '/button'
                    },
                    {
                        title: 'Checkbox 多选框',
                        link: '/checkbox'
                    },
                    {
                        title: 'CityPicker 城市级联',
                        link: '/cityPicker'
                    },
                    {
                        title: 'DatePicker 时间选择',
                        link: '/datePicker'
                    },
                    {
                        title: 'Dialog 对话框 X',
                        link: '/dialog'
                    },
                    {
                        title: 'form 表单 X',
                        link: '/form'
                    },
                    {
                        title: 'formItem 表单列表 X',
                        link: '/formItem'
                    },
                    {
                        title: 'Header 头部',
                        link: '/header'
                    },
                    {
                        title: 'Input 输入框',
                        link: '/input'
                    },
                    {
                        title: 'InputNumber 数字输入框',
                        link: '/inputNumber'
                    },
                    {
                        title:'Keyboard 数字虚拟键盘',
                        link:'/keyboard'
                    },
                    {
                        title: 'List 列表',
                        link: '/list'
                    },
                    {
                        title: 'Loading 加载 X',
                        link: '/loading'
                    },
                    {
                        title: 'Picker 选择器',
                        link: '/picker'
                    },
                    {
                        title: 'Progress 进度',
                        link: '/progress'
                    },
                    {
                        title: 'Pull 下拉刷新上拉加载 X',
                        link: '/pull'
                    },
                    {
                        title: 'Radio 单选框',
                        link: '/radio'
                    },
                    {
                        title: 'Select 下拉选择',
                        link: '/select'
                    },
                    {
                        title: 'Swiper 轮播',
                        link: '/swiper'
                    },
                    {
                        title: 'Switch 开关',
                        link: '/switch'
                    },
                    {
                        title: 'tab 选项卡 X',
                        link: '/tab'
                    },
                    {
                        title: 'tabbar 标签导航 X',
                        link: '/tabbar'
                    },
                    {
                        title: 'Textarea 文本输入框',
                        link: '/textarea'
                    },
                    {
                        title: 'Upload 上传',
                        link: '/upload'
                    }
                ]
            }
        },
        props: {},
        components: {List},
        methods: {},
        computed: {},
        mounted(){
            console.log(this.link.length);
        },
        filters: {}
    }
</script>