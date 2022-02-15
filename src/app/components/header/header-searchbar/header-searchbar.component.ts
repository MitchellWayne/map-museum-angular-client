import { Component, OnInit } from '@angular/core';
import { faSearch, faTimes} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header-searchbar',
  templateUrl: './header-searchbar.component.html',
  styleUrls: ['./header-searchbar.component.scss']
})
export class HeaderSearchbarComponent implements OnInit {
  searchQuery!: string;
  faSearchIcon = faSearch;
  faClearIcon = faTimes;

  showClearBtn: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.searchQuery);
  }
}
