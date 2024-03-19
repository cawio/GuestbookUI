import { Component, inject } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { RouterOutlet } from '@angular/router';

import { NavigationComponent } from '@features/navigation/navigation.component';
import { LoadingSpinnerComponent } from '@features/shared/loading-spinner/loading-spinner.component';
import { PageHeaderComponent } from '@features/shared/page-header/page-header.component';
import { AppStore } from '@stores/app.store';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatSidenavModule,
        PageHeaderComponent,
        LoadingSpinnerComponent,
        NavigationComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {
    private readonly appStore = inject(AppStore);
    showDrawer = this.appStore.showDrawer;

    constructor() {}
}
