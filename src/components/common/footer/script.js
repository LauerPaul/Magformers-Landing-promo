/**
* @vuedoc
* @module components/common/footer
* @see @/components/common/footer
*
* @version 1.0
* @desc Секция Footer
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'

const data = {}

const methods = {
	number_сlear(v) {
		return 'tel:' + this.region_tel + v.replace(/[^0-9]/gim, '')
	}
}

/** Export component */
export default {
	// Data
	data: function(){ return data },
	computed: {
		...mapState('Text', { text: 'footer', contacts: 'contacts' }),
		tel () { if (this.contacts) return this.contacts.tel },
		region_tel () { if (this.contacts) return this.contacts.region_tel }
	},
	// Method
	methods: methods,
	mounted(){
		this.$log.info('component \'Footer\' (@/components/common/footer) - mounted hook init')
	}
}