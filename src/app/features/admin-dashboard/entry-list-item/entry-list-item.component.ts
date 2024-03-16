import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { EntryDTO } from '@dtos/EntryDTO';

@Component({
    selector: 'app-entry-list-item',
    standalone: true,
    imports: [MatButtonModule, MatIconModule],
    templateUrl: './entry-list-item.component.html',
    styleUrl: './entry-list-item.component.scss',
})
export class EntryListItemComponent {
    @Input({ required: true }) entry: EntryDTO = {} as EntryDTO;
    @Output() delete = new EventEmitter<string>();

    constructor() {}

    onDelete(): void {
        this.delete.emit(this.entry.id);
    }
}
