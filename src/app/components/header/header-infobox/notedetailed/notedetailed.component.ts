import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/Note';
import { UiService } from 'src/app/services/ui.service';

import { faQuestion, faArrowLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-notedetailed',
  templateUrl: './notedetailed.component.html',
  styleUrls: ['./notedetailed.component.scss']
})
export class NotedetailedComponent implements OnInit {
  @Input() note!: Note;
  noteImgSrc: string = "";

  faQuestion = faQuestion;
  faArrowLeft = faArrowLeft;

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  exitActiveNote() {
    this.uiService.clearActives();
  }

}
