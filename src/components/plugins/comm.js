export default {
    install: function (Vue, options) {
        //一些方法
        Vue.mixin({
            methods: {
                getQueryString (name) {
                    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|)", "i");
                    var r = window.location.search.substr(1).match(reg);
                    if (r != null) {
                        return r[2];
                    }
                    else {
                        return "";
                    }
                }
            },
            created: function () {
                //window.scrollTo(0,0)
               // console.log("组件开始加载")
            },
            mounted(){
               // console.log('mounted');
            }
        });
        /*Vue.filter('formatTime', function (d, t) {
            const year = d.getFullYear();
            const month = d.getMonth() + 1;
            const day = d.getDate();
            const hour = d.getHours();
            const minutes = d.getMinutes();
            const seconds = d.getSeconds();
            const split = '-';
            const date = year + split + month + split + day;
            const time = hour + ':' + minutes + ':' + seconds;
            return t ? date + " " + time : date;
        });*/
    }
}

/*if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(layer)
}*/

