import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl, Validators, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {

  forma = new FormGroup({
    username : new FormControl('',[
      Validators.required,
      Validators.minLength(4)
    ]),
    password : new FormControl('',Validators.required)
  });

  constructor() { }

  username(){
    return this.forma.get("username");
  }

  ngOnInit() {
    
  }

  loginUser(forma:NgForm)
  {
    console.log(forma.value);
  }

}
