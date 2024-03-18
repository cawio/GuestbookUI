import { inject } from '@angular/core';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';
import { firstValueFrom } from 'rxjs';

import { AuthenticationService } from '@services/authentication.service';
import { SnackbarService } from '@services/snackbar.service';

export const AppStore = signalStore(
    { providedIn: 'root' },
    withState({
        token: undefined as string | undefined,
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
            },
        })
    )
);
