import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactID = 0;
  contactName: any;
  contactEmail: any;
  contactPhone: any;
  added = false;
  contacts=[] as any;

  add() {
      console.log(`Adding user ${this.contactName} |  ${this.contactEmail} | ${this.contactPhone}`);
      this.added = true;
      this.contacts.push({
        "id": ++this.contactID,
        "name": this.contactName,
        "email": this.contactEmail,
        "phone": this.contactPhone
      });

      console.log(this.contacts)
  }

  constructor() { }

  ngOnInit(): void {
  }

}
