import { Component, Input, OnInit } from '@angular/core';
import { Series } from 'src/app/interfaces/Series';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seriesitem',
  templateUrl: './seriesitem.component.html',
  styleUrls: ['./seriesitem.component.scss']
})
export class SeriesitemComponent implements OnInit {
  @Input() series!: Series;
  faQuestion = faQuestion;

  constructor() { }

  ngOnInit(): void {
  }

}
