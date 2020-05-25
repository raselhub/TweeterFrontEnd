import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{
  
  logInForm : FormGroup;
  constructor(private router : Router) { }

  ngOnInit(){
    this.logInForm = new FormGroup({
      UserName : new FormControl('',{validators: Validators.required}),
      Password: new FormControl('',{validators: Validators.required}),
    });
  }
  gotoRegister(){
    this.router.navigate(['/register'])
  } 

  onSubmit(){
    console.log(this.logInForm.value)
  }


}
