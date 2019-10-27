import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTraningComponent } from './past-traning.component';

describe('PastTraningComponent', () => {
  let component: PastTraningComponent;
  let fixture: ComponentFixture<PastTraningComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTraningComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTraningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
