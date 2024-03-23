import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

import { EntryDTO } from '@dtos/EntryDTO';
import { AppStore } from '@stores/app.store';
import { SqidsUtility } from '@utils/SqidsUtil';
import { environment } from 'src/environments/environment';

@Injectable({
    providedIn: 'root',
})
export class EntryService {
    readonly apiUrl = environment.apiUrl;
    private readonly appStore = inject(AppStore);

    constructor(private http: HttpClient) {}

    getEntries(): Observable<EntryDTO[]> {
        return this.http.get<EntryDTO[]>(`${this.apiUrl}/entry`);
    }

    createEntry(entry: EntryDTO): Observable<EntryDTO> {
        return this.http.post<EntryDTO>(`${this.apiUrl}/entry`, entry);
    }

    deleteEntries(ids: string[]): Observable<string> {
        const decodedIds = ids.map((id) => {
            const decodedId = SqidsUtility.decode(id);

            if (decodedId?.length !== 1) {
                throw new Error('Invalid ID');
            }

            return decodedId[0];
        });
        const encodedIds = SqidsUtility.encode(decodedIds);
        return this.http.delete(`${this.apiUrl}/entry/${encodedIds}`, {
            responseType: 'text',
            headers: {
                Authorization: `Bearer ${this.appStore.token()}`,
            },
        });
    }

    updateEntry(entry: EntryDTO): Observable<EntryDTO> {
        return this.http.put<EntryDTO>(`${this.apiUrl}/entry/`, entry);
    }
}
