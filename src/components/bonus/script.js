/**
* @vuedoc
* @module components/bonus
* @see @/components/bonus
*
* @version 1.0
* @desc Секция Bonus
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'

export default {
	computed: {
		...mapState('Text', { bonus: 'bonus'}),
		text () { if (this.bonus) return this.bonus.text },
		list () { if (this.bonus) return this.bonus.items },
		swiperOptions () {
			return {
				slidesPerView: 4,
				spaceBetween: 24,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
		    }
		}
	},
	mounted(){
		this.$log.info('component \'Bonus\' (@/components/bonus) - mounted hook init')
	},
	components: {
		swiper,
		swiperSlide
	}
}