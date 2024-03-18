import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { EntryDTO } from '@dtos/EntryDTO';
import { environment } from '@env/environment';
import { SqidsUtility } from '@utils/SqidsUtil';

@Injectable({
    providedIn: 'root',
})
export class EntryService {
    readonly apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    getEntries(): Observable<EntryDTO[]> {
        return this.http.get<EntryDTO[]>(`${this.apiUrl}/entry`);
    }

    createEntry(entry: EntryDTO): Observable<EntryDTO> {
        return this.http.post<EntryDTO>(`${this.apiUrl}/entry`, entry);
    }

    deleteEntry(id: string): Observable<boolean> {
        return this.http.delete<boolean>(`${this.apiUrl}/entry/${id}`);
    }

    deleteEntries(ids: string[]): Observable<boolean> {
        const decodedIds = ids.map((id) => {
            const decodedId = SqidsUtility.decode(id);

            if (decodedId?.length !== 1) {
                throw new Error('Invalid ID');
            }

            return decodedId[0];
        });
        const encodedIds = SqidsUtility.encode(decodedIds);
        return this.http.delete<boolean>(`${this.apiUrl}/entry/${encodedIds}`);
    }
}
