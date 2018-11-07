/**
* @vuedoc
* @module components/form
* @see @/components/form
*
* @version 1.0
* @desc Компонент Form
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapState } from 'vuex'
import counter from '@/components/counter'
import querystring from 'querystring'
import contentServices from '@/services/contentServices'

const data = {
	firstname: '',
	lastname: '',
	validateError: {
		name: '',
		lastname: ''
	}
}

const methods = {
	submit (e) {
		e.preventDefault()

		if (this.firstname.length && this.lastname.length) {
			if (this.nameValidate && this.lastnameValidate) return this.send()
			else return false
		} else {
			if (!this.firstname.length) this.validateError.name = ' '
			if (!this.lastname.length) this.validateError.lastname = ' '
			else return false
		}
	},
	async send () {
		const data = {
				firstname: this.firstname,
				lastname: this.lastname
			}

		const response = await contentServices.formSubmit(this.text.save_url, querystring.stringify(data))
	}
}

/** Export component */
export default {
	// Data
	data: function(){ return data },
	computed: {
		...mapState('Text', { text: 'form'}),
		nameValidate () {
			let validateName = /^[A-ZА-Я]{0,1}[a-zа-я]{1,15}( [A-Z]{0,1}[a-z]{1,15}){0,1}$/
			if(this.firstname.length > 2){
				if(this.firstname.length < 17){
					if(!validateName.test(this.firstname)) this.validateError.name = 'Неверно заполнено поле!';
					else {
						this.validateError.name = ''
						return true
					}
				} else return this.validateError.name = 'Не более 16 символов'
			} else if(this.firstname.length) return this.validateError.name = 'Не менее 3 символов'
			else this.validateError.name = ''
		},
		lastnameValidate () {
			let validateName = /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/
			if(this.lastname.length > 9){
				if(!validateName.test(this.lastname)) this.validateError.lastname = 'Неверно заполнено поле!';
				else {
					this.validateError.lastname = ''
					return true
				}
			} else if(this.lastname.length) return this.validateError.lastname = 'Не менее 9 символов'
			else this.validateError.lastname = ''
		}
	},
	components: {
		'counter-component': counter
	},
	// Method
	methods: methods,
	mounted(){
		this.$log.info('component \'Order bottom case\' (@/components/form) - mounted hook init')
	}
}