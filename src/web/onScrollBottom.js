export default function onScrollBottom (callback) {
	if (!window || !window.document) return console.warn('当前不是浏览器环境')
	window.addEventListener('scroll', function (e, fluctuate = 0) {
		const scrollTop = document.documentElement.scrollTop || document.body.scrollTop
		const clientHeight = document.documentElement.clientHeight || document.body.clientHeight
		const scrollHeight = document.documentElement.scrollHeight || document.body.scrollHeight
		if (scrollHeight > clientHeight && scrollTop + clientHeight === (scrollHeight - fluctuate)) {
			callback && callback(e)
		}
	})
}
