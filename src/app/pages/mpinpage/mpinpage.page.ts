import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/providers/authservice.service';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';

@Component({
  selector: 'app-mpinpage',
  templateUrl: './mpinpage.page.html',
  styleUrls: ['./mpinpage.page.scss'],
})
export class MpinpagePage implements OnInit {
  private mpinform: FormGroup;
  isForget:boolean=false
  mpinformsave:FormGroup
  constructor(
    private commonUictrl: CommonUiControlService,
    private formBuilder: FormBuilder,
    private authservice: AuthserviceService,
    private navCtrl:Router
  ) { 
    this.mpinform = this.formBuilder.group({
      first: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
      second: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
      third: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
      fourth: ['', Validators.compose([Validators.required, Validators.maxLength(1)])],
    });
    this.mpinformsave = this.formBuilder.group({
      phone: ['', Validators.compose([Validators.required, Validators.maxLength(10)])],
      mpin: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
    });
    
  }

  moveFocus(event, refvatible, rebvatible) {
    if (event.key === "Backspace" || event.keyCode === 8 || event.keyCode === 46)
      rebvatible.setFocus();
    else {
      refvatible.setFocus();
    }
  }

  ngOnInit() {
  }
  
  async MpinUpdation(){
    const loading = await this.commonUictrl.loadingController.create({
      message: 'Please wait'
    });
    this.authservice.updateMpin(this.mpinformsave.value).subscribe((result)=>{
      console.log(result);
      if(loading) loading.dismiss();
     if(result.status>0){
      this.commonUictrl.presentAlert("Alert","mpin updated successfully");
     //   this.commonUictrl.navCtrl.navigate(['selecteditems']);
     this.isForget=false;
     }else{
      this.commonUictrl.presentAlert("Alert","Invalid Mobile No");

     }
    })
  }
 async checkMpin() {
    const loading = await this.commonUictrl.loadingController.create({
      message: 'Please wait'
    });
      var mpin = ''+this.mpinform.value.first + this.mpinform.value.second + this.mpinform.value.third + this.mpinform.value.fourth
await this.commonUictrl.storage.get("mobileno").then((phonenumber)=>{
  this.authservice.checkMpin(phonenumber,mpin).subscribe((result)=>{
    console.log(result);
    if(loading) loading.dismiss();
    if(result.status=='0'){
    this.commonUictrl.presentAlert("Alert","mpin was incorrect!");
    }else{
      this.commonUictrl.navCtrl.navigate(['selectuserpage']);
    }

  })

});

    }

    forgetMPIN(){
     
             this.isForget=true;
    }
    
  

}
