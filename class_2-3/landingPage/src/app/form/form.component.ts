import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {

  response: any;
  valid = false;
  error = false;
  price: any;

  setValue(form: NgForm){
    console.log('Calculating form.value.price');
    
    if(form.value.price <= 0){
      this.response = form.value.price
      this.error = true;
    }
    else if(form.value.price >= 500){
      this.response = form.value.price - (form.value.price * 0.1);
      this.valid = true;
    }
    else{
      this.response = form.value.price - (form.value.price * 0.05);
      this.valid = true;
    }
    
  }

  constructor() { }

  ngOnInit(): void {
  }

}
