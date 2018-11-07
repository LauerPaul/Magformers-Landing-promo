/**
* @vuedoc
* @module components/awards_line
* @see @/components/awards_line
*
* @version 1.0
* @desc Секция Awards line
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/
import { mapState } from 'vuex'

const methods = {}

/** Export component */
export default {
	mounted(){
		this.$log.info('component \'Awards line\' (@/components/awards_line) - mounted hook init')
	},
	computed: {
		...mapState('Text', { awards_case: 'awards_case' }),
	},
	components: {
	},
	methods: methods
}
