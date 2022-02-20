import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Series } from '../interfaces/Series';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  })
}

@Injectable({
  providedIn: 'root'
})
export class SeriesService {
  private apiUrl = 'http://localhost:5000/series';

  constructor(private http: HttpClient) { }

  getSeriesList(query: string): Observable<Series[]> {
    return this.http.get<Series[]>(`${this.apiUrl}/?seriesfilter=${query}`);
  }

  getSeriesImage(series: Series): string {
    return `${this.apiUrl}/${series._id}/image/${series.image}`;
  }

  getSeriesMainImage(series: Series): string {
    return `${this.apiUrl}/${series._id}/image/${series.mainImage}`;
  }
}
