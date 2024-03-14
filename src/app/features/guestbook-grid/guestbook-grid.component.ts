import { Component, inject } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { GuestbookEntryComponent } from '@features/guestbook-entry/guestbook-entry.component';
import { EntryStore } from '@stores/entry.store';

@Component({
    selector: 'app-guestbook-grid',
    standalone: true,
    imports: [MatGridListModule, GuestbookEntryComponent],
    templateUrl: './guestbook-grid.component.html',
    styleUrl: './guestbook-grid.component.scss',
})
export class GuestbookGridComponent {
    private readonly entryStore = inject(EntryStore);
    public readonly entries = this.entryStore.entities;
}
