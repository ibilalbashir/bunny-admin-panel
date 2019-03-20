import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable(

)
export class AuthService {
    url = environment.url
constructor(private http: HttpClient) {}
loggedIn() {
    const user = localStorage.getItem('user')
        if (user) {
            return true

        } else {
            return false
        }

}

logIn(obj): Observable<object> {
    return this.http.post(`${this.url}/administrators/login`, obj)
}
}
