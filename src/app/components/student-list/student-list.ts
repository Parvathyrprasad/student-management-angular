

import {
  Component,
  OnInit,
  DoCheck,
  AfterViewInit,
  OnDestroy
} from '@angular/core';

import { FormsModule } from '@angular/forms';
import { Student } from '../../models/student';
import { StudentService } from '../../services/student';
import { StudentCardComponent } from '../student-card/student-card';

@Component({
  selector: 'app-student-list',
  standalone: true,
  imports: [StudentCardComponent, FormsModule],
  templateUrl: './student-list.html',
  styleUrl: './student-list.css'
})
export class StudentListComponent
  implements OnInit, DoCheck, AfterViewInit, OnDestroy {

  students: Student[] = [];
  searchText = '';
  selectedCourse = 'All';

  constructor(private studentService: StudentService) {}

  ngOnInit(): void {
    this.loadStudents();
    console.log('ngOnInit: Students loaded');
  }

  loadStudents(): void {
    this.students = [...this.studentService.getStudents()];
  }

  get filteredStudents(): Student[] {
    return this.students.filter(student => {
      const matchesName = student.name
        .toLowerCase()
        .includes(this.searchText.toLowerCase());

      const matchesCourse =
        this.selectedCourse === 'All' ||
        student.course === this.selectedCourse;

      return matchesName && matchesCourse;
    });
  }

  deleteStudent(id: number): void {
    this.studentService.deleteStudent(id);
    this.loadStudents();
  }

  ngDoCheck(): void {
    console.log('ngDoCheck: Custom change detection running');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: Student list view initialized');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: Student list component destroyed');
  }
}
