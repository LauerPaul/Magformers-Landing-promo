/**
* @vuedoc
* @module components/advantages_line
* @see @/components/advantages_line
*
* @version 1.0
* @desc Секция Advantages line
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('Text', { advantages: 'advantages' }),
	},
	mounted(){
		this.$log.info('component \'Advantages line\' (@/components/advantages_line) - mounted hook init')
	}
}
