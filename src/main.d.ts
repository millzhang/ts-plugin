export * from './types/core'

// 定义方法
export declare const Utils: {
  getURLParams(name?: string): string | object
  getDevice(): string
  formatDate(datetime?: number | Date, format?: string): string

}


// 定义类
export class CanvasUtil {
  constructor()
  compressImage(imgUrl: string, quality?: number): Promise<string>
}