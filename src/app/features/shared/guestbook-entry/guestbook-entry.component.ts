import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatBadgeModule } from '@angular/material/badge';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

import { EntryDTO } from '@dtos/EntryDTO';

@Component({
    selector: 'app-guestbook-entry',
    standalone: true,
    imports: [MatCardModule, MatButtonModule, MatIconModule, MatBadgeModule],
    templateUrl: './guestbook-entry.component.html',
    styleUrl: './guestbook-entry.component.scss',
})
export class GuestbookEntryComponent {
    @Input({ required: true }) entry: EntryDTO | undefined;
    @Input() maxContentHeight: number | undefined = undefined;
    @Input() likeable = false;
    @Output() deleteEntry = new EventEmitter<string>();
    @Output() likeEntry = new EventEmitter<EntryDTO>();

    onDeleteEntry(): void {
        if (!this.entry) {
            return;
        }

        this.deleteEntry.emit(this.entry.id);
    }

    get contentHeight(): string {
        return this.maxContentHeight ? `${this.maxContentHeight}px` : 'auto';
    }

    onLike(): void {
        this.likeEntry.emit(this.entry);
    }
}
