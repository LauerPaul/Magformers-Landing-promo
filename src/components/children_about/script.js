/**
* @vuedoc
* @module components/children_about
* @see @/components/children_about
*
* @version 1.0
* @desc Секция Children about
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('Text', { children_about: 'children_about' }),
	},
	mounted(){
		this.$log.info('component \'Children about\' (@/components/children_about) - mounted hook init')
	}
}
