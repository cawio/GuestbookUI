import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatListModule, MatSelectionListChange } from '@angular/material/list';

import { EntryListItemComponent } from '@features/admin-dashboard/entry-list-item/entry-list-item.component';
import { ConfirmDialogComponent } from '@features/shared/confirm-dialog/confirm-dialog.component';
import { EntryStore } from '@stores/entry.store';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    imports: [MatListModule, EntryListItemComponent],
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.scss',
})
export class AdminDashboardComponent {
    private readonly entryStore = inject(EntryStore);
    entries = this.entryStore.entities;

    constructor(private dialog: MatDialog) {
        this.entryStore.loadEntries();
    }

    deleteEntry(id: string): boolean {
        const dialogRef = this.dialog.open(ConfirmDialogComponent, {
            data: {
                message: `Are you sure you want to delete this entry (${id})?`,
            },
        });

        dialogRef.afterClosed().subscribe((result) => {
            if (result) {
                this.entryStore.deleteEntry(id);
            }
        });

        return false;
    }

    onSelectionChange(event: MatSelectionListChange): void {
        const selected = event.source.selectedOptions;

        console.log(selected);
    }
}
