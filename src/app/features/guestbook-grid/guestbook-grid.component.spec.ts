import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookGridComponent } from './guestbook-grid.component';

describe('GuestbookGridComponent', () => {
    let component: GuestbookGridComponent;
    let fixture: ComponentFixture<GuestbookGridComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GuestbookGridComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(GuestbookGridComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
