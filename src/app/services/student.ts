
import { Injectable } from '@angular/core';
import { Student } from '../models/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  private students: Student[] = [
    {
      id: 1,
      name: 'A',
      course: 'Angular',
      fees: 5000,
      status: 'Active'
    },
    {
      id: 2,
      name: 'B',
      course: 'React',
      fees: 4000,
      status: 'Active'
    },
    {
      id: 3,
      name: 'C',
      course: 'Java',
      fees: 3000,
      status: 'Inactive'
    }
  ];

  getStudents(): Student[] {
    return this.students;
  }

  addStudent(student: Student): void {
    this.students.push(student);
  }

  deleteStudent(id: number): void {
    this.students = this.students.filter(
      student => student.id !== id
    );
  }
}
