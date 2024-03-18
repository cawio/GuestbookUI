import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

import { AppStore } from '@stores/app.store';

@Component({
    selector: 'app-login',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './login.component.html',
    styleUrl: './login.component.scss',
})
export class LoginComponent {
    private readonly appStore = inject(AppStore);
    loginForm: FormGroup;

    constructor(
        private router: Router,
        private fb: FormBuilder
    ) {
        this.loginForm = this.fb.group({
            email: [''],
            password: [''],
        });
    }

    async onSubmit(): Promise<void> {
        const email = this.loginForm.get('email')?.value;
        const password = this.loginForm.get('password')?.value;

        if (!email || !password || this.loginForm.invalid) {
            return;
        }

        await this.appStore.login(email, password);

        if (this.appStore.loggedIn()) {
            this.router.navigate(['/dashboard']);
        }
    }
}
