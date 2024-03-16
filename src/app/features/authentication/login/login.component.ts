import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';

import { AppStore } from '@stores/app.store';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
    private readonly appStore = inject(AppStore);

    constructor(private router: Router) {}

    ngOnInit(): void {
        this.appStore.login();
        this.router.navigate(['/admin']);
    }
}
