import { Component, Input, OnInit } from '@angular/core';
import { Series } from 'src/app/interfaces/Series';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';
import { SeriesService } from 'src/app/services/series.service';

@Component({
  selector: 'app-seriesdetailed',
  templateUrl: './seriesdetailed.component.html',
  styleUrls: ['./seriesdetailed.component.scss']
})
export class SeriesdetailedComponent implements OnInit {
  @Input() series!: Series;
  seriesImgSrc: string = "";

  faQuestion = faQuestion;

  constructor( private seriesService: SeriesService ) { }

  ngOnInit(): void {
    if (this.series.mainImage) {
      this.seriesImgSrc = this.seriesService.getSeriesMainImage(this.series);
    }
  }

}
