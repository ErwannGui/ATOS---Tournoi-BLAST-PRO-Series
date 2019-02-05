import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';
import {
  GoogleMaps,
  GoogleMap,
  LatLng,
  GoogleMapsEvent,
} from '@ionic-native/google-maps';
import { Platform } from 'ionic-angular/index';
/**
 * Generated class for the MapPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-map',
  templateUrl: 'map.html',
})
export class MapPage {

	@ViewChild('map') mapElement: ElementRef;
	private map: GoogleMap;
 	private location: LatLng;
 	selectedService: boolean;
 	service: {title: string, time: string};
 	data: string[];
 	
  constructor(public navCtrl: NavController, public navParams: NavParams, private geolocation: Geolocation, private googleMaps: GoogleMaps, private platform: Platform) {

  	this.selectedService = false;
  	let random = Math.floor(Math.random() * 5);

  	this.data = ['Airsoft', 'WC', 'Yoga', 'Bar', 'Snack'];

  	this.selectedService = navParams.get('service');
  	if (this.selectedService) {
  		this.pickService(random);
  	}
  	this.geolocation.getCurrentPosition().then(res => {
		 	console.log(res.coords.latitude);
		 	console.log(res.coords.longitude);
		 	this.location = new LatLng(res.coords.latitude, res.coords.longitude);
	  }).catch(error => {
		  console.log('Error getting location', error);
		});

		/*let watch = this.geolocation.watchPosition();
		watch.subscribe((data) => {
			console.log(data.coords.latitude);
		 	console.log(data.coords.longitude);
		 	this.location = new LatLng(data.coords.latitude, data.coords.longitude);
		 // data can be a set of coordinates, or an error (if an error occurred).
		 // data.coords.latitude
		 // data.coords.longitude
		});*/
  }

  pickService(random: number) {
  	this.service = {
  		title: this.data[random],
  		time: '14h - 02h'
  	};
  }

  addMarker() {
	  this.map.addMarker({
	    title: 'Your are here !',
	    icon: 'red',
	    animation: 'DROP',
	    position: {
	      lat: this.location.lat,
	      lng: this.location.lng
	    }
	  })
	  .then(marker => {
	    marker.on(GoogleMapsEvent.MARKER_CLICK).subscribe(() => {
	      alert('Welcome !');
	    });
	  });
	}

  ionViewDidLoad() {
  	if (this.platform.is('cordova')) {
		  this.platform.ready().then(() => {
	    let element = this.mapElement.nativeElement;
	    this.map = this.googleMaps.create(element);
	 
	    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {
	      let options = {
	        target: this.location,
	        zoom: 12
	      };
	 
	      this.map.moveCamera(options);
	      setTimeout(500);
	    	this.addMarker();
	    });
	  });
		}
	}

	itemTapped(event) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MapPage, {
      service: true
    });
  }
}
