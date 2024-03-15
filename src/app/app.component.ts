import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Student {
  name: string;
  age: number;
  department: string;
  totalMarks: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
  imports: [CommonModule, FormsModule]
}) 

export class AppComponent {
  title = 'array-sample';
  
  students: Student[] = [
    {name: 'Anu', age: 24, department: 'MCA', totalMarks: 700},
    {name: 'Manoj', age: 21, department: 'BCA', totalMarks: 650},
    {name: 'Sujith', age: 25, department: 'MBA', totalMarks: 710},
    {name: 'Rahul', age: 24, department: 'MCA', totalMarks: 750},
    {name: 'Krishna', age: 21, department: 'BCA', totalMarks: 610},
    {name: 'Surya', age: 25, department: 'MBA', totalMarks: 725},
    {name: 'Sanker', age: 24, department: 'MCA', totalMarks: 680},
    {name: 'Sandra', age: 21, department: 'BCA', totalMarks: 627},
    {name: 'Athira', age: 25, department: 'MBA', totalMarks: 740},
    {name: 'Joyal', age: 24, department: 'MCA', totalMarks: 728},
    {name: 'Sanuja', age: 21, department: 'BCA', totalMarks: 687},
    {name: 'Kiran', age: 25, department: 'MBA', totalMarks: 790},
    {name: 'Nishad', age: 21, department: 'BCA', totalMarks: 600},
    {name: 'Praveena', age: 25, department: 'MBA', totalMarks: 800}
  ];

  filterMark : number = 0;
  filteredStudents: Student[] = [];

  filterStudents() {
    if (this.filterMark !== null && this.filterMark > 0) {
      this.filteredStudents = this.students.filter(student => student.totalMarks > this.filterMark);
    } else {
      this.filteredStudents = this.students;
    }
  }

  ngOnInit() {
    this.filterStudents();
  }
}




