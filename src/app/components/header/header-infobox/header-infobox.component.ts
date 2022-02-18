import { Component, Input, OnInit } from '@angular/core';
import { Series } from 'src/app/interfaces/Series';

@Component({
  selector: 'app-header-infobox',
  templateUrl: './header-infobox.component.html',
  styleUrls: ['./header-infobox.component.scss']
})
export class HeaderInfoboxComponent implements OnInit {
  @Input() infoboxActive!: boolean;
  @Input() seriesList: Series[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
