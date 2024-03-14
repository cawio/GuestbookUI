import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterOutlet } from '@angular/router';

import { PageHeaderComponent } from '@features/page-header/page-header.component';

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [
        RouterOutlet,
        MatToolbarModule,
        MatSidenavModule,
        PageHeaderComponent,
    ],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
})
export class AppComponent {}
