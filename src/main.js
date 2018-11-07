// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from '@/router'
import store from '@/store'
import filters from '@/filters'

import BootstrapVue from 'bootstrap-vue'
import VueLogger from 'vuejs-logger'

import 'bootstrap-vue/dist/bootstrap-vue.css'

const isProduction = process.env.NODE_ENV === 'production'

Vue.config.productionTip = false

const options = {
	isEnabled: true,
	logLevel: isProduction ? 'error' : 'debug',
	stringifyArguments: false,
	showLogLevel: true,
	showMethodName: true,
	separator: '|',
	showConsoleColors: true
}

Vue.use(BootstrapVue)
Vue.use(VueLogger, options)

/* eslint-disable no-new */
new Vue({
	el: '#app',
	filters,
	router,
	store,
	render: h => h(App)
})
