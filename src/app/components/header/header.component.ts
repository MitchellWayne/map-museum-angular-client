import { Component, OnInit } from '@angular/core';
import { UiService } from 'src/app/services/ui.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  searchActive!: boolean;
  searchActiveSubscription!: Subscription;

  searchQuery!: string;
  searchQuerySubscription!: Subscription;

  constructor(private uiService: UiService) { 
    this.searchActiveSubscription = this.uiService.onSearchActive().subscribe(
      value => { 
        this.searchActive = value;
      }
    );

    // This might not necessarily be needed here, just in the dropdown component
    this.searchQuerySubscription = this.uiService.onUpdateSearchQuery().subscribe(
      value => {
        this.searchQuery = value;
      }
    );
  }

  ngOnInit(): void {
  }

  toggleSearchActive() {
    this.uiService.toggleSearchActive();
  }

  // This might not necessarily be needed here, just in the searchbar component
  updateSearchQuery(updatedQuery: string) {
    this.uiService.updateSearchQuery(updatedQuery);
  }

}
