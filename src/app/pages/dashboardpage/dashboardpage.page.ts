import { Component, OnInit } from '@angular/core';
import { LoadingController, MenuController } from '@ionic/angular';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-dashboardpage',
  templateUrl: './dashboardpage.page.html',
  styleUrls: ['./dashboardpage.page.scss'],
})
export class DashboardpagePage implements OnInit {
  pagetitle = "Users List";
  hidden: boolean = false;
  DataStatus: number;
  userid: string;
  typeOfuser: string;
  typeOfuserDataNeed: string;
  todaydate = moment(new Date(), 'YYYY-MM-DD').format("YYYY-MM-DD");
  itemsListData: UserDatabase
  selectedData: FormGroup
  itemIds:any;
  openentid:any;
  selectRadio:string="";
  constructor(
    public menu: MenuController,
    private itemprovider: ItemProvidersService,
    private commonUictrl: CommonUiControlService,
    public loadingController: LoadingController,
    private formbuilder: FormBuilder,
    private activatedRoute: ActivatedRoute,
    private router: Router


    ) {
    this.commonUictrl.menuCntrl.enable(true, 'custom');
    if (!this.commonUictrl.menuCntrl.isEnabled) this.commonUictrl.menuCntrl.enable(true);
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
       console.log(this.router.getCurrentNavigation().extras.state.user);
       this.itemIds=this.router.getCurrentNavigation().extras.state.user;
console.log(this.itemIds)
      }
    });
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
    this.openentid="";
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
            this.typeOfuserDataNeed = "Sender";
            break;
          case 'sender':
            this.typeOfuserDataNeed = "Traveler";
            break;
        }

      }
      this.getUsersList();
      loading.dismiss();
    });
  }
  gotoBackPage(){
    this.commonUictrl.navCtrl.navigate(['useradditemslist']);

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
    this.itemprovider.getUsersAllList(this.typeOfuserDataNeed, this.todaydate,this.userid).subscribe(data => {
      console.log(data);
      if (data != null)
      {
        if(data.status==0){
          this.hidden=true;
        }
        else{   
          this.itemsListData = data;
          this.openentid =this.itemsListData[0].userid;
        }
        
      }
       
    });
    loading.dismiss();
  }
  doRefresh(event) {
    this.getuserData();
    event.target.complete();
  }
  async saveSenderDetails() {
    let travelerid,senderids;
    // this.selectedData.value.usertype = this.typeOfuserDataNeed;
    this.selectedData.value.usertype = this.typeOfuser;

    if(this.typeOfuser.toLowerCase()==="traveler"){
      
      this.selectedData.value.senderid = this.openentid;
      this.selectedData.value.travelerid = this.userid;
    }
    else{
      this.selectedData.value.senderid = this.userid;
      this.selectedData.value.travelerid = this.openentid;
    }
    
    console.log(this.selectedData.value);
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    console.log(this.selectedData.value.itemid);
    if (this.selectRadio == "") {

      this.commonUictrl.presentAlert("Alert", "Please select any item", ["ok"]);
      loading.dismiss();
    }
    else {
    this.selectedData.value.itemid=this.itemIds;

      this.itemprovider.saveSelectedItems(this.selectedData.value).subscribe((res) => {
        console.log(res);
        if (res != null) {
          if (res.status == 1) {
           // this.commonUictrl.presentAlert("Success", "Thank you for select the item.", ["ok"]);
            loading.dismiss();
            this.commonUictrl.navCtrl.navigate(['selecteditems']);

          }
        }
      });

    }
  }
  radioGroupChange(event) {
    this.openentid = '' + event.detail.value.userid;
    this.selectRadio='' + event.detail.value.userid;
  }
}
