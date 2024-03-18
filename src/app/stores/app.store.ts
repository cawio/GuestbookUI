import { inject } from '@angular/core';
import {
    patchState,
    signalStore,
    withHooks,
    withMethods,
    withState,
} from '@ngrx/signals';
import { rxMethod } from '@ngrx/signals/rxjs-interop';
import { firstValueFrom, pipe, tap } from 'rxjs';

import { AuthenticationService } from '@services/authentication.service';
import { SnackbarService } from '@services/snackbar.service';

export const AppStore = signalStore(
    { providedIn: 'root' },
    withState({
        token: localStorage.getItem('token') ?? undefined,
        loggedIn: false,
        error: undefined as unknown | undefined,
    }),
    withMethods(
        (
            state,
            authService = inject(AuthenticationService),
            snackbar = inject(SnackbarService)
        ) => ({
            async login(username: string, password: string) {
                try {
                    const token = await firstValueFrom(
                        authService.login(username, password)
                    );
                    patchState(state, { token, loggedIn: true });
                    snackbar.open('Logged in');
                } catch (error: unknown) {
                    patchState(state, {
                        error,
                        token: undefined,
                        loggedIn: false,
                    });
                    snackbar.open('Error logging in', 'close');
                }
            },
            logout() {
                patchState(state, { token: undefined, loggedIn: false });
                localStorage.removeItem('token');
                snackbar.open('Logged out');
            },
            updateLocalStorage: rxMethod<string | undefined>(
                pipe(
                    tap((token) =>
                        token
                            ? localStorage.setItem('token', token)
                            : localStorage.removeItem('token')
                    )
                )
            ),
            updateToken(token: string) {
                patchState(state, { token });
            },
            async validateToken() {
                if (!state.token || !state.token()) {
                    return false;
                }

                return await firstValueFrom(
                    authService.validateToken(state.token()!)
                );
            },
        })
    ),
    withHooks({
        async onInit(store) {
            store.updateLocalStorage(store.token); // side effect

            const token = localStorage.getItem('token');
            const valid = await store.validateToken();
            if (token && valid) {
                store.updateToken(token);
                patchState(store, { token, loggedIn: true });
            }
        },
    })
);
