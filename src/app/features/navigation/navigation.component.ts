import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { Router, RouterLink } from '@angular/router';

import { AppStore } from '@stores/app.store';

@Component({
    selector: 'app-navigation',
    standalone: true,
    imports: [RouterLink, MatButtonModule, MatIconModule],
    templateUrl: './navigation.component.html',
    styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
    private readonly appStore = inject(AppStore);
    routes: NavigationButtons[] = [
        { label: 'Guestbook', route: '/guestbook' },
        { label: 'Add Entry', route: '/guestbook/add-entry' },
        { label: 'Admin Dashboard', route: '/dashboard' },
    ];
    constructor(private router: Router) {}

    isActive(route: string) {
        return this.router.url === route;
    }

    onLogout() {
        this.appStore.logout();
    }
}

export type NavigationButtons = {
    label: string;
    route: string;
};
