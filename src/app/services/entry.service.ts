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
                message:
                    'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
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

    deleteEntries(ids: string[]): Observable<boolean> {
        if (!ids.length) {
            return of(false).pipe(delay(1000));
        }

        return of(true).pipe(delay(1000));
    }
}
