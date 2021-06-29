import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  title = "Learning Gives Creativity";

  constructor() { }

  ngOnInit(): void {
  }

  submit(){
    console.log("Hi Welcome");
  }

}
