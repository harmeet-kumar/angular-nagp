import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { Student } from '../Model/student';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  students: BehaviorSubject<Student[]> =  new BehaviorSubject([]);

  constructor(private http: HttpClient) {
    var studentList = JSON.parse(localStorage.getItem('students'));
    if(studentList && studentList.length != 0) {
      this.students.next(studentList);
    } else {
      this.getStudentsFromJSON();
    }
   }// http is initialized in the constructor to get data from json

  
 private getStudentsFromJSON() {
    this.http.get<Student[]>('assets/students.json').subscribe(data => {
      this.students.next(data);
    });
  }
  
  addValue(student: Student) {
    this.students.next([...this.students.getValue(), student]);
    console.log(this.students.getValue());
    return this.students.getValue();
  }

  getStudents()
  {
    return this.students.getValue();
  }
  
}
