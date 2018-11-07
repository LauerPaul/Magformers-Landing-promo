/**
* @vuedoc
* @module components/products
* @see @/components/products
*
* @version 1.0
* @desc Секция Products
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapActions, mapState, mapGetters } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import menu from '@/components/product_menu'
import 'swiper/dist/css/swiper.css'

const methods = {
	...mapActions('Products', [ 'getList', 'setCurrentProduct' ]),
	toElement (art) {
		if (art) {
			const offset = document.getElementById('product_description').offsetTop
			document.body.scrollTop = document.documentElement.scrollTop = offset

			return this.setCurrentProduct(art)
		} else return false
	}
}

/** Export component */
export default {
	computed: {
		...mapGetters('Products', { menuAll: 'MENU_ALL' }),
		...mapState('Text', { text: 'products' }),
		...mapState('Products', [ 'list', 'currentMenu' ]),
		products () {
			if (this.list) {
				if (this.menuAll) return this.list
				else {
					return this.list.filter((item) => {
						return item.categories.indexOf(this.currentMenu) > -1
					})
				}
			} else return false
		},
		swiperOptions () {
			return {
				slidesPerView: 3,
				spaceBetween: 24,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
		    }
		}
	},
	// Method
	methods: methods,
	mounted(){
		this.$log.info('component \'Products\' (@/components/products) - mounted hook init')
		this.getList()
	},
	components: {
		'menu-component': menu,
		swiper,
		swiperSlide
	}
}
