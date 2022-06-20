import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  FormGroupDirective,
  NgForm,
  Validators,
} from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  matcher = new MyErrorStateMatcher();
  form = new FormGroup({
    emailFormControl: new FormControl('', [Validators.required]),
    passwordFormControl: new FormControl('', [Validators.required]),
  });
  email= new FormControl('', [Validators.required, Validators.email])
  password= new FormControl('', [Validators.required])

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,

  ) 
  {
    this.form = this.formBuilder.group({
      email: [''],
      password: [''],
    });
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required]),
    });
  }
  ngOnInit() {}
  loginUser(){}

}


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(
    control: FormControl | null,
    form: FormGroupDirective | NgForm | null
  ): boolean {
    const isSubmitted = form && form.submitted;
    return !!(
      control &&
      control.invalid &&
      (control.dirty || control.touched || isSubmitted)
    );
  }
}
