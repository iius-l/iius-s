import { isString } from '../helpers'

/**
 * 通过检测设备 ua
 * 判断是否是移动端设备
 * @returns {boolean}
 */
export function isMobileByUa (userAgent: string = window.navigator.userAgent) {
    if (!isString(userAgent)) {
        return false
    }
    const reg = /(Android|iPhone|Windows Phone|iPad|webOS|BlackBerry|mobile)/i
    return reg.test(userAgent)
}
