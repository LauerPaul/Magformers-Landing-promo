/**
* @vuedoc
* @module components/security-case
* @see @/components/security-case
*
* @version 1.0
* @desc Секция Security case
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'

export default {
	computed: {
		...mapState('Text', { security_case: 'security_case'}),
		text () {
			return {
				title: this.security_case.title,
				p: this.security_case.text
			}
		},
		image () { return this.security_case.image },
		list () { return this.security_case.items }
	},
	mounted () {
		this.$log.info('component \'Security case\' (@/components/security-case) - mounted hook init')
	}
}