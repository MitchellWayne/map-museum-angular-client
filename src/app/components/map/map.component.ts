import { Component, OnInit } from '@angular/core';
import { Loader } from '@googlemaps/js-api-loader';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  loader = new Loader({
    apiKey: "AIzaSyDQzXxQOdyekwryvLgymDv4yG-VwssetB0",
    version: "weekly"
  });

  // map!: google.maps.Map;

  constructor() { }

  ngOnInit(): void {
    this.loader.load()
    .then((google) => {
      new google.maps.Map(document.getElementById("map") as HTMLElement, {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
        fullscreenControl: false,
        mapTypeControl: false,
        streetViewControl: false,
      });
    })
    .catch(err => {
      console.log(err);
    })
  }

}
