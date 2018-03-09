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
  routes:array
})