import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'http://localhost:5000/note';

  constructor(private http: HttpClient) { }

  // Get notes (minimal)
  getNoteList(query: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/?seriesfilterID=${query}`);
  }

  // Get notes (detailed)
  getNoteListDetailed(query: string): Observable<Note[]> {
    return this.http.get<Note[]>(`${this.apiUrl}/detailed/?seriesfilterID=${query}`);
  }

  // Get note (by ID)
  getNoteByID(id: string): Observable<Note> {
    return this.http.get<Note>(`${this.apiUrl}/${id}`);
  }

}
