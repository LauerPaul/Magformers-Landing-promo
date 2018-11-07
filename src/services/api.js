import axios from 'axios'

export default () => {
	return axios.create({
		baseURL: 'http://best-new.online/magformers-promo/static/content/'
		// baseURL: '/static/content/'
	})
}
