import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StudentCardComponent } from './student-card';
import { Student } from '../../models/student';

describe('StudentCardComponent', () => {
  let component: StudentCardComponent;
  let fixture: ComponentFixture<StudentCardComponent>;

  const mockStudent: Student = {
    id: 1,
    name: 'A',
    course: 'Angular',
    fees: 5000,
    status: 'Active'
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentCardComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(StudentCardComponent);
    component = fixture.componentInstance;
    component.student = mockStudent;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});