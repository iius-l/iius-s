export type SizeType = 'MB' | 'KB' | 'BYTE'

/**
 * 生成字节大小, 单位字节
 * @param {number} size
 * @param {SizeType} type
 * @returns {number}
 */
export function createSize (size: number, type: SizeType) {
    // @ts-ignore
    type = type.toLocaleUpperCase()

    switch (type) {
        case 'MB':
            return Math.pow(1024, 2) * size
        case 'KB':
            return Math.pow(1024, 1) * size
        case 'BYTE':
            return size
        default:
            return 0
    }
}
