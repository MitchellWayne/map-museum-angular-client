import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private searchActive: boolean = false;

  toggleSearchActive(): void {
    this.searchActive = !this.searchActive;
  }

  constructor() { }
}
