import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private apiUrl = 'http://localhost:5000/series'; // to be changed to work w/ heroku

  constructor(private http: HttpClient) { }

  getMapKey(): Observable<string> {
    return this.http.get<string>(`${this.apiUrl}/admin/mapsAPI`);
  }
}
