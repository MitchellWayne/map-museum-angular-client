import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private searchActive: boolean = false;
  private searchActiveSubject = new Subject<any>();

  constructor() { }

  toggleSearchActive(): void {
    this.searchActive = !this.searchActive;
    this.searchActiveSubject.next(this.searchActive);
  }

  onToggle(): Observable<any> {
    return this.searchActiveSubject.asObservable();
  }
}
