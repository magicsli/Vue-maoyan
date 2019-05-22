
export default {
    getNowHots ( state ) { // 获取正在热播数据
        return state.nHots
    },
    getExpecteds ( state ) {
        return state.fHots.mostExpected 
    }
}