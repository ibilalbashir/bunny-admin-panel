import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NewsLetterService {
  url = environment.url;
  constructor(private http: HttpClient) {}

  saveTemplate(obj): Observable<Object> {
    return this.http.post(`${this.url}/NewsLetters`, obj);
  }
}
