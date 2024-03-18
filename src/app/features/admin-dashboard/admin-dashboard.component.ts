import { Component, inject, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';

import { EntryDTO } from '@dtos/EntryDTO';
import {
    ConfirmDeleteDialogData,
    ConfirmDialogComponent,
} from '@features/shared/confirm-dialog/confirm-dialog.component';
import {
    EntrySelectionListComponent,
    EntrySelectionListMenuItem,
} from '@features/shared/entry-selection-list/entry-selection-list.component';
import { GuestbookEntryComponent } from '@features/shared/guestbook-entry/guestbook-entry.component';
import { EntryStore } from '@stores/entry.store';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [
        MatListModule,
        EntrySelectionListComponent,
        GuestbookEntryComponent,
        GuestbookEntryComponent,
        MatButtonModule,
        MatIconModule,
    ],
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
    private readonly entryStore = inject(EntryStore);
    entries = this.entryStore.entities;
    focusedEntry = signal<EntryDTO | undefined>(undefined);
    selectedEntries = signal<EntryDTO[]>([]);
    menuItems: EntrySelectionListMenuItem[] = [
        {
            label: 'Delete',
            action: this.onDeleteSelected.bind(this),
        },
    ];

    constructor(private dialog: MatDialog) {
        this.entryStore.loadEntries();
    }

    onDeleteSelected(): boolean {
        const multiple = this.selectedEntries().length > 1;
        const dialogConfig: MatDialogConfig<ConfirmDeleteDialogData> = {
            disableClose: true,
            data: {
                message: `You are about to delete the ${multiple ? 'entries' : 'entry'} with the following ${multiple ? 'ids' : 'id'}:`,
                idsToDelete: this.selectedEntries().map((entry) => entry.id),
            },
        };

        const dialogRef = this.dialog.open(
            ConfirmDialogComponent,
            dialogConfig
        );

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                const selectedIds = this.selectedEntries()!.map(
                    (entry) => entry.id
                );
                this.entryStore.deleteEntries(selectedIds);
            }
        });

        return false;
    }

    onSelectedEntriesChanged(selectedEntries: EntryDTO[]): void {
        this.selectedEntries.set(selectedEntries);
    }

    onRefreshEntries(): void {
        this.entryStore.loadEntries();
    }

    onFocusedEntryChanged(focusedEntry: EntryDTO | undefined): void {
        this.focusedEntry.set(focusedEntry);
    }
}
