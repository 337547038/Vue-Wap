<!--Created by 337547038 on 2018/4/18.-->
<template>
    <div class="container">
        <comHeader title="pullRefreshLoading"/>
        <pull :onLoading="_onLoading" :onRefresh="_onRefresh">
            <div class="demo">
                <h2>API</h2>
                <table class="table-1">
                    <tr>
                        <th>参数</th>
                        <th>默认</th>
                        <th>说明</th>
                    </tr>
                    <tr>
                        <td>duration</td>
                        <td>Number|500</td>
                        <td>松手后回弹时间</td>
                    </tr>
                    <tr>
                        <td>distance</td>
                        <td>Number|50</td>
                        <td>下拉或上拉时触发加载的距离</td>
                    </tr>
                    <tr>
                        <td>refreshTips</td>
                        <td>Array</td>
                        <td>下拉刷新相关提示文字，['下拉刷新', '松手刷新', '正在刷新']</td>
                    </tr>
                    <tr>
                        <td>loadingTips</td>
                        <td>Array</td>
                        <td>上拉刷新相关提示文字，['上拉加载', '松手加载', '正在加载', '没有更多了']</td>
                    </tr>
                    <tr>
                        <td>onRefresh</td>
                        <td>Function</td>
                        <td>下拉回调</td>
                    </tr>
                    <tr>
                        <td>onLoading</td>
                        <td>Function</td>
                        <td>上拉回调，数据加载完成后要使用回调的方法刷新组件</td>
                    </tr>
                </table>
                <pre>onLoading(fn){
            //这里是加载数据方法，加载完后刷新组件
            fn();//fn(0)表示没有更多了。其它时间不用带参数
            }</pre>
            </div>
            <List v-for="(item,index) in data" :key="index" v-text="item"></List>
        </pull>
    </div>
</template>
<script type="text/ecmascript-6">
    import List from '../components/list/index'
    import Pull from '../components/pull/index'
    export default {
        name: 'pullRefreshLoading',
        path: '/pull',
        data () {
            return {
                data: [1, 2, 3, 4, 5, 6, 7, 8],
                page: 1
            }
        },
        props: {},
        components: {Pull, List},
        methods: {
            _onLoading(refresh){
                console.log('_onLoading');
                let page;
                setTimeout(()=> {
                    this.page++;
                    //加载到第3页
                    if (this.page == 3) {
                        page = 0
                    }
                    for (let i = 0; i < 10; i++) {
                        this.data.push('第' + this.page + '页' + i);
                    }
                    //刷新组件
                    refresh(page);
                }, 5000)
            },
            _onRefresh(refresh){
                console.log('_onRefresh');
                //模拟加载刷新
                setTimeout(function () {
                    window.location.reload();
                    refresh();
                }, 5000)
            }
        },
        computed: {},
        mounted(){

        },
        filters: {}
    }
</script>