import { Component, OnInit, ViewChild, AfterViewInit, OnDestroy } from '@angular/core';
import { MatTableDataSource, MatSort, MatPaginator } from '@angular/material';
import { Exercise } from '../exercise.model';
import { TrainingService } from '../training.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-past-traning',
  templateUrl: './past-traning.component.html',
  styleUrls: ['./past-traning.component.css']
})
export class PastTraningComponent implements OnInit,AfterViewInit,OnDestroy {
  displayedColumns = ['date', 'name', 'duration', 'calories', 'state'];
  dataSource = new MatTableDataSource<Exercise>();
  private exChangedSubscription: Subscription;

  @ViewChild(MatSort, { static: false }) sort: MatSort;
  @ViewChild(MatPaginator,{static: false}) paginator: MatPaginator;

  constructor(private trainingService:TrainingService) { }

  ngOnInit() {
   this.exChangedSubscription =  this.trainingService.finishedExercisesChanged.subscribe((rsult: Exercise[]) =>{
      this.dataSource.data = rsult;
    });
     this.trainingService.fetchCompletedOrCancelledExercises();
  }

  ngAfterViewInit(){
    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
  }
  
  doFilter(filterValue: string){
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
  ngOnDestroy(){
    this.exChangedSubscription.unsubscribe();
  }
}
