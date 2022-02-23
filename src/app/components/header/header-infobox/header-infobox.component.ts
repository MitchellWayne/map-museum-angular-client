import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/interfaces/Note';
import { Series } from 'src/app/interfaces/Series';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-header-infobox',
  templateUrl: './header-infobox.component.html',
  styleUrls: ['./header-infobox.component.scss']
})
export class HeaderInfoboxComponent implements OnInit {
  @Input() infoboxActive!: boolean;
  @Input() seriesList: Series[] = [];

  @Input() activeSeries!: Series;
  @Input() activeNote!: Note;

  constructor() { 
  }

  ngOnInit(): void {
  }

}
