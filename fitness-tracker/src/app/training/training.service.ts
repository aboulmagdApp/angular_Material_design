import { Injectable } from '@angular/core';
import { Subject, } from 'rxjs';
import { Exercise } from './exercise.model';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';



@Injectable()
export class TrainingService {
    exerciseChanged = new Subject<Exercise>();
    exercisesChanged = new Subject<Exercise[]>();
    finishedExercisesChanged = new Subject<Exercise[]>();
    
    private availableExercises: Exercise[] = [];

    private runningExercies: Exercise;
 
    //Empty array
    private exercises: Exercise[] = [];

    constructor(private db: AngularFirestore) {
    }
    fetchAvailableExercises() {
        this.db
            .collection('avalibalExcercise')
            .snapshotChanges()
            .pipe(map(docArry => {
                return docArry.map(doc => {
                    return {
                        id: doc.payload.doc.id,
                        name: doc.payload.doc.data()['name'],
                        duration: doc.payload.doc.data()['duration'],
                        calories: doc.payload.doc.data()['calories']
                    };
                });
            }))
            .subscribe((exercises: Exercise[]) => {
                this.availableExercises = exercises;
                this.exercisesChanged.next([...this.availableExercises]);
            });
    }

    startExercise(selectedId: string) {
        this.runningExercies = this.availableExercises.find(
            ex => ex.id === selectedId
        );
        this.exerciseChanged.next({ ...this.runningExercies });
    }

    completeExercise() {
        this.AddDataToDatabase({
            ...this.runningExercies,
            date: new Date(),
            state: 'completed'
        });
        this.runningExercies = null;
        this.exerciseChanged.next(null);
    }
    cancelExercise(progress: number) {
        this.AddDataToDatabase({
            ...this.runningExercies,
            duration: this.runningExercies.duration * (progress / 100),
            calories: this.runningExercies.duration * (progress / 100),
            date: new Date(),
            state: 'cancelled'
        });
        this.runningExercies = null;
        this.exerciseChanged.next(null);
    }
    getRunningExercise() {
        return { ...this.runningExercies };
    }
    fetchCompletedOrCancelledExercises() {
        this.db.collection('finishedExercies')
                .valueChanges()
                .subscribe((rsult: Exercise[]) =>{
                    this.finishedExercisesChanged.next(rsult);
                });
    }
    private AddDataToDatabase(exercise: Exercise){
        this.db.collection('finishedExercies').add(exercise);
    }
}