import { Injectable } from '@angular/core';
import {
    MatSnackBar,
    MatSnackBarRef,
    TextOnlySnackBar,
} from '@angular/material/snack-bar';

@Injectable({
    providedIn: 'root',
})
export class SnackbarService {
    constructor(private snackbar: MatSnackBar) {}

    public openSnackBar(
        message: string,
        action?: string
    ): MatSnackBarRef<TextOnlySnackBar> {
        return this.snackbar.open(message, action, {
            duration: 2000,
        });
    }
}
