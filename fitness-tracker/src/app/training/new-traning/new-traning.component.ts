import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercise } from '../exercise.model';
import { NgForm } from '@angular/forms';
import { AngularFirestore } from '@angular/fire/firestore';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-new-traning',
  templateUrl: './new-traning.component.html',
  styleUrls: ['./new-traning.component.css']
})
export class NewTraningComponent implements OnInit {
  @Output() trainingStart = new EventEmitter<void>();
  //create exercises empty array
  exercises: Observable<any>;
  constructor(private trainingService: TrainingService, private db:AngularFirestore) { }

  ngOnInit() {
   // this.exercises = this.trainingService.getAvailableExercises();
   this.exercises = this.db.collection('avalibalExcercise').valueChanges();
  }
  onStartTranining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercise);
  }
}
