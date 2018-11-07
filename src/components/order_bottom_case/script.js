/**
* @vuedoc
* @module components/order_bottom_case
* @see @/components/order_bottom_case
*
* @version 1.0
* @desc Секция Order bottom case
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'
import form from '@/components/form'

export default {
	computed: {
		...mapState('Text', { text: 'orderBottomCase', prodText: 'products' }),
		...mapState('Products', {item: 'selectProduct' }),
		promoText () { return this.prodText.promo },
		product () { if(this.item) return this.item }
	},
	components: {
		'form-component': form
	},
	mounted(){
		this.$log.info('component \'Order bottom case\' (@/components/order_bottom_case) - mounted hook init')
	}
}