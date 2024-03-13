import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HouseholdTaskAssignmentComponent } from './household-task-assignment.component';

describe('HouseholdTaskAssignmentComponent', () => {
  let component: HouseholdTaskAssignmentComponent;
  let fixture: ComponentFixture<HouseholdTaskAssignmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HouseholdTaskAssignmentComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HouseholdTaskAssignmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
