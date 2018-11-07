/**
* @vuedoc
* @module components/common/header
* @see @/components/common/header
*
* @version 1.0
* @desc Секция Header
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

const data = {
	logo: {
		src: require('@/assets/images/logo.png'),
		alt: 'MAGFORMERS'
	},
	items: [
		{
			text: 'Безопастный для детей',
			img: require('@/assets/images/icons/thumb.png')
		},
		{
			text: 'Сертифицированый товар',
			img: require('@/assets/images/icons/cup.png')
		},
		{
			text: 'Гарантия качества',
			img: require('@/assets/images/icons/badge.png')
		}
	]
}

const methods = {
}

/** Export component */
export default {
	// Data
	data: function(){ return data },
	// Method
	methods: methods,
	mounted(){
		this.$log.info('component \'Header\' (@/components/common/header) - mounted hook init')
	}
}