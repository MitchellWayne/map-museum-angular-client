import { Component, Input, OnInit } from '@angular/core';
import { Series } from 'src/app/interfaces/Series';
import { faQuestion, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { SeriesService } from 'src/app/services/series.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-seriesdetailed',
  templateUrl: './seriesdetailed.component.html',
  styleUrls: ['./seriesdetailed.component.scss']
})
export class SeriesdetailedComponent implements OnInit {
  @Input() series!: Series;
  seriesImgSrc: string = "";

  faQuestion = faQuestion;
  faArrowLeft = faArrowLeft;

  constructor( private seriesService: SeriesService, private uiService: UiService ) { }

  ngOnInit(): void {
    if (this.series.mainImage) {
      this.seriesImgSrc = this.seriesService.getSeriesMainImage(this.series);
    }
  }

  exitActiveSeries() {
    this.uiService.clearActives();
  }

}
