import { DatePipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import {
    MatListModule,
    MatListOption,
    MatSelectionListChange,
} from '@angular/material/list';

import { EntryDTO } from '@dtos/EntryDTO';

@Component({
    selector: 'app-entry-selection-list',
    standalone: true,
    imports: [MatListModule, DatePipe],
    templateUrl: './entry-selection-list.component.html',
    styleUrl: './entry-selection-list.component.scss',
})
export class EntrySelectionListComponent {
    @Input({ required: true }) entries: EntryDTO[] = [];
    @Output() selectedEntriesChanged = new EventEmitter<EntryDTO[]>();

    onSelectionChange(event: MatSelectionListChange): void {
        const selectedEntries = event.source.selectedOptions.selected.map(
            (option: MatListOption) => option.value as EntryDTO
        );
        this.selectedEntriesChanged.emit(selectedEntries);
    }
}
