import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrySelectionListComponent } from './entry-selection-list.component';

describe('EntrySelectionListComponent', () => {
    let component: EntrySelectionListComponent;
    let fixture: ComponentFixture<EntrySelectionListComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            imports: [EntrySelectionListComponent],
        }).compileComponents();

        fixture = TestBed.createComponent(EntrySelectionListComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });
});
