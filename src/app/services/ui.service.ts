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
    this.searchQuery = query;
    this.searchQuerySubject.next(this.searchQuery);
  }

  onUpdateSearchQuery(): Observable<any> {
    return this.searchQuerySubject.asObservable();
  }
}
