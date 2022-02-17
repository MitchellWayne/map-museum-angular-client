import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private searchActive: boolean = false;
  private searchActiveSubject = new Subject<any>();

  private searchQuery: string = '';
  private searchQuerySubject = new Subject<any>();

  private activeNote: any;
  private activeNoteSubject = new Subject<any>();

  constructor() { }

  setSearchActive(state: boolean): void {
    try {
      this.searchActive = state;
      this.searchActiveSubject.next(this.searchActive);
    } catch(err) {
      this.searchActiveSubject.error(err);
    }
  }

  onSearchActive(): Observable<any> {
    return this.searchActiveSubject.asObservable();
  }

  updateSearchQuery(query: string): void {
    try {
      this.searchQuery = query;
      this.searchQuerySubject.next(this.searchQuery);
    } catch(err) {
      this.searchQuerySubject.error(err);
    }
  }

  onUpdateSearchQuery(): Observable<any> {
    return this.searchQuerySubject.asObservable();
  }

  setActiveNote(note: any) {
    try {
      this.activeNote = note;
      this.activeNoteSubject.next(this.activeNote);
    } catch(err) {
      this.activeNoteSubject.error(err);
    }
  }

  onUpdateActiveNote(): Observable<any> {
    return this.activeNoteSubject.asObservable();
  }
}
