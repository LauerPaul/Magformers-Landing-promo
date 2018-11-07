/**
* @vuedoc
* @module components/info-case
* @see @/components/info-case
*
* @version 1.0
* @desc Секция Info case
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/
import { mapState } from 'vuex'

export default {
	mounted(){
		this.$log.info('component \'Info case\' (@/components/info-case) - mounted hook init')
	},
	computed: {
		...mapState('Text', { info_case: 'info_case' })
	}
}
