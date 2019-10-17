export declare const Constant: {
    THUMB_IMG_WIDTH: number;
    THUMB_IMG_HEIGHT: number;
};
export declare const RegList: {
    telephone: RegExp;
    idCard: RegExp;
    email: RegExp;
};
export declare enum ValidateType {
    TELE = 0,
    EMAIL = 1,
    CARD = 2
}
export interface IImageBean {
    width: number;
    height: number;
}
