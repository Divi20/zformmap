import { Component, OnInit } from '@angular/core';
import "@here/maps-api-for-javascript";

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  constructor() { }
  
  private platform :  any ;
  private defaultLayers: any;
  private map: any ;

  ngOnInit(): void {
    // Instantiate the Platform object with your HERE API key
    this.platform = new H.service.Platform({
      apikey:"6QN94pxHbA0ZYhAcWPGKXDheDyZCC5pX7u7QXoYKKUQ"
    });

    // Retrieve the default tile layers
    this.defaultLayers = this.platform.createDefaultLayers();
    const mapUI: any  = document.getElementById("mapContainer");

    // Create a new map using the default vector tile layer
    this.map = new H.Map(
     mapUI,
      this.defaultLayers.vector.normal.map,
      {
        zoom: 10,
        center: { lat: 52.5, lng: 13.4 }
      }
    );
  
  }

}
