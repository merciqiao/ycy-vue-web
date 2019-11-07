import Axios from "axios";

/**
 * loginApi工具类
 */
var api={
    /**
     * 登陆
     */
    loginIn:function({ loginName, password }){
        // var param = {
        //     loginName: loginName,
        //     password: password
        // };
        // return Axios.post('/api/shiro-api/login', param);

        return Axios.post('/api/shiro-api/login', { loginName, password });
    }
}
export default api;