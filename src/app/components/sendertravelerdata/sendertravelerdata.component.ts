import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NavigationExtras } from '@angular/router';
import { LoadingController,AlertController } from '@ionic/angular';
import * as moment from 'moment';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';
import { Router } from '@angular/router';
import { CallNumber } from '@ionic-native/call-number/ngx';

@Component({
  selector: 'app-sendertravelerdata',
  templateUrl: './sendertravelerdata.component.html',
  styleUrls: ['./sendertravelerdata.component.scss'],
})
export class SendertravelerdataComponent implements OnInit {
  @Input('itemsData') itemsData?
  @Input('radioselecbtns') radioselecbtns?
  @Input('deleteselecbtns') deleteselecbtns?

  @Input('bottomoptions') bottomoptions?
  @Output() deleteSelectedItemEvent=new EventEmitter(); 
  isSender = false;
  hidden: boolean = false;
  DataStatus: number;
  userid: string;
  typeOfuser: string;
  typeOfuserDataNeed: string;
  todaydate = moment(new Date(), 'YYYY-MM-DD').format("YYYY-MM-DD");
  itemsListData: UserDatabase
  constructor(private itemprovider: ItemProvidersService,
    private commonUictrl: CommonUiControlService,
    public call:CallNumber, public alertCtrl: AlertController,
    public loadingController: LoadingController,private router:Router) {

  }

  ngOnInit() {

  }
  async Deletepopup(Item) {
    const alert = await this.alertCtrl.create({
     header: 'Alert',
      message: "Do you want to Delete?",
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'Delete',
        handler: () => {
          this.DeleteItem(Item)
        }
      }]
    });
  
    await alert.present();
  }


async  DeleteItem(itemid)
  {
  try
  {   
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    this.itemprovider.deleteSelectedItem(itemid).subscribe((data) => {
      console.log(data);
      this.commonUictrl.presentAlert("Success","Deleted successfully",['ok']);
      loading.dismiss();     
      this.deleteSelectedItemEvent.next();
    });
  }
  catch(e)
  {
    console.error(e) 
  }
  }
  


 async deleteSelectedItem(itemid) {
    console.log("deleteThisItem" + itemid);
    this.Deletepopup(itemid);
  }

   viewFullPagewithData(itemData){
    console.log(itemData);
    let navigationExtras: NavigationExtras = {
      state: {
        user: itemData
      }
    };
    this.commonUictrl.navCtrl.navigate(['full-details-ofitems'],navigationExtras);
  }
  reviewPage(itemData){
    console.log(itemData);
    let navigationExtras: NavigationExtras = {
      state: {
        user: itemData
      }
    };
    this.router.navigate(['starratingpageforitem'],navigationExtras);
  }
  deletemyitem(itemData){
    this.showAlertpopupdelete(itemData);
  }
  async showAlertpopupdelete(Item) {
    let ItemID=Item.id;
    const alert = await this.alertCtrl.create({
     header: 'Alert',
      message: "Do you want to Delete?",
      buttons: [{
        text: 'Cancel',
        role: 'cancel',
        cssClass: 'secondary',
        handler: (blah) => {}
      }, {
        text: 'OK',
        handler: () => {
          this.DeleteItemData( ItemID)
        }
      }]
    });
  
    await alert.present();
  }
 

 async DeleteItemData(ItemID)
  {
  try
  {   
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    this.itemprovider.deleteMyItem(ItemID).subscribe((data) => {
      console.log(data);
      this.commonUictrl.presentAlert("Success","Trip Cancel successfully",['ok']);
     // this.getuserData();
      loading.dismiss();   
      this.deleteSelectedItemEvent.next();

    });
  }
  catch(e)
  {
    console.error(e) 
  }
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
  
  

}
