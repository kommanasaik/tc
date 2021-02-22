import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras } from '@angular/router';


@Component({
  selector: 'app-useradditemslist',
  templateUrl: './useradditemslist.page.html',
  styleUrls: ['./useradditemslist.page.scss'],
})
export class UseradditemslistPage implements OnInit {
  pagetitle = "My Items";
  hidden: boolean = false;
  DataStatus: number;
  userid: string;
  typeOfuser: string;
  typeOfuserDataNeed: string;
  todaydate = moment(new Date(), 'YYYY-MM-DD').format("YYYY-MM-DD");
  itemsListData: UserDatabase
  selectedData: FormGroup
  constructor(
    public menu: MenuController,
    private itemprovider: ItemProvidersService,
    private commonUictrl: CommonUiControlService,
    public loadingController: LoadingController,
    private formbuilder: FormBuilder
  ) { 
    this.commonUictrl.menuCntrl.enable(true, 'custom');
    if (!this.commonUictrl.menuCntrl.isEnabled) this.commonUictrl.menuCntrl.enable(true);
    this.selectedData = this.formbuilder.group({
      usertype: [''],
      senderid: [''],
      travelerid: [''],
      role: ['active'],
      itemid: ['', Validators.compose([Validators.required])],
      datecreated: [moment(new Date()).format("YYYY-MM-DD  h:mm:ss")],
      dateupdated: [moment(new Date()).format("YYYY-MM-DD  h:mm:ss")]

    });
  }

  ngOnInit() {
    this.getuserData();

  }
  async getuserData() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    await this.commonUictrl.getUserId().then((user) => {
      this.userid = user;
    });
    await this.commonUictrl.getTypeOfUser().then((user) => {
      if (user != undefined) {
        this.typeOfuser = user;
        switch (this.typeOfuser.toLowerCase()) {
          case 'traveler':
            this.typeOfuserDataNeed = "sender";
            break;
          case 'sender':
            this.typeOfuserDataNeed = "traveler";
            break;
        }

      }
      this.getMainItemsStatus();
      loading.dismiss();
    });
  }
  async getMainItemsStatus() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    this.itemprovider.getMainItemsStatus(this.typeOfuser, this.todaydate,this.userid).subscribe(data => {
      if (data.status == 1) {
        this.getUsersList();
        loading.dismiss();
      }
      else {
        this.hidden = true;
        loading.dismiss();
      }
    });
  }
  async getUsersList() {
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();

    this.itemprovider.getUsersList(this.typeOfuser, this.todaydate,this.userid).subscribe(data => {
      console.log(data);
      if (data != null)
        this.itemsListData = data;
    });
    loading.dismiss();
  }
  doRefresh(event) {
    this.getuserData();
    event.target.complete();
  }
  radioGroupChange(event) {
    this.selectedData.value.itemid = '' + event.detail.value.id;
  }
  async saveSenderDetails() {
    let itemIds=this.selectedData.value.itemid;
    // const loading = await this.loadingController.create({
    //   message: 'Please wait'
    // });
    // await loading.present();
    if (itemIds == "") {
      this.commonUictrl.presentAlert("Alert", "Please select any item", ["ok"]);
     // loading.dismiss();
    }
    else {
      let navigationExtras: NavigationExtras = {
        state: {
          user: itemIds
        }
      };
      this.commonUictrl.navCtrl.navigate(['dashboardpage'],navigationExtras);
    }
  }

}
