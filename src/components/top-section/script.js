/**
* @vuedoc
* @module components/top-section
* @see @/components/top-section
*
* @version 1.0
* @desc Секция TopSection
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'
import counter from '@/components/counter'

const data = {
	title: 'МАГНИТНЫЙ КОНСТРУКТОР <span>MAGFORMERS</span> ИГРА, КОТОРАЯ ПОМОЖЕТ СФОРМИРОВАТЬ ЛИЧНОСТЬ ВАШЕГО РЕБЕНКА',
}

const methods = {
	toProducts () {
		const offset = document.getElementById('order-bottom-case').offsetTop
		document.body.scrollTop = document.documentElement.scrollTop = offset
	}
}

/** Export component */
export default {
	// Data
	data: function(){ return data },
	computed: {
		...mapState('Text', { text: 'products' }),
		promo () { return this.text.promo }
	},
	// Method
	methods: methods,
	mounted(){
		this.$log.info('component \'TopSection\' (@/components/top-section) - mounted hook init')
	},
	components: {
		'counter-component': counter
	}
}
