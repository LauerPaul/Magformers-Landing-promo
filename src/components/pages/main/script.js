/**
* @vuedoc
* @module components/pages/main
* @see @/components/pages/main
*
* @version 1.0
* @desc Главная страница
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

import { mapActions } from 'vuex'
import header from '@/components/common/header'
import topSection from '@/components/top-section'
import advatagesLine from '@/components/advantages_line'
import awardsLine from '@/components/awards_line'
import infoCase from '@/components/info-case'
import childrenAbout from '@/components/children_about'
import advatagesLine2 from '@/components/advantages_line_2'
import products from '@/components/products'
import product_description from '@/components/product_description'
import reviewsCase from '@/components/reviews-case'
import securityCase from '@/components/security-case'
import warningCase from '@/components/warning-case'
import bonus from '@/components/bonus'
import shipping_and_payment from '@/components/shipping_and_payment'
import order_bottom_case from '@/components/order_bottom_case'
import footer from '@/components/common/footer'

const data = {
}

const methods = {
	...mapActions('Text', [ 'getTexts' ])
}

/** Export component */
export default {
	// Data
	data: function(){ return data },
	// Method
	methods: methods,
	mounted(){
		this.$log.info('component \'Home\' (@/components/pages/main) - mounted hook init')
		this.getTexts()
	},
	components:{
		'header-component': header,
		'top-section-component': topSection,
		'advantages-line-component': advatagesLine,
		'awards-line-component': awardsLine,
		'info-case-component': infoCase,
		'children-about-component': childrenAbout,
		'advantages-line-2-component': advatagesLine2,
		'products-component': products,
		'products-description-component': product_description,
		'reviews-case-component': reviewsCase,
		'security-case-component': securityCase,
		'warning-case-component': warningCase,
		'bonus-component': bonus,
		'shipping-and-payment-component': shipping_and_payment,
		'order-bottom-case-component': order_bottom_case,
		'footer-component': footer
	}
}
