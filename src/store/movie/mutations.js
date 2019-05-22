/* mutations */ 
import { MODIFY_N_HOTS, MODIFY_MOST_EXPECTED} from './type'



export default {
    [MODIFY_N_HOTS] ( state, action ) { // 修改首页列表数据
        return state.nHots = action.payload
    },
    [MODIFY_MOST_EXPECTED] (state, action) {
        return state.fHots.mostExpected = action.payload
    }
}