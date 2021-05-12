import { Component, Input, OnInit } from '@angular/core';
import { LoadingController, ModalController } from '@ionic/angular';
import { CommonUiControlService } from 'src/app/providers/common-ui-control.service';
import { ItemProvidersService } from 'src/app/providers/item-providers.service';

@Component({
  selector: 'app-ratingpagemodel',
  templateUrl: './ratingpagemodel.page.html',
  styleUrls: ['./ratingpagemodel.page.scss'],
})
export class RatingpagemodelPage implements OnInit {
  @Input() username_title: string;
  @Input() userid: string;
  @Input() usertype: string;


  ratingdatas:any
  constructor(public loadingController: LoadingController,
    private itemprovider: ItemProvidersService,
    private commonUictrl: CommonUiControlService,
    public modalController: ModalController) { }

  ngOnInit() {
    this.getUserRating();
  }

  async getUserRating(){
    const loading = await this.loadingController.create({
      message: 'Please wait'
    });
    await loading.present();
    // this.ratingdata
     this.itemprovider.getUserRating(this.usertype,this.userid).subscribe((data=>{
       this.ratingdatas=data;
       console.log("rating data");
       console.log(data);

    loading.dismiss();
     }));
  
  }
  counter(i: number) {
    return new Array(i);
}
parsedata(s){
  s=s.length==0?'0':s;
  return parseInt(s);
}
  dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalController.dismiss({
      'dismissed': true
    });
  }
}
