import { TestBed } from '@angular/core/testing';
import { MatSnackBar } from '@angular/material/snack-bar';

import { SnackbarService } from './snackbar.service';

describe('SnackbarService', () => {
    let service: SnackbarService;
    let snackBar: MatSnackBar;

    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [
                SnackbarService,
                {
                    provide: MatSnackBar,
                    useValue: jasmine.createSpyObj('MatSnackBar', ['open']),
                },
            ],
        });
        service = TestBed.inject(SnackbarService);
        snackBar = TestBed.inject(MatSnackBar);
    });

    it('should be created', () => {
        expect(service).toBeTruthy();
    });

    it('should open a snackbar', () => {
        const message = 'Test message';
        const action = 'Action';
        service.openSnackBar(message, action);
        expect(snackBar.open).toHaveBeenCalledWith(message, action, {
            duration: 2000,
        });
    });

    it('should open a snackbar without action', () => {
        const message = 'Test message';
        service.openSnackBar(message);
        expect(snackBar.open).toHaveBeenCalledWith(message, undefined, {
            duration: 2000,
        });
    });
});
