import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-listService',
  templateUrl: 'listService.html'
})
export class ListServicePage {
  selectedItem: any;
  imgs: Array[];
  data: Array[];
  items: Array<{title: string, note: string, icon: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    // Let's populate this page with some filler content for funzies
    this.imgs = ['bullet.png', 'wc.png', 'yoga.png', 'beer.png', 'popcorn.png'];

    this.data = ['Airsoft', 'WC', 'Yoga', 'Bar', 'Snack'];

    this.items = [];
    for (let i = 1; i < 6; i++) {
      let random = Math.floor(Math.random() * 5);
      this.items.push({
        title: this.data[random],
        note: 'This is service #' + i,
        img: this.imgs[random],
      });
    }
  }

  itemTapped(event, item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(ListServicePage, {
      item: item
    });
  }
}
