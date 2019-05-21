 /* action */
import  http  from 'Utils/http'
import { MODIFY_N_HOTS, ADD_N_HOTS } from './type'

const actions =  {
    getNowHot({ commit }  ) {  // 首页  - 正在热映内容
        return http({
           url: '/maoyan/ajax/movieOnInfoList',
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
    getNextHot({ commit }, { movieIds }  ){
        
        return http({
            url: '/maoyan/ajax/moreComingList',
            method: 'get',
            params: {
                token: '',
                movieIds
            }
        }).then(res => {
            res.data.coming.length != 0 &&  commit({
                type: ADD_N_HOTS,
                payload: res.data
            })
        })

    }  
}
export default actions