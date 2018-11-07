import api from '@/services/api'

export default {
	/**
	*   @desc Запрос всех записей
	*   @method fetchList
	**/

	fetchList () {
		return api().get('text.json')
	}
}
