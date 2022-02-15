import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-searchbar',
  templateUrl: './header-searchbar.component.html',
  styleUrls: ['./header-searchbar.component.scss']
})
export class HeaderSearchbarComponent implements OnInit {
  searchQuery!: string;

  constructor() { }

  ngOnInit(): void {
  }

  onSearch() {
    console.log(this.searchQuery);
  }
}
