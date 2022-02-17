import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-infobox',
  templateUrl: './header-infobox.component.html',
  styleUrls: ['./header-infobox.component.scss']
})
export class HeaderInfoboxComponent implements OnInit {
  @Input() infoboxActive!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
