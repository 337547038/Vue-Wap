/**
 * Created by 337547038 on 2018/4/26.
 */
/*此处引plugins里引用，统一入口*/
import Dialog from './dialog'
export default {
    install: function (Vue, options) {
        //注册全局组件，其它页面直接引用不用import
        Vue.component(Dialog.name, Dialog);
        //添加全局API
        Vue.prototype.$dialog = function (options) {
            let message = Vue.extend(Dialog);
            const propsData = Object.assign({}, options);
            propsData.insert = true;//增加个参数
            let component = new message({
                propsData
            }).$mount();
            component.open();
            /*var component = new message({
             data:options
             }).$mount()*/
            document.body.appendChild(component.$el)
        }
    }
}
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(Dialog)
}