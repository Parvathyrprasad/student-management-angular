
import { Component, ViewChild } from '@angular/core';
import { Student } from './models/student';
import { StudentService } from './services/student';
import { StudentListComponent } from './components/student-list/student-list';
import { StudentFormComponent } from './components/student-form/student-form';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [StudentListComponent, StudentFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {

  @ViewChild(StudentListComponent)
  studentList!: StudentListComponent;

  constructor(private studentService: StudentService) {}

  addStudent(student: Student): void {
    this.studentService.addStudent(student);
    this.studentList.loadStudents();
    console.log('New student added:', student);
  }
}

