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

    this.searchQuerySubscription = this.uiService.onUpdateSearchQuery().subscribe(
      value => {
        this.searchQuery = value;
      }
    );
  }

  ngOnInit(): void {
  }

  updateSearch(updatedQuery: string) {
    this.uiService.updateSearchQuery(updatedQuery);
    this.uiService.setSearchActive(this.searchQuery !== "");
    console.log(this.searchActive + ":" + this.searchQuery);
  }
}
