import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/Note';
import { UiService } from 'src/app/services/ui.service';

import { faQuestion, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { NoteService } from 'src/app/services/note.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notedetailed',
  templateUrl: './notedetailed.component.html',
  styleUrls: ['./notedetailed.component.scss']
})
export class NotedetailedComponent implements OnInit {

  @Input() note!: Note;
  // activeNoteSubscription: Subscription;
  noteImgSrc: string = "";
  noteSeriesImgSrc: string = "";

  faQuestion = faQuestion;
  faArrowLeft = faArrowLeft;

  constructor(
    private uiService: UiService,
    private noteService: NoteService
  ){}

  ngOnInit(): void {
    if (this.note.image) {
      this.noteImgSrc = this.noteService.getNoteImage(this.note);
    }

    if (this.note.seriesimage) {
      this.noteSeriesImgSrc = this.noteService.getNoteSeriesImage(this.note);
    }
  }

  exitActiveNote() {
    this.uiService.clearActives();
  }

  swapActiveImage() {
    if (this.noteImgSrc && this.noteSeriesImgSrc) {
      const tempsrc = this.noteImgSrc;
      this.noteImgSrc = this.noteSeriesImgSrc;
      this.noteSeriesImgSrc = tempsrc;
    }
  }
}
