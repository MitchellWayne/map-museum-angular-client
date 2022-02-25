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
  notable: Note[] = [];
  scenic: Note[] = [];
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
        let sortRes = this.sortNotes(this.notes);
        this.notable = sortRes[0];
        this.scenic = sortRes[1];
      });
  }

  ngOnInit(): void {
    if (this.series.mainImage) {
      this.seriesImgSrc = this.seriesService.getSeriesMainImage(this.series);
    }

    this.uiService.getNoteListDetailed(this.series._id);
  }

  exitActiveSeries() {
    this.uiService.clearActives();
    this.uiService.getNoteListDetailed('');
  }

  sortNotes(notes: Note[]): Array<Note[]> {
    let notable: Note[] = [];
    let scenic: Note[] = [];
    notes.forEach(
      note => {
        if ( !(note.location && note.locdetails && note.synopsis) ) scenic.push(note);
        else notable.push(note);
      }
    );

    return [notable, scenic];
  }

}
