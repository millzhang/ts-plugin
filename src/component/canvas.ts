/*
 *@version: v0.0.1
 *@author: yckj0881
 *@date: 2019-10-16 14:07:16
 *@description:  canvas相关操作
*/
import { IImageBean, Constant } from '../types/core'

export default class CanvasUtil {
  canvas: any
  constructor() {
  }

  /**
   * 获取加载完成的图片
   * @param base64 
   */
  private getLoadedImage(base64: string) {
    return new Promise((resolve, reject) => {
      try {
        let img = new Image()
        img.onload = function () {
          resolve(this)
        }
        img.src = base64
      } catch (err) {
        console.warn(err)
        reject()
      }

    })
  }

  /**
   * 计算图片的缩放比例
   * @param ow 
   * @param oh 
   */
  private calcWH(ow: IImageBean["width"], oh: IImageBean["height"]): IImageBean {
    if (ow < Constant.THUMB_IMG_WIDTH && oh < Constant.THUMB_IMG_HEIGHT) {
      return { width: ow, height: oh }
    }
    if (ow > oh) {
      var height = Math.ceil(Constant.THUMB_IMG_WIDTH / ow * oh)
      return { width: Constant.THUMB_IMG_WIDTH, height: height }
    } else {
      var width = Math.ceil(Constant.THUMB_IMG_HEIGHT / oh * ow)
      return { width: width, height: Constant.THUMB_IMG_HEIGHT }
    }
  }

  /**
   * 图片压缩
   * @param imgUrl 图片的地址base64或URL
   * @param quality 压缩的质量分
   */
  public async compressImage(imgUrl: string, quality?: number): Promise<string> {
    let img = <HTMLImageElement>await this.getLoadedImage(imgUrl).catch(err => {
      console.warn(err)
    })
    quality = quality || 0.5
    let canvas = document.createElement('canvas')
    let size: IImageBean = this.calcWH(img.width, img.height)
    canvas.width = size.width
    canvas.height = size.height
    let ctx: CanvasRenderingContext2D = <CanvasRenderingContext2D>canvas.getContext('2d')
    ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
    var smBase64 = canvas.toDataURL('image/jpeg', quality)
    return smBase64
  }

}