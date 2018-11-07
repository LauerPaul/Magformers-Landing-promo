/**
* @vuedoc
* @module store/products
* @see @/store/products
*
* @version 1.0
* @desc Хранилище данных - основные данные приложенния
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import contentServices from '@/services/contentServices'

const Products = {
	namespaced: true,
	state: {
		menu: null,
		currentMenu: '',
		list: null,
		selectProduct: null
	},
	// Getters
	getters: {
		/**
		*   @desc Возвращает значение `all` текущего пункта меню
		*   @method MENU_ALL
		**/
		MENU_ALL: state => {
			let item = state.menu.filter((item) => item.key === state.currentMenu)

			if (item) return item[0].all
			else return false
		}
	},
	// Mutations
	mutations: {
		/**
		*   @desc Назначение списка меню в переменную
		*   @method SET_LIST_MENU
		**/
		SET_LIST_MENU (state, value) { if (value) state.menu = value },
		/**
		*   @desc Назначение ключа активного меню в переменную
		*   @method SET_CURRENT_MENU
		**/
		SET_CURRENT_MENU (state, value) { if (value) state.currentMenu = value },
		/**
		*   @desc Назначение списка меню в переменную
		*   @method SET_PRODUCTS_LIST
		**/
		SET_PRODUCTS_LIST (state, value) { if (value) state.list = value },
		/**
		*   @desc Назначение активного продукта в переменную
		*   @method SET_CURRENT_PRODUCT
		**/
		SET_CURRENT_PRODUCT (state, art) {
			if (state.list && art) {
				state.selectProduct = state.list.filter((item) => item.art === art)
				state.selectProduct = state.selectProduct[0]
			} else return false
		}
	},
	// Actions
	actions: {
		/**
		*   @desc Запрос списка
		*   @method getList
		**/
		async getList ({state, commit, dispatch}) {
			const response = await contentServices.fetchList()

			commit('SET_LIST_MENU', response.data.menu)
			commit('SET_PRODUCTS_LIST', response.data.products)
			if (!state.currentMenu && response.data.menu[0].key) commit('SET_CURRENT_MENU', response.data.menu[0].key)

			let art = state.selectProduct && state.selectProduct.art ? state.selectProduct.art : (state.list[0] && state.list[0].art ? state.list[0].art : false)
			return commit('SET_CURRENT_PRODUCT', art)
		},
		/*
		*	@desc Назначение активного пункта меню
		*	@method setCurrentMenu
		*/
		setCurrentMenu ({state, commit}, value) {
			if (value) commit('SET_CURRENT_MENU', value)
		},
		/*
		*	@desc Назначение активного продукта
		*	@method setCurrentProduct
		*/
		setCurrentProduct ({state, commit}, value) {
			if (value) return commit('SET_CURRENT_PRODUCT', value)
			else return false
		}
	}
}

export default Products
