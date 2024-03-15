import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, delay, of } from 'rxjs';

import { EntryDTO } from '@dtos/EntryDTO';
import { environment } from '@env/environment';

@Injectable({
    providedIn: 'root',
})
export class EntryService {
    private readonly apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getEntries(): Observable<EntryDTO[]> {
        return of(mockEntries).pipe(delay(1000));
    }

    createEntry(entry: EntryDTO): Observable<EntryDTO> {
        return of(entry).pipe(delay(1000));
    }

    deleteEntry(id: string): Observable<null> {
        if (!id) {
            return of(null);
        }

        return of(null).pipe(delay(1000));
    }
}

const mockEntries: EntryDTO[] = [
    {
        id: 'JKLÖsjlih',
        title: 'Mock Entry 3',
        message: 'Short message.',
        creatorName: 'John Doe',
        creationTime: new Date(),
    },
    {
        id: 'JKhjGGlih',
        title: 'Mock Entry 2',
        message:
            'This is another mock entry message that is longer than 100 characters. We need to test if the grid will display this entry in two rows.',
        creatorName: 'Flynn Rider',
        creationTime: new Date(),
    },
    {
        id: 'JKkljulih',
        title: 'Mock Entry 1. With a long title. We need to be larger 30',
        message: 'This is a mock entry message. With a long title.',
        creatorName: 'Dr. Dr. med. Flyman',
        creationTime: new Date(),
    },
];
