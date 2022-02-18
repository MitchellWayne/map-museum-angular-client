import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { SeriesService } from './series.service';
import { Series } from '../interfaces/Series';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private searchActive: boolean = false;
  private searchActiveSubject = new Subject<any>();

  private searchQuery: string = '';
  private searchQuerySubject = new Subject<any>();

  private infoboxActive: boolean = false;
  private infoboxActiveSubject = new Subject<any>();

  private seriesList: Series[] = [];
  private seriesListSubject = new Subject<any>();

  private activeNote: any;
  private activeNoteSubject = new Subject<any>();

  constructor(private seriesService: SeriesService) {}

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

  setInfoboxActive(state: boolean): void {
    try {
      this.infoboxActive = state;
      this.infoboxActiveSubject.next(this.infoboxActive);
    } catch(err) {
      this.infoboxActiveSubject.error(err);
    }
  }

  onInfoboxActive(): Observable<any> {
    return this.infoboxActiveSubject.asObservable();
  }

  getSeriesList(): void {
    this.seriesService.getSeriesList(this.searchQuery).subscribe(
      (value) =>  {
        this.seriesList = value;
        this.seriesListSubject.next(this.seriesList);
      });
  }

  onSeriesListUpdate(): Observable<Series[]> {
    return this.seriesListSubject.asObservable();
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
