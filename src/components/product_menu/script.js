/**
* @vuedoc
* @module components/product_menu
* @see @/components/product_menu
*
* @version 1.0
* @desc Секция Product menu
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapActions, mapState } from 'vuex'

const methods = {
	...mapActions('Products', [ 'setCurrentMenu' ])
}

/** Export component */
export default {
	computed: {
		...mapState('Products', [ 'menu', 'currentMenu' ]),
	},
	methods: methods,
	mounted(){
		this.$log.info('component \'Product menu\' (@/components/product_menu) - mounted hook init')
	}
}
