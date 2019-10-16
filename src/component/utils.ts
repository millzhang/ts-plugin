/*
 *@version: v0.0.1
 *@author: yckj0881
 *@date: 2019-10-15 14:18:12
 *@description:  ts插件工具包
*/


/**
* 获取URL参数
* @param name
*/
export function getURLParams(name?: string): string | object {
  let location = window.location;
  if (!name) {
    let parames: {
      [key: string]: any
    } = {}
    location.href.replace(/(\w+)=(\w+)/ig, (a: string, b: string, c: string): string => {
      parames[b] = c;
      return a;
    });
    return parames;
  }
  let reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
  let r = location.search.substr(1).match(reg);
  if (r != null) return unescape(r[2]);
  return ""
}

/**
 * 获取当前设备类型
 * @param params 
 */
export function getDevice(): string {
  let deviceType = 'WEB' //其他
  let u = navigator.userAgent
  let isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1
  let isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/)
  if (isAndroid) {
    deviceType = 'ANDROID'
  } else if (isiOS) {
    deviceType = 'IOS'
  }
  return deviceType
}

/**
* 日期格式化
* @param date
* @param format
*/
export function formatDate(datetime?: number | Date, format?: string): string {
  if (!format) {
    // 定义默认的格式化格式
    format = 'yyyy-MM-dd hh:mm:ss'
  }
  let d = datetime ? new Date(datetime) : new Date()
  let date: {
    [key: string]: any
  } = {
    "M+": d.getMonth() + 1,
    "d+": d.getDate(),
    "h+": d.getHours(),
    "m+": d.getMinutes(),
    "s+": d.getSeconds(),
    "q+": Math.floor((d.getMonth() + 3) / 3),
    "S+": d.getMilliseconds()
  };
  if (/(y+)/i.test(format)) {
    format = format.replace(RegExp.$1, (d.getFullYear() + '').substr(4 - RegExp.$1.length));
  }
  for (let k in date) {
    if (new RegExp("(" + k + ")").test(format)) {
      format = format.replace(RegExp.$1, RegExp.$1.length == 1
        ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
    }
  }
  return format;
}
