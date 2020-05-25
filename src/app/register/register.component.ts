import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
    registerForm: FormGroup;

  constructor( private router : Router) { }

  ngOnInit(): void { 
    this.registerForm = new FormGroup( {
      UserName : new FormControl('',{validators: Validators.required}),
      Password: new FormControl('',{validators: Validators.required}),
      Email: new FormControl('',{validators: Validators.required}),
      FirstName: new FormControl(''),
      LastName: new FormControl(''),
    });
  }

 goTo_login( ){
   this.router.navigate([""])
   
 }
 onSubmit(){
  console.log(this.registerForm.value)
}


}
