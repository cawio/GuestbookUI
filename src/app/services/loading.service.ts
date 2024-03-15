import { Injectable, effect, inject, signal } from '@angular/core';

import { EntryStore } from '@stores/entry.store';

@Injectable({
    providedIn: 'root',
})
export class LoadingService {
    private readonly entryStore = inject(EntryStore);
    private readonly internalLoading = signal(false);
    public readonly loading = this.internalLoading.asReadonly();

    constructor() {
        effect(
            () => {
                if (this.entryStore.loading()) {
                    this.show();
                } else {
                    this.hide();
                }
            },
            { allowSignalWrites: true }
        );
    }

    public show(): void {
        this.internalLoading.set(true);
    }

    public hide(): void {
        this.internalLoading.set(false);
    }
}
