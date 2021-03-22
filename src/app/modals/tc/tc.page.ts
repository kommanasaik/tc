import { Component, OnInit } from '@angular/core';
import {ModalController} from '@ionic/angular';
@Component({
  selector: 'app-tc',
  templateUrl: './tc.page.html',
  styleUrls: ['./tc.page.scss'],
})
export class TcPage implements OnInit {

  constructor(public modalCtrl:ModalController) { }

  ngOnInit() {
  } 
  closeModal() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    this.modalCtrl.dismiss({
      'dismissed': true
    });
  }

}
