import apis from '../../apis/apis'
/**
 * 用户信息store
 */
const user_store={
    namespaced: true,
    //状态字段
    state:{
        userName:'',//用户姓名
        token:'',//登陆token
    },
    //同步更新状态字段，用于监控字段的变化
    mutations:{
        //设置用户信息
        setUserInfo(state,{userName,token}){
            console.log('loginPromise_5')
            state.userName=userName;
            state.token=token;
            //调用方式：store.commit('setUserInfo')
        }
    },
    //这里可以写异步调用接口信息，得到接口返回值，然后调用mutations更新状态字段
    actions:{
        //设置用户信息
        setUserInfo({commit,state},{ loginName, password }){
            debugger;
            //这里可以通过state读取状态字段，例如：
            // var name=state.userName;
            apis.loginApi.loginIn({loginName, password })
            .then(res=>{
                debugger;
                if(res.status=='200'){
                    var json=res.data;
                    if(json.sucess==true){
                        var userInfo=json.data.userInfo;
                        var param={
                            userName:userInfo.userName,
                            token:userInfo.token
                        }
                        commit('setUserInfo',param);
                        return userInfo.userName;
                    }
                }
                
            })
            .catch(err=>{
                console.log('actions.setUserInfo.error:',err);
            })
            //调用方式：store.dispatch('setUserInfo')
        },
         //设置用户信息
         setUserInfo_Promise({commit,state},{ loginName, password }){
            console.log('loginPromise_2')
             return new Promise((resolve, reject)=>{
                console.log('loginPromise_3')
                apis.loginApi.loginIn({loginName, password })
                .then(res=>{
                    console.log('loginPromise_4')
                    if(res.status=='200'){
                        var json=res.data;
                        if(json.sucess==true){
                            var userInfo=json.data.userInfo;
                            var param={
                                userName:userInfo.userName,
                                token:userInfo.token
                            }
                            commit('setUserInfo',param);
                            console.log('loginPromise_6')
                            resolve(userInfo.userName);
                            console.log('loginPromise_7')
                        }
                    }
                    
                })
                .catch(err=>{
                    console.log('actions.setUserInfo.error:',err);
                    reject(err);
                })
             });

           
            
        }
    }
}
export default user_store;