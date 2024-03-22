import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';

import {
    QrCodeComponent,
    QRCodeConfig,
} from '@features/shared/qr-code/qr-code.component';
import { AppStore } from '@stores/app.store';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-page-header',
    standalone: true,
    imports: [
        QrCodeComponent,
        MatToolbarModule,
        RouterLink,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './page-header.component.html',
    styleUrl: './page-header.component.scss',
})
export class PageHeaderComponent {
    private readonly appStore = inject(AppStore);
    loggedIn = this.appStore.loggedIn;
    isLightTheme = this.appStore.isLightTheme;
    title = 'Guestbook';
    addEntryQrCodeConfig: QRCodeConfig = {
        value: `${environment.frontendUrl}/guestbook/add-entry`,
        size: 55,
        margin: 1,
        errorCorrectionLevel: 'H',
    };

    constructor() {}

    onMenuButtonClick() {
        this.appStore.toggleDrawer();
    }

    onToggleThemeButtonClick() {
        this.appStore.toggleTheme();
    }
}
