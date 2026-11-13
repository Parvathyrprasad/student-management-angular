
import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Student } from '../../models/student';
import { CapitalizePipe } from '../../pipes/capitalize-pipe';
import { Highlight } from '../../directives/highlight';
import { CurrencyPipe } from '../../pipes/currency-pipe';

@Component({
  selector: 'app-student-card',
  standalone: true,
  imports: [CapitalizePipe, Highlight, CurrencyPipe],
  templateUrl: './student-card.html',
  styleUrl: './student-card.css'
})
export class StudentCardComponent implements OnChanges {

  @Input() student!: Student;

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Student data changed:', changes);
  }
}
