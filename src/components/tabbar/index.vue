<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="footer-tab-bar">
        <div class="tab-bar-fixed">
            <ul class="clearfix">
                <li><router-link to="/tabbar" class="icon-home">首页</router-link></li>
                <li><router-link to="/fff" class="icon-fenlei">分类<spaa>12</spaa></router-link></li>
                <li><router-link to="/fff" class="icon-set">类别</router-link></li>
                <li><router-link to="/fff" class="icon-my">我的</router-link></li>
            </ul>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'tabBar',
        data(){
            return {}
        },
        props: [],
        mounted(){
        },
        components: {},
        methods: {},
        computed: {}
    }
</script>