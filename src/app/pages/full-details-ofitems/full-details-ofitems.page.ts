import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';
import { LoadingController,AlertController } from '@ionic/angular';

@Component({
  selector: 'app-full-details-ofitems',
  templateUrl: './full-details-ofitems.page.html',
  styleUrls: ['./full-details-ofitems.page.scss'],
})
export class FullDetailsOfitemsPage implements OnInit {

  ItemData:UserDatabase
  constructor(private activatedRoute: ActivatedRoute, public call:CallNumber, public alertCtrl: AlertController,private router: Router) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
       console.log(this.router.getCurrentNavigation().extras.state.user);
       this.ItemData=this.router.getCurrentNavigation().extras.state.user;
      }
    });
   }

  ngOnInit() {
  }
  async showAlertpopup(Item) {
    const alert = await this.alertCtrl.create({
     header: 'Call',
      message: Item,
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Call',
        handler: () => {
          this.CallNumber( Item)
        }
      }]
    });
  
    await alert.present();
  }


  CallNumber(PHONEMOBILE)
  {
  try
  {   
    this.call.callNumber(PHONEMOBILE,true);
  }
  catch(e)
  {
    console.error(e) 
  }
  }
  
  
  backScreen(){
    this.router.navigate(['selecteditems']);
  }

}
