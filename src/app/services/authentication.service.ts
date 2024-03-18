import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { UserDTO } from '@dtos/UserDTO';
import { environment } from '@env/environment';
import { SqidsUtility } from '@utils/SqidsUtil';

@Injectable({
    providedIn: 'root',
})
export class AuthenticationService {
    readonly apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<string> {
        const user: UserDTO = {
            id: SqidsUtility.encode([0]),
            username,
            password,
        };

        return this.http.post(`${this.apiUrl}/auth/login`, user, {
            responseType: 'text',
        });
    }

    validateToken(token: string): Observable<boolean> {
        return this.http.post<boolean>(`${this.apiUrl}/auth/tokenExpired`, {
            token,
        });
    }
}
