import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-coordinatebox',
  templateUrl: './coordinatebox.component.html',
  styleUrls: ['./coordinatebox.component.scss']
})
export class CoordinateboxComponent implements OnInit {
  lat: string = '';
  lng: string = '';
  coordsSubscription: Subscription;

  constructor(private uiService: UiService) {
    this.coordsSubscription = this.uiService.onCoordinatesChange().subscribe(
      coords => {
        let splitcoords = coords.replace(/[\(\)]/g,'').split(',');
        this.lat = splitcoords[0];
        this.lng = splitcoords[1];
      }
    )
  }

  ngOnInit(): void {
  }

}
