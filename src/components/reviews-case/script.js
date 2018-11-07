/**
* @vuedoc
* @module components/reviews-case
* @see @/components/reviews-case
*
* @version 1.0
* @desc Секция Reviews case
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
import videoCase from '@/components/reviews-video'

export default {
	// Data
	computed: {
		...mapState('Text', { text: 'reviews_case'}),
		reviews () {
			return this.text.list
		},
		swiperOptions () {
			return {
				slidesPerView: 1,
				autoplay: {
					delay: 5000
				},
				spaceBetween: 80,
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev'
				}
		    }
		}
	},
	mounted () {
		this.$log.info('component \'Reviews case\' (@/components/reviews-case) - mounted hook init')
	},
	components: {
		swiper,
		swiperSlide,
		'video-case-component': videoCase
	}
}