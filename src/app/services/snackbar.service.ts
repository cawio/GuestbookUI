import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarConfig,
    MatSnackBarRef,
    TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    constructor(private snackbar: MatSnackBar) {}

    public open(
        message: string,
        action: string | undefined = undefined,
        config: MatSnackBarConfig = {
            duration: 2000,
        }
    ): MatSnackBarRef<TextOnlySnackBar> {
        return this.snackbar.open(message, action, config);
    }
}
