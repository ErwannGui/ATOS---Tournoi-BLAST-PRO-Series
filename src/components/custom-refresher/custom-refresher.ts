import { Component } from '@angular/core';

/**
 * Generated class for the CustomRefresherComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'custom-refresher',
  templateUrl: 'custom-refresher.html'
})
export class CustomRefresherComponent {

  text: string;

  constructor() {
    console.log('Hello CustomRefresherComponent Component');
    this.text = 'Hello World';
  }


  doRefresh(event) {
    console.log('Begin async operation');

    this.constructor();

    setTimeout(() => {
      console.log('Async operation has ended');
      event.complete();
    }, 2000);
  }

}
