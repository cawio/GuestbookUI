import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';

import { SnackbarService } from '@services/snackbar.service';
import { AppStore } from '@stores/app.store';

export const authGuard: CanActivateFn = (
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot,
    appStore = inject(AppStore),
    router = inject(Router),
    snackbar = inject(SnackbarService)
) => {
    if (!appStore.loggedIn()) {
        snackbar.open('Please login to access this page', 'redirected', {
            duration: 2000,
            panelClass: ['red-snackbar'],
        });
        router.navigate(['/login']);
        return false;
    }

    return true;
};
