import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<any[]>(`${environment.apiUrl}/user/getAllUsers`);
    }

    register(user) {
        return this.http.post(`${environment.apiUrl}/user/postUser`, user);
    }

    delete(id) {
        return this.http.delete(`${environment.apiUrl}/user/deleteUser/${id}`);
    }
}