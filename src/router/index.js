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
    mode: 'history',//history 模式下，用scrollBehavior 方法实现在不同页面切换时，滚动条会停留在上一页面位置的问题。hashbang模式时，需要在页面创建前返回顶部window.scrollTo(0,0)
    scrollBehavior (to, from, savedPosition) {
        return {x: 0, y: 0}
    }
})