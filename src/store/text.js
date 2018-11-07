/**
* @vuedoc
* @module store/text
* @see @/store/text
*
* @version 1.0
* @desc Хранилище данных - основные данные приложенния
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import textsServices from '@/services/textsServices'
import contentServices from '@/services/contentServices'

const Texts = {
	namespaced: true,
	state: {
		advantages: null,
		contacts: null,
		products: null,
		product_description: null,
		awards_case: null,
		info_case: null,
		children_about: null,
		advantages_2: null,
		reviews_case: null,
		reviews_video_case: null,
		security_case: null,
		warning_case: null,
		bonus: {},
		shipping_and_payment: null,
		orderBottomCase: null,
		form: null,
		footer: null
	},
	// Mutations
	mutations: {
		/**
		*   @desc Назначение текстов в переменные
		*   @method SET_TEXT
		**/
		SET_TEXT (state, value) {
			if (value) {
				state.advantages = value.advantages
				state.footer = value.footer
				state.products = value.products
				state.product_description = value.product_description
				state.reviews_case = value.reviews_case
				state.awards_case = value.awards_case
				state.info_case = value.info_case
				state.children_about = value.children_about
				state.advantages_2 = value.advantages_2
				state.reviews_video_case = value.reviews_video_case
				state.security_case = value.security_case
				state.warning_case = value.warning_case
				state.bonus.text = value.bonus
				state.shipping_and_payment = value.shipping_and_payment
				state.orderBottomCase = value.order_bottom_case
				state.contacts = value.contacts
				state.form = value.form
			}
		},
		/**
		*   @desc Назначение данных переменной bonus
		*   @method SET_BOOKS
		**/
		SET_BOOKS (state, value) {
			if (value) state.bonus.items = value
		}
	},
	// Actions
	actions: {
		/**
		*   @desc Запрос списка
		*   @method getTexts
		**/
		async getTexts ({state, commit}) {
			const response = await textsServices.fetchList()
			commit('SET_TEXT', response.data)

			const responseFiles = await contentServices.fetchListBooks()
			commit('SET_BOOKS', responseFiles.data)
		}
	}
}

export default Texts
