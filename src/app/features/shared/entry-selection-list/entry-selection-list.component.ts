import { DatePipe } from '@angular/common';
import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewChild,
} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {
    MatListModule,
    MatListOption,
    MatSelectionList,
    MatSelectionListChange,
} from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';

import { EntryDTO } from '@dtos/EntryDTO';

@Component({
    selector: 'app-entry-selection-list',
    standalone: true,
    imports: [
        MatListModule,
        DatePipe,
        MatMenuModule,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './entry-selection-list.component.html',
    styleUrl: './entry-selection-list.component.scss',
})
export class EntrySelectionListComponent {
    @Input({ required: true }) entries: EntryDTO[] = [];
    @Input() menuItems: EntrySelectionListMenuItem[] = [];
    @Output() focusedEntryChanged = new EventEmitter<EntryDTO | undefined>();
    @Output() selectedEntriesChanged = new EventEmitter<EntryDTO[]>();
    @Output() refreshEntries = new EventEmitter<void>();

    @ViewChild(MatSelectionList) selectionList!: MatSelectionList;

    get selectedEntries(): EntryDTO[] {
        return this.selectionList.selectedOptions.selected.map(
            (option: MatListOption) => option.value as EntryDTO
        );
    }

    onSelectionChange(event: MatSelectionListChange): void {
        const selectedEntries = event.source.selectedOptions.selected.map(
            (option: MatListOption) => option.value as EntryDTO
        );
        this.selectedEntriesChanged.emit(selectedEntries);
    }

    onRefreshEntries(): void {
        this.refreshEntries.emit();
    }

    onFocusedEntryChanged(focus: EntryDTO | undefined): void {
        this.focusedEntryChanged.emit(focus);
    }
}

export type EntrySelectionListMenuItem = {
    label: string;
    action: (entries: EntryDTO[]) => void;
};
