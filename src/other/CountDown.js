
class CountDown {
	constructor (callback, done, countDownTime = 60, stepMS = 1000) {
		this.callback = callback
		this.done = done
		this.cacheCountDownTime = countDownTime
		this.countDownTime = countDownTime
		this.stepMS = stepMS
		this.starting = false
	}

	createTimerInterval() {
		this.callback(this.countDownTime)
		this.countDownTime--
		this.timer = setInterval(() => {
			this.callback(this.countDownTime)
			this.countDownTime--
			if (this.countDownTime < 0) {
				this.stop()
			}
		}, this.stepMS)
	}

	start() {
		this.starting = true
		this.createTimerInterval()
	}

	stop() {
		this.starting = false
		this.timer && clearInterval(this.timer)
		this.countDownTime = this.cacheCountDownTime
		this.done()
	}

	pause() {
		this.starting = false
		this.timer && clearInterval(this.timer)
	}
}

export default CountDown
