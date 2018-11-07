/**
* @vuedoc
* @module components/advantages_line_2
* @see @/components/advantages_line_2
*
* @version 1.0
* @desc Секция Advantages line 2
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/
import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('Text', { advantages_2: 'advantages_2' }),
	},
	mounted(){
		this.$log.info('component \'Advantages line 2\' (@/components/advantages_line_2) - mounted hook init')
	}
}
