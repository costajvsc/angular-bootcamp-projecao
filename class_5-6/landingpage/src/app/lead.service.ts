import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Leads } from './models/Leads';

@Injectable({
  providedIn: 'root'
})
export class LeadService {
  alsf!: AngularFirestoreCollection<Leads>;

  constructor(
    private db: AngularFirestore
  ) { this.setLeads(); }

  setLeads(){
    this.alsf = this.db.collection<Leads>('/leads');
  }

}
