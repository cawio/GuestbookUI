import { Routes } from '@angular/router';

import { AdminDashboardComponent } from '@features/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from '@features/authentication/login/login.component';
import { GuestbookEntryCreatorComponent } from '@features/guestbook-entry-creator/guestbook-entry-creator.component';
import { GuestbookGridComponent } from '@features/guestbook-grid/guestbook-grid.component';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'guestbook',
        pathMatch: 'full',
    },
    {
        path: 'guestbook',
        component: GuestbookGridComponent,
    },
    {
        path: 'admin',
        canActivate: [authGuard],
        component: AdminDashboardComponent,
    },
    {
        path: 'guestbook/add-entry',
        component: GuestbookEntryCreatorComponent,
    },
    {
        path: 'login',
        component: LoginComponent,
    },
];
