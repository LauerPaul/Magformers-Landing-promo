/**
* @vuedoc
* @module store
* @see @/store
*
* @version 1.0
* @desc Хранилище данных
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'

import Products from '@/store/products.js'
import Text from '@/store/text.js'

Vue.use(Vuex)

const store = new Vuex.Store({
	plugins: [
		createPersistedState({ storage: window.sessionStorage })
	],
	modules: {
		Products,
		Text
	}
})

export default store
