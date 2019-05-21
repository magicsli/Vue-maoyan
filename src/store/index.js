import Vue from 'vue'
import Vuex from 'vuex'

import movieModule from './movie/index';

Vue.use( Vuex )

const store = new Vuex.Store({
    modules: {
        movie: movieModule
    }
})

export default store