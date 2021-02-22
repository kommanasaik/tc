import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';

@Component({
  selector: 'app-contactuspage',
  templateUrl: './contactuspage.page.html',
  styleUrls: ['./contactuspage.page.scss'],
})
export class ContactuspagePage implements OnInit {
  contactForm: FormGroup
  pagetitle="Contact us";
  constructor(private formBuilder:FormBuilder,private commonUictrl: CommonUiControlService) {
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
    this.commonUictrl.presentAlert("Success","Your request has been submitted");
    }else{
    this.commonUictrl.presentAlert("Alert","Please fill all fields");
    }
  }

}
