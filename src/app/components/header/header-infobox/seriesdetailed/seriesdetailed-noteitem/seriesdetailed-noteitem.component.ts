import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/Note';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-seriesdetailed-noteitem',
  templateUrl: './seriesdetailed-noteitem.component.html',
  styleUrls: ['./seriesdetailed-noteitem.component.scss']
})
export class SeriesdetailedNoteitemComponent implements OnInit {
  @Input() note!: Note;

  constructor(private uiService: UiService) { }

  ngOnInit(): void {
  }

  setActiveNote(note: Note) {
    this.uiService.clearActives();
    this.uiService.setActiveNote(note);
    console.log(note);
  }
}
