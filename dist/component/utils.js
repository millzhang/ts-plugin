/*
 *@version: v0.0.1
 *@author: yckj0881
 *@date: 2019-10-15 14:18:12
 *@description:  ts插件工具包
*/
define(["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
    * 获取URL参数
    * @param name
    */
    function getURLParams(name) {
        var location = window.location;
        if (!name) {
            var parames_1 = {};
            location.href.replace(/(\w+)=(\w+)/ig, function (a, b, c) {
                parames_1[b] = c;
                return a;
            });
            return parames_1;
        }
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = location.search.substr(1).match(reg);
        if (r != null)
            return unescape(r[2]);
        return "";
    }
    exports.getURLParams = getURLParams;
    /**
     * 获取当前设备类型
     * @param params
     */
    function getDevice() {
        var deviceType = 'WEB'; //其他
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1;
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
        if (isAndroid) {
            deviceType = 'ANDROID';
        }
        else if (isiOS) {
            deviceType = 'IOS';
        }
        return deviceType;
    }
    exports.getDevice = getDevice;
    /**
    * 日期格式化
    * @param date
    * @param format
    */
    function formatDate(datetime, format) {
        if (!format) {
            // 定义默认的格式化格式
            format = 'yyyy-MM-dd hh:mm:ss';
        }
        var d = datetime ? new Date(datetime) : new Date();
        var date = {
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
        for (var k in date) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1
                    ? date[k] : ("00" + date[k]).substr(("" + date[k]).length));
            }
        }
        return format;
    }
    exports.formatDate = formatDate;
});
