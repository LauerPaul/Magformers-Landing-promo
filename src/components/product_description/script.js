/**
* @vuedoc
* @module components/product_description
* @see @/components/product_description
*
* @version 1.0
* @desc Секция product_description description
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState, mapActions } from 'vuex'
import counter from '@/components/counter'

const data = {}
const methods = {
	...mapActions('Products', ['setCurrentProduct']),
	toOrder () {
		const offset = document.getElementById('order-bottom-case').offsetTop
		document.body.scrollTop = document.documentElement.scrollTop = offset
	}
}

/** Export component */
export default {
	// Data
	data: function () { return data },
	computed: {
		...mapState('Text', { text: 'product_description', prodText: 'products' }),
		...mapState('Products', {item: 'selectProduct' }),
		product () {
			if(!this.item || !this.item.length) this.setCurrentProduct(false)
			return this.item
		},
		video () { return this.product.video },
		promoText () { return this.prodText.promo }
	},
	// Method
	methods: methods,
	mounted(){
		this.$log.info('component \'Products description\' (@/components/product_description) - mounted hook init')
	},
	components: {
		'counter-component': counter
	}
}
