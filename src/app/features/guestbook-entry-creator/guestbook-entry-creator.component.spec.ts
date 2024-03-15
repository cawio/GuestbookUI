import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookEntryCreatorComponent } from './guestbook-entry-creator.component';

describe('GuestbookEntryCreatorComponent', () => {
    let component: GuestbookEntryCreatorComponent;
    let fixture: ComponentFixture<GuestbookEntryCreatorComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [GuestbookEntryCreatorComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(GuestbookEntryCreatorComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
