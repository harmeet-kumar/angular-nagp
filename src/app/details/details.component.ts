import { Component, OnInit } from '@angular/core';
import { Student } from '../shared/Model/student';
import { StudentService } from '../shared/services/student.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  public students: Student[];

  constructor(public studentService : StudentService) { }


  ngOnInit() {
    this.studentService.students.subscribe(val => {
      this.students = val;
    })
  }

}
