import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { MapKey } from '../interfaces/MapKey';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class MapService {
  private apiUrl = 'http://localhost:5000'; // to be changed to work w/ heroku

  constructor(private http: HttpClient) { }

  getMapKey(): Observable<MapKey> {
    return this.http.get<MapKey>(`${this.apiUrl}/admin/mapsAPI`);
  }
}
