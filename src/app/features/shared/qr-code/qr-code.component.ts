import { Component, Input } from '@angular/core';
import { QrCodeModule, RGBAColor } from 'ng-qrcode';

@Component({
    selector: 'app-qr-code',
    standalone: true,
    imports: [QrCodeModule],
    templateUrl: './qr-code.component.html',
    styleUrl: './qr-code.component.scss',
})
export class QrCodeComponent {
    /**
     * The value to encode in the QR code, eg: a url
     */
    @Input({ required: true }) value: string = '';
    /**
     * An optional size in pixels to render at
     * @default undefined automatic size based on the value provided (recommended)
     */
    @Input() size: number | undefined = undefined;
    /**
     * An optional color to render the QR code in
     * @default '#000000FF' black
     */
    @Input() darkColor: RGBAColor | undefined = '#000000FF';
    /**
     * An optional color to render the background in
     * @default '#FFFFFFFF' white
     */
    @Input() lightColor: RGBAColor | undefined = '#FFFFFFFF';
    /**
     * An optional error correction level
     * @link https://www.npmjs.com/package/qrcode#error-correction-level
     * @default 'M'
     */
    @Input() errorCorrectionLevel: 'L' | 'M' | 'Q' | 'H' | undefined = 'M';
    /**
     * A URI suitable to use an a Image src property to load and render in the center of the QR code.
     * @default undefined
     */
    @Input() centerImageSrc: string | undefined = undefined;
    /**
     * The size in pixels to render the center image at
     * @default 60
     */
    @Input() centerImageSize: number | undefined = 60;
    /**
     * The margin in pixels to render around the QR code
     * @default 4
     */
    @Input() margin: number | undefined = 4;
}

export type QRCodeConfig = {
    value: string;
    size?: number;
    darkColor?: RGBAColor;
    lightColor?: RGBAColor;
    errorCorrectionLevel?: 'L' | 'M' | 'Q' | 'H';
    centerImageSrc?: string;
    centerImageSize?: number;
    margin?: number;
};
