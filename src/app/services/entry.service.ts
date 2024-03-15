import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { EntryDTO } from '@dtos/EntryDTO';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root',
})
export class EntryService {
    readonly apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getEntries(): Observable<EntryDTO[]> {
        const mockEntries: EntryDTO[] = [
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
            {
                id: '7',
                title: 'Mock Entry 7',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '8',
                title: 'Mock Entry 8',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '9',
                title: 'Mock Entry 9',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '10',
                title: 'Mock Entry 10',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '11',
                title: 'Mock Entry 11',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '12',
                title: 'Mock Entry 12',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '13',
                title: 'Mock Entry 13',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '14',
                title: 'Mock Entry 14',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '15',
                title: 'Mock Entry 15',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
            {
                id: '16',
                title: 'Mock Entry 16',
                message: 'Short message.',
                creatorName: 'John Doe',
                creationTime: new Date(),
            },
        ];

        return of(mockEntries).pipe(delay(1000));
    }

    createEntry(entry: EntryDTO): Observable<EntryDTO> {
        return of(entry).pipe(delay(1000));
    }

    deleteEntry(id: string): Observable<boolean> {
        if (id === '1') {
            return of(true).pipe(delay(1000));
        }

        return of(true).pipe(delay(1000));
    }
}
