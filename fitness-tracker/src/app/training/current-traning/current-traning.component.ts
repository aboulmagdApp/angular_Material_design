import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';

import { StropTrainingComponent } from './stop-training-component';

@Component({
  selector: 'app-current-traning',
  templateUrl: './current-traning.component.html',
  styleUrls: ['./current-traning.component.css']
})
export class CurrentTraningComponent implements OnInit {
  progress = 0;
  timer:number;

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
   this.timer = setInterval(() =>{
      this.progress += 5;
      if(this.progress >= 100){
        clearInterval(this.timer);
      }
    },1000);
  }

  onStop(){
    clearInterval(this.timer);
    this.dialog.open(StropTrainingComponent);
  }

}
