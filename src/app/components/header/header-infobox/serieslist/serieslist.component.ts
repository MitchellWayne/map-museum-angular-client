import { Component, Input, OnInit } from '@angular/core';
import { Series } from 'src/app/interfaces/Series';

@Component({
  selector: 'app-serieslist',
  templateUrl: './serieslist.component.html',
  styleUrls: ['./serieslist.component.scss']
})
export class SerieslistComponent implements OnInit {
  @Input() seriesList!: Series[];

  constructor() { }

  ngOnInit(): void {
  }

}
