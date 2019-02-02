import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailsServicePage } from './details-service';

@NgModule({
  declarations: [
    DetailsServicePage,
  ],
  imports: [
    IonicPageModule.forChild(DetailsServicePage),
  ],
})
export class DetailsServicePageModule {}
