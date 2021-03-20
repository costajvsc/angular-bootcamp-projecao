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
  verify = false;
  price: any;

  setValue(form: NgForm){
    console.log('Calculating form.value.price');
    
    if(form.value.price <= 0)
      this.response = "Invalid value"
    else if(form.value.price >= 500)
      this.response = form.value.price - (form.value.price * 0.1);
    else
      this.response = form.value.price - (form.value.price * 0.05);
    
    this.verify = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
