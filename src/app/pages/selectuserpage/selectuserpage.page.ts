import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {  } from '@ionic/angular'; 
import { CommonUiControlService } from '../../providers/common-ui-control.service';
@Component({
  selector: 'app-selectuserpage',
  templateUrl: './selectuserpage.page.html',
  styleUrls: ['./selectuserpage.page.scss'],
})
export class SelectuserpagePage implements OnInit {
  pagetitle:any;
  constructor(private comnuiCtrl: CommonUiControlService,public router: Router) { 
    this.pagetitle="Select type of user";
  }

  ngOnInit() {
    this.comnuiCtrl.menuCntrl.enable(false);
  }

  async redirectWithUserType(userType) {
    await this.comnuiCtrl.saveTypeOfUser(userType);
  }
  backScreen(){
    // this.router.navigate(['loginpage']);
    this.comnuiCtrl.doLogOut();
  }
}
