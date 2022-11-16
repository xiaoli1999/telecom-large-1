/**
 * @function screenAuto 自适应
 * @param { Number } designW 设计稿宽
 * @param { Number } designH 设计稿高
 * @param { String } dom 缩放dom id
 */
export const screenAuto = (designW = 1920, designH = 1080, dom = 'home') => {
	if (isNaN(designW) || isNaN(designH)) return

	const w = window.innerWidth
	const h = window.innerHeight

	const scaleW = w / designW
	const scaleH = h / designH
	const scale = Math.min(scaleW, scaleH).toFixed(6)
	document.getElementById(dom).style.transform = `scale(${scale})`
}
