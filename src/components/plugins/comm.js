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
                },
                getTouch(event){
                    //返回触摸信息
                    return event.changedTouches[0] || event.touches[0];
                },
                getHeight(elements) {
                    //处理两个特殊的高 window document
                    if (elements == window) {
                        //return document.documentElement.clientHeight || document.body.clientHeight
                        return window.innerHeight;
                    } else if (elements == document) {
                        return document.documentElement.scrollHeight || document.body.scrollHeight
                    } else if (typeof elements == "object") {
                        return elements.offsetHeight;
                    } else if (typeof elements == "string") {
                        return document.getElementById(elements).offsetHeight;
                    }
                },
                getWidth (elements) {
                    //处理两个特殊 window document
                    if (elements == window) {
                        return document.documentElement.clientWidth || document.body.clientWidth
                    } else if (elements == document) {
                        return document.documentElement.scrollWidth || document.body.scrollWidth
                    } else if (typeof elements == "object") {
                        return elements.offsetWidth;
                    } else if (typeof elements == "string") {
                        return document.getElementById(elements).offsetWidth;
                    }
                },
                //滚动条位置
                getScrollTop() {
                    return document.documentElement.scrollTop || document.body.scrollTop;
                },
                getOffset (el) {
                    //返回元素偏移位置
                    var componentRect = el.getBoundingClientRect();
                    var top = componentRect.top + (window.pageYOffset || document.documentElement.scrollTop) - (document.documentElement.clientTop || 0);
                    var left = componentRect.left + (window.pageXOffset || document.documentElement.scrollLeft) - (document.documentElement.clientLeft || 0);
                    return {left: left, top: top};
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

