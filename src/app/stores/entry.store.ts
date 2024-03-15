import { inject } from '@angular/core';
import {
    patchState,
    signalStore,
    withHooks,
    withMethods,
    withState,
} from '@ngrx/signals';
import { addEntities, addEntity, withEntities } from '@ngrx/signals/entities';
import { firstValueFrom } from 'rxjs';

import { EntryDTO } from '@dtos/EntryDTO';
import { EntryService } from '@services/entry.service';

type EntryStoreState = {
    loading: boolean;
    error: unknown;
};

export const EntryStore = signalStore(
    { providedIn: 'root' },
    withState<EntryStoreState>({
        loading: false,
        error: null,
    }),
    withEntities<EntryDTO>(),
    withMethods((state, entryService = inject(EntryService)) => ({
        async loadEntries() {
            try {
                patchState(state, { loading: true, error: '' });
                const entries = await firstValueFrom(entryService.getEntries());
                patchState(state, addEntities(entries));
            } catch (error: unknown) {
                patchState(state, { error: error });
            } finally {
                patchState(state, { loading: false });
            }
        },
        async createEntry(entry: EntryDTO) {
            try {
                patchState(state, { loading: true, error: '' });
                const newEntry = await firstValueFrom(
                    entryService.createEntry(entry)
                );
                patchState(state, addEntity(newEntry));
            } catch (error: unknown) {
                patchState(state, { error: error });
            } finally {
                patchState(state, { loading: false });
            }
        },
    })),
    withHooks({
        onInit(store) {
            store.loadEntries();
        },
    })
);
