import { Routes } from '@angular/router';

import { GuestbookEntryCreatorComponent } from '@features/guestbook-entry-creator/guestbook-entry-creator.component';
import { GuestbookGridComponent } from '@features/guestbook-grid/guestbook-grid.component';

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
        component: GuestbookGridComponent,
    },
    {
        path: 'guestbook/add-entry',
        component: GuestbookEntryCreatorComponent,
    },
];
