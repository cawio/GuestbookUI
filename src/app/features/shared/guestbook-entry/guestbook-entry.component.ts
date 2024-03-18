import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

import { EntryDTO } from '@dtos/EntryDTO';

@Component({
    selector: 'app-guestbook-entry',
    standalone: true,
    imports: [MatCardModule],
    templateUrl: './guestbook-entry.component.html',
    styleUrl: './guestbook-entry.component.scss',
})
export class GuestbookEntryComponent {
    @Input({ required: true }) entry: EntryDTO | undefined;
    @Output() deleteEntry = new EventEmitter<string>();

    onDeleteEntry(): void {
        if (!this.entry) {
            return;
        }

        this.deleteEntry.emit(this.entry.id);
    }
}
