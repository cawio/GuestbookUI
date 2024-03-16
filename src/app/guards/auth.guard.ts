import { inject } from '@angular/core';
import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';

import { AppStore } from '@stores/app.store';

export const authGuard: CanActivateFn = (
    _: ActivatedRouteSnapshot,
    __: RouterStateSnapshot,
    appStore = inject(AppStore),
    router = inject(Router)
) => {
    if (!appStore.loggedIn()) {
        router.navigate(['/login']);
        return false;
    }

    return true;
};
