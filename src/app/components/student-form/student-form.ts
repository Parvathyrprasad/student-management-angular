
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';

@Component({
  selector: 'app-student-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './student-form.html',
  styleUrl: './student-form.css'
})
export class StudentFormComponent {
  @Output() studentAdded = new EventEmitter<Student>();

  newStudent = {
    name: '',
    course: '',
    fees: 0,
    status: 'Active' as 'Active' | 'Inactive'
  };

  submitStudent(): void {
    if (
      !this.newStudent.name.trim() ||
      !this.newStudent.course.trim() ||
      this.newStudent.fees <= 0
    ) {
      return;
    }

    const student: Student = {
      id: Date.now(),
      name: this.newStudent.name.trim(),
      course: this.newStudent.course,
      fees: this.newStudent.fees,
      status: this.newStudent.status
    };

    this.studentAdded.emit(student);

    this.newStudent = {
      name: '',
      course: '',
      fees: 0,
      status: 'Active'
    };
  }
}
