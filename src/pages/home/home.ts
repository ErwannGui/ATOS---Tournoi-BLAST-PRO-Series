import { Component, ViewChild } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
	@ViewChild('barCanvas') barCanvas;

	barChart: any;
	amount: number;
	isVIP: boolean;

  constructor(private alertCtrl: AlertController, public navCtrl: NavController) {
  	this.amount = 150;
  	this.isVIP = true;
  }

  presentPrompt() {
	  let alert = this.alertCtrl.create({
	    title: 'Add credits',
	    subTitle: 'Exchange money for credits.',
	    message: 'Each credits corresponds to 1$.',
	    inputs: [
	      {
	        name: 'amount',
	        placeholder: 'Amount'
	      }
	    ],
	    buttons: [
	      {
	        text: 'Cancel',
	        role: 'cancel',
	        handler: data => {
	          console.log('Cancel clicked');
	        }
	      },
	      {
	        text: 'Confirm',
	        handler: data => {
	          this.amount = this.amount + parseInt(data.amount);
	        }
	      }
	    ]
	  });
	  alert.present();
	}

  ionViewDidLoad() {

	  this.barChart = new Chart(this.barCanvas.nativeElement, {
      type: 'bar',
      data: {
        labels: ["Food-Drink", "Relaxation", "Sports", "Games"],
        datasets: [{
          label: '# of credits used',
          data: [30, 30, 60, 45],
          backgroundColor: [
            'rgba(190, 45, 125, 0.2)',
            'rgba(245, 185, 10, 0.2)',
            'rgba(190, 45, 125, 0.2)',
            'rgba(245, 185, 10, 0.2)'
          ],
          borderColor: [
            'rgba(190, 45, 125,1)',
            'rgba(245, 185, 10, 1)',
            'rgba(190, 45, 125, 1)',
            'rgba(245, 185, 10, 1)'
          ],
        	borderWidth: 1
      	}]
    	},
    	options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        }
    	}
  	});
	}

}