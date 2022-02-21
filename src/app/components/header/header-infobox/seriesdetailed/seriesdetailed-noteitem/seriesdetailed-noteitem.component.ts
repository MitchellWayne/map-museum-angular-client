import { Component, Input, OnInit } from '@angular/core';
import { Note } from 'src/app/interfaces/Note';

@Component({
  selector: 'app-seriesdetailed-noteitem',
  templateUrl: './seriesdetailed-noteitem.component.html',
  styleUrls: ['./seriesdetailed-noteitem.component.scss']
})
export class SeriesdetailedNoteitemComponent implements OnInit {
  @Input() note!: Note;

  constructor() { }

  ngOnInit(): void {
  }

}
