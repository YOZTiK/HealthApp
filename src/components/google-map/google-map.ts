import {Component, ViewChild} from '@angular/core';

@Component({
  selector: 'google-map',
  templateUrl: 'google-map.html'
})
export class GoogleMapComponent {

  @ViewChild("map") mapElement;
  map: any;
  constructor() {
  }
  /*ngOnInit(){
    this.initMap();
  }

  initMap(){
    let coords = new google.maps.LatLng(19.273592, -99.574469);
    let mapOptions: google.maps.MapOptions = {
      center: coords,
      zoom: 14,
      mapTypeId: google.maps.MapTypeId.ROADMAP,
      /!*zoomControl: false,
      mapTypeControl: false,
      streetViewControl: false*!/
      disableDefaultUI: true,
      /!*fullscreenControl: true,
      fullscreenControlOptions:{
        position: google.maps.ControlPosition.TOP_CENTER
      }*!/
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement,mapOptions);
  }*/
}
