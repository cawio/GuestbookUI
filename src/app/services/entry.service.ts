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
        id: '1',
        creatorName: 'John Doe',
        content: 'This is the first entry',
        creationTime: new Date(),
    },
    {
        id: '2',
        creatorName: 'Jane Doe',
        content: 'This is the second entry',
        creationTime: new Date(),
    },
    {
        id: '3',
        creatorName: 'John Doe',
        content: 'This is the third entry',
        creationTime: new Date(),
    },
];
