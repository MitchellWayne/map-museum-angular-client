import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/interfaces/Note';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  activeNotes: Note[] = [];
  noteSubscription: Subscription;

  map!: google.maps.Map;
  google!: typeof google;

  loader = new Loader({
    apiKey: "AIzaSyDQzXxQOdyekwryvLgymDv4yG-VwssetB0",
    version: "weekly"
  });

  constructor(private uiService: UiService) {
    this.noteSubscription = this.uiService.onNoteListUpdate().subscribe(
      value => {
        this.activeNotes = value;  
      }
    );
  }

  ngOnInit(): void {
    // Load map at default coordinates
    this.loader.load()
    .then((google) => {
      this.google = google;
      this.map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: 45.9795412, lng: -51.6052898 },
        zoom: 2,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  reloadNotes() {
    this.activeNotes.forEach((note: Note) => {
      const latlng = note.latlong.split(',')
      const marker = new this.google.maps.Marker({
        position: {lat: parseInt(latlng[0]), lng: parseInt(latlng[1])},
        map: this.map,
        title: note.title,
      });

       // Infowindow tests
       let infowindow = new google.maps.InfoWindow();
       let popuphtml = `<div>${note.title} <div>${note.location}</div></div>`;
       infowindow.setContent(popuphtml);

      marker.addListener('click', () => {
        console.log(marker);
        infowindow.open(this.map, marker)
      })
    });
  }
}
