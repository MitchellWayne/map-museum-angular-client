import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Note } from '../interfaces/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  private apiUrl = 'https://media-map-mw.herokuapp.com/note';

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

  getNoteImage(note: Note): string {
    return `${this.apiUrl}/${note._id}/image/${note.image}`;
  }

  getNoteSeriesImage(note: Note): string {
    return `${this.apiUrl}/${note._id}/image/${note.seriesimage}`;
  }

}
