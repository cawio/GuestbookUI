import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import {
    patchState,
    signalStore,
    withHooks,
    withMethods,
    withState,
} from '@ngrx/signals';
import {
    addEntities,
    addEntity,
    removeEntities,
    removeEntity,
    withEntities,
} from '@ngrx/signals/entities';
import { firstValueFrom } from 'rxjs';

import { EntryDTO } from '@dtos/EntryDTO';
import { EntryService } from '@services/entry.service';
import { SnackbarService } from '@services/snackbar.service';

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
    withMethods(
        (
            state,
            entryService = inject(EntryService),
            snackbar = inject(SnackbarService)
        ) => ({
            async loadEntries() {
                try {
                    patchState(state, { loading: true, error: '' });
                    const entries = await firstValueFrom(
                        entryService.getEntries().pipe()
                    );
                    patchState(state, addEntities(entries));
                } catch (error: unknown) {
                    patchState(state, { error: error });
                    if (error instanceof HttpErrorResponse) {
                        snackbar.open(
                            'Error loading entries',
                            error.statusText
                        );
                    }
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
                    snackbar.open('Error creating entry');
                } finally {
                    patchState(state, { loading: false });
                }
            },
            async deleteEntry(id: string) {
                try {
                    patchState(state, { loading: true, error: '' });
                    await firstValueFrom(entryService.deleteEntry(id));
                    patchState(state, removeEntity(id));
                    snackbar.open('Entry deleted');
                } catch (error: unknown) {
                    patchState(state, { error: error });
                    snackbar.open('Error deleting entry');
                } finally {
                    patchState(state, { loading: false });
                }
            },
            async deleteEntries(ids: string[]) {
                try {
                    patchState(state, { loading: true, error: '' });
                    await firstValueFrom(entryService.deleteEntries(ids));
                    patchState(state, removeEntities(ids));
                    snackbar.open('Entries deleted');
                } catch (error: unknown) {
                    patchState(state, { error: error });
                    snackbar.open('Error deleting entries');
                } finally {
                    patchState(state, { loading: false });
                }
            },
        })
    ),
    withHooks({
        onInit(store) {
            store.loadEntries();
        },
    })
);
