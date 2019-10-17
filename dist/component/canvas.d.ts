export default class CanvasUtil {
    canvas: any;
    constructor();
    /**
     * 获取加载完成的图片
     * @param base64
     */
    private getLoadedImage;
    /**
     * 计算图片的缩放比例
     * @param ow
     * @param oh
     */
    private calcWH;
    /**
     * 图片压缩
     * @param imgUrl 图片的地址base64或URL
     * @param quality 压缩的质量分
     */
    compressImage(imgUrl: string, quality?: number): Promise<string>;
}
