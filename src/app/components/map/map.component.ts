import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  map!: google.maps.Map;
  google!: typeof google;

  loader = new Loader({
    apiKey: "AIzaSyDQzXxQOdyekwryvLgymDv4yG-VwssetB0",
    version: "weekly"
  });

  constructor() { }

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

      // Infowindow tests
      let infowindow = new google.maps.InfoWindow();
      let popuphtml = "<div>TEST POPUP <div>INNER TEST</div></div>";
      infowindow.setContent(popuphtml);

       // Test markers
      const marker = new google.maps.Marker({
        position: {lat: 1, lng: 1},
        map: this.map,
        title: "Test marker",
      });

      marker.addListener('click', () => {
        console.log(marker);
        console.log(google);
        console.log(this.google);
        infowindow.open(this.map, marker);
      });

    })
    .catch(err => {
      console.log(err);
    })
  }

}
