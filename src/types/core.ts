// 常理类
export const Constant = {
  THUMB_IMG_WIDTH: 1024,
  THUMB_IMG_HEIGHT: 1000
}

export const RegList = {
  telephone: new RegExp(/^[1][3,4,5,6,7,8,9][0-9]{9}$/),
  idCard: new RegExp(/^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/),
  email: new RegExp(/^[-_A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/)
}

export enum ValidateType {
  TELE,
  EMAIL,
  CARD
}

// 定义数据类型和接口规范
export interface IImageBean {
  width: number
  height: number
}
