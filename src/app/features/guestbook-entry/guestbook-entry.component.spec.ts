import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookEntryComponent } from './guestbook-entry.component';

describe('GuestbookEntryComponent', () => {
    let component: GuestbookEntryComponent;
    let fixture: ComponentFixture<GuestbookEntryComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GuestbookEntryComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(GuestbookEntryComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
