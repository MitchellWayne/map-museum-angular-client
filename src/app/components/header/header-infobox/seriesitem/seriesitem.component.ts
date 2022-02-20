import { Component, Input, OnInit } from '@angular/core';
import { SeriesService } from 'src/app/services/series.service';
import { Series } from 'src/app/interfaces/Series';
import { faQuestion } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-seriesitem',
  templateUrl: './seriesitem.component.html',
  styleUrls: ['./seriesitem.component.scss']
})
export class SeriesitemComponent implements OnInit {
  @Input() series!: Series;
  seriesImgSrc: string = "";
  seriesMainImgSrc: string= "";
  faQuestion = faQuestion;

  constructor( private seriesService: SeriesService) { }

  ngOnInit(): void {
    if (this.series.image) {
      this.seriesImgSrc = this.seriesService.getSeriesImage(this.series);
    }

    if (this.series.mainImage) {
      this.seriesMainImgSrc = this.seriesService.getSeriesMainImage(this.series);
    }
  }

}
