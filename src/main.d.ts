// 定义方法
export declare const Utils: {
  getURLParams(name?: string): string | object
  getDevice(): string
  formatDate(datetime?: number | Date, format?: string): string
}

export declare class CanvasUtil {
  constructor()
  compressImage(imgUrl: string, quality?: number): Promise<string>
}

export declare const ValidateUtil: {
  valid(value: string, type: ValidateType): boolean
}

export declare enum ValidateType {
  TELE = 0,
  EMAIL = 1,
  CARD = 2
}
export declare interface IImageBean {
  width: number;
  height: number;
}