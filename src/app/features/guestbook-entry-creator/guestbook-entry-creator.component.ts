import { Component, inject } from '@angular/core';
import {
    FormBuilder,
    FormControl,
    FormGroup,
    ReactiveFormsModule,
    Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

import { EntryStore } from '@stores/entry.store';

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

    constructor(private fb: FormBuilder) {
        this.form = this.fb.group<EntryFrom>({
            title: this.fb.control('', [
                Validators.required,
                Validators.minLength(3),
            ]),
            message: this.fb.control('', [
                Validators.required,
                Validators.minLength(10),
            ]),
            name: this.fb.control('', [
                Validators.required,
                Validators.minLength(3),
            ]),
        });
    }

    onSubmit() {
        console.log('submitting form', this.form.value);
        if (this.form.invalid) {
            // TODO: show error message
            return;
        }

        this.entryStore.createEntry({
            id: '',
            title: this.form.value.title ?? '',
            creatorName: this.form.value.name ?? '',
            message: this.form.value.message ?? '',
            creationTime: new Date(),
        });
    }
}

type EntryFrom = {
    title: FormControl<string | null>;
    message: FormControl<string | null>;
    name: FormControl<string | null>;
};
