import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { StudentService } from '../shared/services/student.service';
import { MustMatch } from '../shared/validators/must-match.validator';
import { matchKrde } from '../shared/validators/email-match.validator';
import { Student } from '../shared/Model/student';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  registerForm : FormGroup;
  submitted = false;



  constructor(private formBuilder: FormBuilder, private studentService : StudentService) { }


  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
   }, {
       validators: MustMatch('password','confirmPassword')
   });
  }

  get studentForm() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }
    var student = new Student();
    student.firstName = this.registerForm.value.firstName;
    student.lastName = this.registerForm.value.lastName;
    student.email = this.registerForm.value.email;
    student.password = this.registerForm.value.password;
    student.confirmPassword = this.registerForm.value.confirmPassword;

    this.studentService.addValue(student);
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value));
  }
}
