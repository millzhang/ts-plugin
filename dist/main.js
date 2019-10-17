var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
define(["require", "exports", "./component/utils", "./component/canvas"], function (require, exports, Utils, canvas_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    Utils = __importStar(Utils);
    canvas_1 = __importDefault(canvas_1);
    exports.Utils = Utils;
    exports.CanvasUtil = canvas_1.default;
});
