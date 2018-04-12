<!--Created by 337547038 on 2018/2/2.-->
<template>
    <div class="hello">
        <h1>{{ msg }}</h1>
        <ul>
            <li v-for="item in link">
                <router-link :to="item.link">{{item.title}}</router-link>
            </li>
        </ul>
    </div>
</template>
<script>
    export default {
        name: 'index',
        path: '/',
        data () {
            return {
                msg: 'Welcome to Vue.js@2.5 UI for mobile',
                link: [
                    {
                        title: 'Button 按钮',
                        link: '/button'
                    },
                    {
                        title: 'Checkbox',
                        link: '/checkbox'
                    },
                    {
                        title: 'Header',
                        link: '/header'
                    },
                    {
                        title: 'Input',
                        link: '/input'
                    },
                    {
                        title: 'List',
                        link: '/list'
                    },
                    {
                        title: 'Radio',
                        link: '/radio'
                    }
                ]
            }
        },
        props: {},
        components: {},
        methods: {},
        computed: {},
        mounted(){
        },
        filters: {}
    }
</script>
<style scoped>
    .hello{ margin: 50px }
    .hello ul{ margin: 30px }
    .hello li{ list-style: circle; line-height: 44px; }
    .hello li a{}
</style>