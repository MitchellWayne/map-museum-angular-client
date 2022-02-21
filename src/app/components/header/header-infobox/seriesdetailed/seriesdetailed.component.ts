import { Component, Input, OnInit } from '@angular/core';
import { Series } from 'src/app/interfaces/Series';
import { Note } from 'src/app/interfaces/Note';

import { SeriesService } from 'src/app/services/series.service';
import { NoteService } from 'src/app/services/note.service';
import { UiService } from 'src/app/services/ui.service';

import { faQuestion, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-seriesdetailed',
  templateUrl: './seriesdetailed.component.html',
  styleUrls: ['./seriesdetailed.component.scss']
})
export class SeriesdetailedComponent implements OnInit {
  @Input() series!: Series;
  seriesImgSrc: string = "";

  notes: Note[] = [];
  notesSubscription!: Subscription;

  faQuestion = faQuestion;
  faArrowLeft = faArrowLeft;

  constructor( 
    private seriesService: SeriesService,
    private uiService: UiService,
  ){
    this.notesSubscription = this.uiService.onNoteListUpdate().subscribe(
      (value) => {
        this.notes = value;
        console.log(value);
        console.log(this.notes);
      });
  }

  ngOnInit(): void {
    if (this.series.mainImage) {
      this.seriesImgSrc = this.seriesService.getSeriesMainImage(this.series);
    }

    this.uiService.getNoteList(this.series._id);
  }

  exitActiveSeries() {
    this.uiService.clearActives();
  }

}
