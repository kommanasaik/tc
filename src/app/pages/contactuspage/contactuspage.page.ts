import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from '../../providers/item-providers.service';

@Component({
  selector: 'app-contactuspage',
  templateUrl: './contactuspage.page.html',
  styleUrls: ['./contactuspage.page.scss'],
})
export class ContactuspagePage implements OnInit {
  contactForm: FormGroup
  pagetitle="Contact us";
  constructor(public itmprservices: ItemProvidersService,private formBuilder:FormBuilder,private commonUictrl: CommonUiControlService) {
    this.contactForm =this.formBuilder.group({
      name:['', Validators.compose([Validators.required])],
      email:['', Validators.compose([Validators.required])],
      message:['', Validators.compose([Validators.required])]
    })
   }

  ngOnInit() {
  }

  submitForm(){
    console.log(this.contactForm.value);
    if(this.contactForm.valid){
      this.itmprservices.PushContactData(this.contactForm.value.name,this.contactForm.value.email,this.contactForm.value.message).subscribe(data => {
        if(data.status>0){
          this.commonUictrl.presentAlert("Success","Mail has been send successfully.");
          this.contactForm.reset();
        }else{
          this.commonUictrl.presentAlert("Alert","Process failed.");

        }
      });
    }else{
    this.commonUictrl.presentAlert("Alert","Please fill all fields");
    }
  }

}
