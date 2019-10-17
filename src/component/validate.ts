/*
 *@version: v0.0.1
 *@author: yckj0881
 *@date: 2019-10-16 16:03:10
 *@description:  校验工具类
*/

import { RegList, ValidateType } from '../types/core'

export function valid(value: string, type: ValidateType): boolean {
  let result = false
  switch (type) {
    case type = ValidateType.TELE:
      result = isTelephone(value)
      break;
    case type = ValidateType.EMAIL:
      result = isEmail(value)
      break;
    case type = ValidateType.CARD:
      result = isIdCard(value)
      break;
    default:
      break;
  }
  return result
}

/**
 * 手机号码校验
 * @param phone 手机号码
 */
function isTelephone(phone: number | string): boolean {
  if (RegList.telephone.test(phone.toString())) {
    return true
  } else {
    return false
  }
}

/**
 * 校验邮箱
 * @param email 
 */
function isEmail(email: string): boolean {
  if (RegList.email.test(email.toString())) {
    return true
  } else {
    return false
  }
}

/**
 * 校验身份证号码
 * @param idCard 
 */
function isIdCard(idCard: string): boolean {
  if (RegList.idCard.test(idCard)) {
    if (idCard.length == 18) {
      //将前17位加权因子保存在数组里
      var idCardWi = new Array(7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2)
      //这是除以11后，可能产生的11位余数、验证码，也保存成数组
      var idCardY = new Array(1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2)
      var idCardWiSum = 0 //用来保存前17位各自乖以加权因子后的总和
      for (var i = 0; i < 17; i++) {
        idCardWiSum += Number(idCard.substring(i, i + 1)) * idCardWi[i]
      }
      var idCardMod = idCardWiSum % 11 //计算出校验码所在数组的位置
      var idCardLast = idCard.substring(17) //得到最后一位身份证号码
      //如果等于2，则说明校验码是10，身份证号码最后一位应该是X
      if (idCardMod == 2) {
        if (idCardLast == 'X' || idCardLast == 'x') {
          return true
        } else {
          return false
        }
      } else {
        //用计算出的验证码与最后一位身份证号码匹配，如果一致，说明通过，否则是无效的身份证号码
        if (idCardLast === idCardY[idCardMod].toString()) {
          return true
        } else {
          return false
        }
      }
    } else {
      return false
    }
  } else {
    return false
  }
}