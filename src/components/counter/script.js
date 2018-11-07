/**
* @vuedoc
* @module components/counter
* @see @/components/counter
*
* @version 1.0
* @desc Секция Counter
*
* @author Pavel Uhrynovych (Lauer)
* @copyright 2018©VC
*/

const data = {
	log: false,
	title: 'До конца акции осталось:',
	init: false,
	time:{
		devider: ':',
		hoursPostfix: 'час',
		minutesPostfix: 'мин',
		hsecondsPostfix: 'сек',
		hours: 7,
		minutes: 43,
		seconds: 59
	},
	timeInterval: null
}

const methods = {
	getTimeRemaining(endtime) {
		if(this.log)
			this.$log.debug('component \'Counter\' (@/components/counter) - method init')

		const date_ = Date.parse(endtime) - Date.parse(new Date())
		const seconds = Math.floor((date_ / 1000) % 60)
		const minutes = Math.floor((date_ / 1000 / 60) % 60)
		const hours = Math.floor((date_ / (1000 * 60 * 60)) % 24)
		const days = Math.floor(date_ / (1000 * 60 * 60 * 24))

		return {
			'total': date_,
			'hours': hours,
			'minutes': minutes,
			'seconds': seconds
		}
	},
	updateClock(date) {
		if(this.log)
			this.$log.debug('component \'Counter\' (@/components/counter) - method init')

		const time_ = this.getTimeRemaining(date)

		this.time.hours = ('0' + time_.hours).slice(-2)
		this.time.minutes = ('0' + time_.minutes).slice(-2)
		this.time.seconds = ('0' + time_.seconds).slice(-2)

		if (time_.total <= 0) clearInterval(this.timeInterval);
	},
	initializeClock() {
		if(this.log)
			this.$log.debug('component \'Counter\' (@/components/counter) - method init')
		
		const date = new Date()
		
		date.setHours(date.getHours() + 7, date.getMinutes() + 43)
		this.updateClock(date)
		this.timeInterval = setInterval(() => this.updateClock(date), 1000)
		this.init = true
	}
}

/** Export component */
export default {
	// Data
	data: function(){ return data },
	// Method
	methods: methods,
	mounted () {
		this.$log.info('component \'Counter\' (@/components/counter) - mounted hook init')
		if (!this.init) this.initializeClock();
	}
}

