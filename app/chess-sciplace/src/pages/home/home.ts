import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var ChessBoard;  

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
      
  }

  ionViewDidLoad() {
    var board1 = ChessBoard('board1', 'start');
  }

}
