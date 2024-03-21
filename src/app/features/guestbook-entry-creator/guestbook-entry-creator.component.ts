import { Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    FormGroupDirective,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';

import { SnackbarService } from '@services/snackbar.service';
import { EntryStore } from '@stores/entry.store';
import { SqidsUtility } from '@utils/SqidsUtil';

@Component({
    selector: 'app-guestbook-entry-creator',
    standalone: true,
    imports: [
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './guestbook-entry-creator.component.html',
    styleUrl: './guestbook-entry-creator.component.scss',
})
export class GuestbookEntryCreatorComponent {
    entryStore = inject(EntryStore);
    form: FormGroup<EntryFrom>;

    constructor(
        private fb: FormBuilder,
        private snackbar: SnackbarService,
        private router: Router
    ) {
        this.form = this.fb.group<EntryFrom>({
            title: this.fb.control('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50),
            ]),
            name: this.fb.control('', [
                Validators.required,
                Validators.minLength(3),
                Validators.maxLength(50),
            ]),
            message: this.fb.control('', [
                Validators.required,
                Validators.minLength(10),
            ]),
        });
    }

    async onSubmit(formDirective: FormGroupDirective): Promise<void> {
        if (this.form.invalid) {
            this.snackbar.open('Please fill out the form correctly', 'close');
            return;
        }

        const title = this.form.value.title?.trim();
        const name = this.form.value.name?.trim();
        const message = this.form.value.message?.trim();

        if (!title || !name || !message) {
            this.snackbar.open('Seems like you tried to be cheeky', 'close');
            return;
        }

        await this.entryStore
            .createEntry({
                id: SqidsUtility.encode([0]),
                title: title,
                creatorName: name,
                message: message,
                creationTime: new Date(),
            })
            .then(() => {
                this.router.navigate(['/guestbook']);
                this.form.reset();
                // * This is a workaround for the issue with the form not resetting the pristine state
                // * see: https://stackoverflow.com/a/48217303 and https://github.com/angular/components/issues/4190
                formDirective.resetForm();
            });
    }
}

type EntryFrom = {
    title: FormControl<string | null>;
    message: FormControl<string | null>;
    name: FormControl<string | null>;
};
