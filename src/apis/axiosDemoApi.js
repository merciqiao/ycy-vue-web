import Vue from 'vue'
import Axios from "axios";

/**
 * axiosDemoApi工具类
 */
var api={
    $qs:Vue.prototype.$qs,
    //POST:RequestBody传参
    post_RequestBody:function({name,city}){
        var param={
            name:name,
            city:city
        };
        return Axios.post("/api/demo-api/post_body", param)
    },
    //POST:RequestParam传参02
    post_RequestParam2({name,city}){
        var param={
            name:name,
            city:city
        };
        return Axios.post("/api/demo-api/post_form", this.$qs.stringify(param));
    }
}
export default api;