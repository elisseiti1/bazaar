import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as L from 'leaflet';
import {latLng, tileLayer} from 'leaflet';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, AfterViewInit {
  optionsSpec: any = {
    layers: [{ url: 'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', attribution: 'Open Street Map' }],
    zoom: 11,
    center: [41.3275 , 19.8187]
  };

  zoom = this.optionsSpec.zoom;
  center = L.latLng(this.optionsSpec.center);

  options = {
    layers: [L.tileLayer(this.optionsSpec.layers[0].url, { attribution: this.optionsSpec.layers[0].attribution })],
    zoom: this.optionsSpec.zoom,
    center: L.latLng(this.optionsSpec.center)
  };
  constructor() { }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {

  }



}
