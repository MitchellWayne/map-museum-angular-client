import { Component, OnInit } from '@angular/core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-searchbar',
  templateUrl: './header-searchbar.component.html',
  styleUrls: ['./header-searchbar.component.scss']
})
export class HeaderSearchbarComponent implements OnInit {
  searchQuery!: string;
  faSearchIcon = faSearch;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.searchQuery);
  }
}
