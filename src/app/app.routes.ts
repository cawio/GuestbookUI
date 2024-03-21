import { Routes } from '@angular/router';

import { AdminDashboardComponent } from '@features/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from '@features/authentication/login/login.component';
import { GuestbookEntryCreatorComponent } from '@features/guestbook-entry-creator/guestbook-entry-creator.component';
import { GuestbookGridComponent } from '@features/guestbook-grid/guestbook-grid.component';
import { NotFoundComponent } from '@features/shared/not-found/not-found.component';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'guestbook',
        pathMatch: 'full',
    },
    {
        path: 'guestbook',
        title: 'Guestbook',
        component: GuestbookGridComponent,
    },
    {
        path: 'guestbook/add-entry',
        title: 'Add Guestbook Entry',
        component: GuestbookEntryCreatorComponent,
    },
    {
        path: 'dashboard',
        title: 'Dashboard',
        canActivate: [authGuard],
        component: AdminDashboardComponent,
    },
    {
        path: 'login',
        title: 'Login',
        component: LoginComponent,
    },
    {
        // make sure this is the last route in the array
        path: '**',
        component: NotFoundComponent,
    },
];
