/**
* @vuedoc
* @module components/warning-case
* @see @/components/warning-case
*
* @version 1.0
* @desc Секция Warning case
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('Text', { warning_case: 'warning_case'}),
		text () {
			return {
				title: this.warning_case.title,
				p: this.warning_case.text
			}
		},
		video () {
			return this.warning_case.video
		}
	},
	mounted(){
		this.$log.info('component \'Warning case\' (@/components/warning-case) - mounted hook init')
	}
}