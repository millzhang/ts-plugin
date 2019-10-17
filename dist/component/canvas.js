var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
define(["require", "exports", "../types/core"], function (require, exports, core_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var CanvasUtil = /** @class */ (function () {
        function CanvasUtil() {
        }
        /**
         * 获取加载完成的图片
         * @param base64
         */
        CanvasUtil.prototype.getLoadedImage = function (base64) {
            return new Promise(function (resolve, reject) {
                try {
                    var img = new Image();
                    img.onload = function () {
                        resolve(this);
                    };
                    img.src = base64;
                }
                catch (err) {
                    console.warn(err);
                    reject();
                }
            });
        };
        /**
         * 计算图片的缩放比例
         * @param ow
         * @param oh
         */
        CanvasUtil.prototype.calcWH = function (ow, oh) {
            if (ow < core_1.Constant.THUMB_IMG_WIDTH && oh < core_1.Constant.THUMB_IMG_HEIGHT) {
                return { width: ow, height: oh };
            }
            if (ow > oh) {
                var height = Math.ceil(core_1.Constant.THUMB_IMG_WIDTH / ow * oh);
                return { width: core_1.Constant.THUMB_IMG_WIDTH, height: height };
            }
            else {
                var width = Math.ceil(core_1.Constant.THUMB_IMG_HEIGHT / oh * ow);
                return { width: width, height: core_1.Constant.THUMB_IMG_HEIGHT };
            }
        };
        /**
         * 图片压缩
         * @param imgUrl 图片的地址base64或URL
         * @param quality 压缩的质量分
         */
        CanvasUtil.prototype.compressImage = function (imgUrl, quality) {
            return __awaiter(this, void 0, void 0, function () {
                var img, canvas, size, ctx, smBase64;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getLoadedImage(imgUrl).catch(function (err) {
                                console.warn(err);
                            })];
                        case 1:
                            img = _a.sent();
                            quality = quality || 0.5;
                            canvas = document.createElement('canvas');
                            size = this.calcWH(img.width, img.height);
                            canvas.width = size.width;
                            canvas.height = size.height;
                            ctx = canvas.getContext('2d');
                            ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
                            smBase64 = canvas.toDataURL('image/jpeg', quality);
                            return [2 /*return*/, smBase64];
                    }
                });
            });
        };
        return CanvasUtil;
    }());
    exports.default = CanvasUtil;
});
