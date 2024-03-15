import {
    HttpClientTestingModule,
    HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { EntryDTO } from '@dtos/EntryDTO';

import { EntryService } from './entry.service';

describe('EntryService', () => {
    let service: EntryService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [EntryService],
        });
        service = TestBed.inject(EntryService);
        httpMock = TestBed.inject(HttpTestingController);
    });

    afterEach(() => {
        httpMock.verify();
    });

    it('should fetch entries', () => {
        service.getEntries().subscribe((entries) => {
            expect(entries).toBeTruthy();
            expect(entries.length).toBe(6);
            expect(entries[0].id).toBe('1');
            expect(typeof entries).toBe(typeof Array<EntryDTO>);
        });

        const request = httpMock.expectOne(`${service.apiUrl}/entries`);
        expect(request.request.method).toBe('GET');
        request.flush([
            {
                id: '1',
                title: 'Mock Entry 3',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '2',
                title: 'Mock Entry 2',
                message:
                    'This is another mock entry message that is longer than 100 characters. We need to test if the grid will display this entry in two rows.',
                creatorName: 'Flynn Rider',
                creationTime: new Date(),
            },
            {
                id: '3',
                title: 'Mock Entry 1. With a long title. We need to be larger 30',
                message: 'This is a mock entry message. With a long title.',
                creatorName: 'Dr. Dr. med. Flyman',
                creationTime: new Date(),
            },
            {
                id: '4',
                title: 'Mock Entry 4',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '5',
                title: 'Mock Entry 5',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '6',
                title: 'Mock Entry 6',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
        ]);
    });

    it('should create an entry', () => {
        const entry: EntryDTO = {
            id: '1',
            title: 'Mock Entry 3',
            message: 'Short message.',
            creatorName: 'John Doe',
            creationTime: new Date(),
        };

        service.createEntry(entry).subscribe((response) => {
            expect(response).toBeTruthy();
            expect(response.id).toBe('1');
        });

        const request = httpMock.expectOne(`${service.apiUrl}/entries`);
        expect(request.request.method).toBe('POST');
        request.flush(entry);
    });

    it('should delete an entry', () => {
        const idToDelete = '1';

        service.deleteEntry(idToDelete).subscribe((response) => {
            expect(response).toBeTruthy();
        });

        const request = httpMock.expectOne(`${service.apiUrl}/entries/1`);
        expect(request.request.method).toBe('DELETE');
        request.flush(idToDelete);
    });
});
