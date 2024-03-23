import {
    Component,
    computed,
    HostListener,
    inject,
    OnInit,
    signal,
} from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';

import { EntryDTO } from '@dtos/EntryDTO';
import { GuestbookEntryComponent } from '@features/shared/guestbook-entry/guestbook-entry.component';
import { EntryStore } from '@stores/entry.store';

@Component({
    selector: 'app-guestbook-grid',
    standalone: true,
    imports: [MatGridListModule, GuestbookEntryComponent],
    templateUrl: './guestbook-grid.component.html',
    styleUrl: './guestbook-grid.component.scss',
})
export class GuestbookGridComponent implements OnInit {
    private readonly entryStore = inject(EntryStore);
    readonly entries = computed(() => {
        return this.entryStore.entities().map<EntryDTOWrapper>((entry) => ({
            entry,
            cols: this.calculateCols(entry),
            rows: this.calculateRows(entry),
        }));
    });
    rowHeight = 220;
    cols = signal<number>(4);

    constructor() {}

    ngOnInit() {
        // TODO: wtf why does this work
        this.onResize(window);
    }

    calculateCols(entry: EntryDTO) {
        return entry.title.length > 30 ? 2 : 1;
    }

    calculateRows(entry: EntryDTO) {
        if (this.calculateCols(entry) === 2) {
            return 1;
        }

        return entry.message.length > 100 ? 2 : 1;
    }

    @HostListener('window:resize', ['$event.target'])
    onResize(window: Window) {
        if (window.innerWidth < 900) {
            this.cols.set(2);
        } else if (window.innerWidth < 1100) {
            this.cols.set(3);
        } else {
            this.cols.set(4);
        }
    }

    onLike(entry: EntryDTO) {
        this.entryStore.likeEntry(entry);
    }
}

export type EntryDTOWrapper = {
    entry: EntryDTO;
    cols: number;
    rows: number;
};
