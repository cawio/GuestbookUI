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

    onSubmit(): void {
        console.log(this.loginForm.value);

        // TODO: Implement login logic
        this.appStore.login();
        this.router.navigate(['/dashboard']);
    }
}
