import api from '@/services/api'

export default {
	/**
	*   @desc Запрос всех записей
	*   @method fetchList
	**/
	fetchList () {
		return api().get('products.json')
	},
	/**
	*   @desc Запрос всех данных файлов
	*   @method fetchListBooks
	**/
	fetchListBooks () {
		return api().get('book.json')
	},
	/**
	*   @desc Отправка формы
	*   @method formSubmit
	**/
	formSubmit (url, params) {
		return api().post(url, params)
			.then((response) => alert('Заявка принята!'))
			.catch((response) => alert('Произошла ошибка'))
	}
}
