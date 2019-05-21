/* mutations */ 
import { MODIFY_N_HOTS, ADD_N_HOTS} from './type'



export default {
    [MODIFY_N_HOTS] ( state, action ) { // 修改首页列表数据
        return state.nHots = action.payload
    },
    [ADD_N_HOTS] ( state, action ) {
      
        return state.nHots.movieList = [...state.nHots.movieList, ...action.payload.coming]
    }
}