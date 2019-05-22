 /* action */
import  http  from 'Utils/http'
import { MODIFY_N_HOTS, MODIFY_MOST_EXPECTED } from './type'

const actions =  {
    getNowHot({ commit }, value ) {  // 首页  - 正在热映内容
        return http({
           url: '/maoyan/ajax/'+ value,
           method: 'get',
            params: {
                token:'',
            }
        }).then( res => {
            commit({
                type: MODIFY_N_HOTS,
                payload: res.data
            })
        } )
    },
   async getExpected ( {commit} ) {  // 获取即将上映轮播数据
    let res = await http({
             url:'/maoyan/ajax/mostExpected',
            method:'get',
            params:{
                ci: 10,
                limit: 10,
                offset: 0,
                token: ''
            }
        })
        commit({
            type: MODIFY_MOST_EXPECTED,
            payload: res.data.coming
        })

    }
}
export default actions