import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {
  login! : FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.login=new FormGroup({
      'fname':new FormControl("Rock",[Validators.required,Validators.minLength(5)]),
      'lname':new FormControl(null),
      'age': new FormControl(null),
      'address':new FormGroup({
        'street':new FormControl(null),
        'state':new FormControl(null)
      })
    });
  }
  onSubmit(){
    console.log(this.login.value);
  }

}
