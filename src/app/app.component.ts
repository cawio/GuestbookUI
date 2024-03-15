import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { LoadingSpinnerComponent } from '@features/shared/loading-spinner/loading-spinner.component';
import { PageHeaderComponent } from '@features/shared/page-header/page-header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatSidenavModule,
        PageHeaderComponent,
        LoadingSpinnerComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {}
