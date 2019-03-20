import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable(

)
export class MerchantService {
    url = environment.url;
     temp = JSON.parse(localStorage.getItem('user'));
    access_token = this.temp['id']

constructor(private http: HttpClient) {}


getCategories(): Observable<object> {
    return this.http.get(`${this.url}/merchantCategories?access_token=${this.access_token}`)
}
createMerchant(obj): Observable<object> {
    return this.http.post(`${this.url}/merchants?access_token=${this.access_token}`, obj)
}
uploadImage(img): Observable<Object> {
    return this.http.post(`${this.url}/attachments/myContainer/upload`, img)

}
}
