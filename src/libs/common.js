/**
 * @deprecated 获取随机16进制颜色
 * @returns {String} 返回颜色
 */
export const randomColor = () => {
    let color = ''
    for (let i = 0; i < 6; i++) {
        color += '0123456789ABCDEF'[Math.floor(Math.random() * 16)]
    }
    return color
}

/**
* @function throttle 函数节流
* @param { Function } func 需要节流的函数
* @param { Number } wait 节流阀
*/
export const throttle = (func, wait = 200) => {
    let timeout
    return function () {
        const context = this
        const args = arguments
        if (!timeout) {
            timeout = setTimeout(() => {
                timeout = null
                func.apply(context, args)
            }, wait)
        }
    }
}
