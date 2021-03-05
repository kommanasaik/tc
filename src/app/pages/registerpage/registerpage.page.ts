import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,FormControl } from '@angular/forms';
import { AuthserviceService } from 'src/app/providers/authservice.service';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';

@Component({
  selector: 'app-registerpage',
  templateUrl: './registerpage.page.html',
  styleUrls: ['./registerpage.page.scss'],
})
export class RegisterpagePage implements OnInit {
  registerdiv = true;
  private registerForm: FormGroup;
  headerTitle: string;
  phoneno: string;
  emailid: string;
  fullname: string;
  mpin: string;

  constructor(private formBuilder: FormBuilder,
    private authservice: AuthserviceService,
    private commonUictrl: CommonUiControlService) {
      this.validForm();
    
    
  }

  ngOnInit() {
    this.validForm();
  }
  
  validForm(){
    this.registerForm = this.formBuilder.group({
      fullname: ['', Validators.required],
      phone: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],

      emailid: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      mpin: ['', Validators.compose([Validators.required, Validators.minLength(4), Validators.maxLength(4)])],
      

    });
  }
  registervalidation() {
    if (!this.registerForm.valid)
      this.commonUictrl.presentAlert("Alert", "Please enter all required fields");
    else
      this.SubmitDetails();
  }
  async SubmitDetails() {
    const loading = await this.commonUictrl.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    this.phoneno = this.registerForm.value.phone;
    this.fullname = this.registerForm.value.fullname;
    this.emailid = this.registerForm.value.emailid;
    this.mpin = this.registerForm.value.mpin;

    let today = new Date().toLocaleDateString()
  let stringObject = {
      "name": this.fullname,
      "email": this.emailid,
      "mobile": this.phoneno,
      "created": today,
      "mpin":this.mpin
    }

    this.authservice.RegistrationUser(stringObject).subscribe((result) => {
      // this.utils.dismissLoading();
      console.log(result);
      if (result) {
        if (result.id > 0) {
          // this.navCtrl.setRoot('LoginPage')
          this.commonUictrl.navCtrl.navigate(['loginpage']);
        }
        else if (result.status == 2) {
          this.commonUictrl.presentAlert("Oops", "Number Already exits")

        }
        else {
          this.commonUictrl.presentAlert("Oops", "Registration Failed, please check details")

        }
      }
      loading.dismiss();
    });
  }
}
