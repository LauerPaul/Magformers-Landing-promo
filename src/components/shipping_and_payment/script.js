/**
* @vuedoc
* @module components/shipping_and_payment
* @see @/components/shipping_and_payment
*
* @version 1.0
* @desc Секция Shipping and payment
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('Text', { text: 'shipping_and_payment'}),
		list () {
			return this.text.items
		}
	},
	mounted(){
		this.$log.info('component \'Shipping and payment\' (@/components/shipping_and_payment) - mounted hook init')
	}
}