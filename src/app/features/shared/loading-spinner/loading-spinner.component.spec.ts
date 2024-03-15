import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadingService } from '@services/loading.service';

import { LoadingSpinnerComponent } from './loading-spinner.component';

describe('LoadingSpinnerComponent', () => {
    let component: LoadingSpinnerComponent;
    let fixture: ComponentFixture<LoadingSpinnerComponent>;
    let loadingService: LoadingService;

    beforeEach(async () => {
        loadingService = new LoadingService(); // You might need to replace this with a mock if LoadingService has dependencies
        await TestBed.configureTestingModule({
            declarations: [LoadingSpinnerComponent],
            providers: [{ provide: LoadingService, useValue: loadingService }],
        }).compileComponents();

        fixture = TestBed.createComponent(LoadingSpinnerComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should have loading property set from LoadingService', () => {
        expect(component.loading).toBe(loadingService.loading);
    });

    it('should update loading property when LoadingService changes', () => {
        loadingService.show();
        expect(component.loading).toBe(true);
        loadingService.hide();
        expect(component.loading).toBe(false);
    });
});
