import { Component } from '@angular/core';

/**
 * Generated class for the BottomBannerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'bottom-banner',
  templateUrl: 'bottom-banner.html'
})
export class BottomBannerComponent {
	
  data: any;

  constructor() {
    console.log('Hello BottomBannerComponent Component');
    this.data = [{"name": "Grégoire", "value": "430$"}, {"name": "Erwann", "value": "120$"}];
  }

}
