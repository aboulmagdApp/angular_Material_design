import { Subject } from 'rxjs';
import { Exercise } from './exercise.model';

export class TrainingService {
    exerciseChanged = new Subject<Exercise>();

    private availableExercises: Exercise[] = [{ id: 'crunches', name: 'Crunches', duration: 30, calories: 8 },
    { id: 'touch-toes', name: 'Touch Toes', duration: 180, calories: 15 },
    { id: 'side-lunges', name: 'Side Lunges', duration: 120, calories: 18 },
    { id: 'burpees', name: 'Burpees', duration: 60, calories: 8 }
    ];

    private runningExercies: Exercise;
    //Empty array
    private exercises: Exercise[] = [];

    getAvailableExercises() {
        return this.availableExercises.slice();
    }

    startExercise(selectedId: string) {
        this.runningExercies = this.availableExercises.find(
            ex => ex.id === selectedId
        );
        this.exerciseChanged.next({ ...this.runningExercies });
    }

    completeExercise() {
        this.exercises.push({
            ...this.runningExercies,
            date: new Date(),
            state: 'completed'
        });
        this.runningExercies = null;
        this.exerciseChanged.next(null);
    }
    cancelExercise(progress: number) {
        this.exercises.push({
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
    getCompletedOrCancelledExercises() {
        return this.exercises.slice();
      }
}