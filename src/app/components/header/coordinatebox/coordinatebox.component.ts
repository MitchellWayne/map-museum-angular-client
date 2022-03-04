import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-coordinatebox',
  templateUrl: './coordinatebox.component.html',
  styleUrls: ['./coordinatebox.component.scss']
})
export class CoordinateboxComponent implements OnInit {
  coords: string = '';
  coordsSubscription: Subscription;

  constructor(private uiService: UiService) {
    this.coordsSubscription = this.uiService.onCoordinatesChange().subscribe(
      coords => {
        this.coords = coords;
      }
    )
  }

  ngOnInit(): void {
  }

}
