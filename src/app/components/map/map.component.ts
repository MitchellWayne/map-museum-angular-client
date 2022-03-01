import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';
import { Subscription } from 'rxjs';
import { Note } from 'src/app/interfaces/Note';
import { NoteService } from 'src/app/services/note.service';
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})

export class MapComponent implements OnInit {
  activeNotes: Note[] = [];
  noteSubscription: Subscription;
  activeNoteSubscription: Subscription;
  noteMarkers: google.maps.Marker[] = [];

  pinsActive: boolean = true;
  pinsActiveSub: Subscription;

  map!: google.maps.Map;
  google!: typeof google;

  zoomed: boolean = false;

  loader = new Loader({
    apiKey: "AIzaSyDQzXxQOdyekwryvLgymDv4yG-VwssetB0",
    version: "weekly"
  });

  constructor(private uiService: UiService, private noteService: NoteService) {
    this.noteSubscription = this.uiService.onNoteListUpdate().subscribe(
      value => {
        this.activeNotes = value;  
        if (this.pinsActive) this.reloadNotes(this.zoomed);
      }
    );

    this.activeNoteSubscription = this.uiService.onUpdateActiveNote().subscribe(
      note => {
        if (note) {
          let latlng = note.latlong.split(',')
          this.map.setCenter({lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1])});
          this.map.setZoom(9);
        }
      }
    );

    this.pinsActiveSub = this.uiService.onPinsActiveChange().subscribe(
      state => {
        this.pinsActive = state;
        if (!this.pinsActive) {
          this.clearMarkers();
        } else {
          this.reloadNotes(this.zoomed);
        }
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
        zoomControl: false,
        disableDoubleClickZoom: true,
      });

      this.uiService.getNoteListDetailed('');

      this.map.addListener('zoom_changed', () => {
        if (this.map.getZoom() as number >= 10) {
          if (this.zoomed === false){
            this.zoomed = true;
            this.reloadNotes(this.zoomed);
          }
        } else {
          if (this.zoomed === true){
            this.zoomed = false;
            this.reloadNotes(this.zoomed);
          }
        }
      });

      // this.map.addListener('bounds_changed', () => {
      //   if (this.map.getZoom() as number >= 10) {
      //     if (this.zoomed === false){
      //       this.zoomed = true;
      //       this.reloadNotes(this.zoomed);
      //     }
      //   } else {
      //     if (this.zoomed === true){
      //       this.zoomed = false;
      //       this.reloadNotes(this.zoomed);
      //     }
      //   }
      // });

      this.map.addListener('dblclick', () => {
        console.log(this.map.getCenter()?.toString());
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

  reloadNotes(zoomed: boolean) {
    this.clearMarkers();
    this.activeNotes.forEach((note: Note, index) => {
      const img = {
        url: 'http://maps.google.com/mapfiles/kml/pushpin/red-pushpin.png',
        scaledSize: new google.maps.Size(25, 25),
      }

      const latlng = note.latlong.split(',')
      const marker = new this.google.maps.Marker({
        position: {lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1])},
        map: this.map,
        title: note.title,
        icon: img,
        animation: google.maps.Animation.DROP,
      });

       // Infowindow setup for map listener
       let noteImgUrl = this.noteService.getNoteImage(note);
       let infowindow = new google.maps.InfoWindow();
       let popuphtml = 
       `<div _ngcontent-gbs-c55="" class="notedetailed__pic" style="
        width: 100px;
        height: 100px;
        ">
          <img src=${noteImgUrl}
          style="
          object-fit: cover;
          width: 100%;
          height: 100%;
          ">
        </div>`;
       infowindow.setContent(popuphtml);

      marker.addListener('click', () => {
        this.uiService.clearActives();
        setTimeout(() => { this.uiService.setActiveNote(this.activeNotes[index]); }, 50);
      });

      if (zoomed && this.map.getBounds()?.contains(marker.getPosition() as google.maps.LatLng)) infowindow.open(this.map, marker);
      else infowindow.close();

      this.noteMarkers.push(marker);
    });
  }

  clearMarkers() {
    this.noteMarkers.forEach(marker => {
      marker.setMap(null);
    });
  }
}