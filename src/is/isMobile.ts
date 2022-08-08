import isMobileByUa from './isMobileByUa.js'

/**
  * 是否移动端
 * @param {string} width
  * @returns {any}
  */
const isMobile = (width = '768') => {
    const isMobileUa = isMobileByUa()
    if (isMobileUa) {
        return true
    }
    return document.documentElement.clientWidth <= parseInt(width)
}

export default isMobile
