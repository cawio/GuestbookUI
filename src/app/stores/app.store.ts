import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export const AppStore = signalStore(
    { providedIn: 'root' },
    withState({
        loggedIn: false,
    }),
    withMethods((state) => ({
        login() {
            patchState(state, { loggedIn: true });
        },
        logout() {
            patchState(state, { loggedIn: false });
        },
    }))
);
