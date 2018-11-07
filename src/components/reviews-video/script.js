/**
* @vuedoc
* @module components/reviews-video
* @see @/components/reviews-video
*
* @version 1.0
* @desc Секция Reviews video case
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('Text', { reviewsVideo: 'reviews_video_case'}),
		list () {
			return this.reviewsVideo.list
		},
		title () {
			return this.reviewsVideo.title
		}
	},
	mounted () {
		this.$log.info('component \'Reviews video case\' (@/components/reviews-video) - mounted hook init')
	}
}