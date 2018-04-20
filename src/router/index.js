import Vue from 'vue'
import Router from 'vue-router'
/*import Index from '@/components/Index'*/
import pages from '@/pages/pages'
Vue.use(Router)

/*
 export default new Router({
 routes: [
 {
 path: '/',
 name: 'Index',
 component: Index
 }
 ]
 })
 */
/*将pages.js作为所有页面入口，减少每新增一个页面都修改这文件*/
let array = [];
for (let i in pages) {
    let page = pages[i].default;
    array.push({
        path: page.path,
        name: page.name,
        component: page
    });
}
export default new Router({
    routes: array,
   /* mode: 'history',//history 模式下，用scrollBehavior 方法实现在不同页面切换时，滚动条会停留在上一页面位置的问题。hashbang模式时，需要在页面创建前返回顶部window.scrollTo(0,0)
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }*/
})
/*
* 当开启history模式的时候，打包之后，访问项目路径www.abc.com/vue/会发现页面一片空白
* 解决办法在path里添加完整路径path:'/vue/button'
* */