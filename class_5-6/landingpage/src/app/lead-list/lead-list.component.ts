import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Leads } from 'src/app/models/Leads';
import { LeadService } from 'src/app/lead.service';

@Component({
  selector: 'app-lead-list',
  templateUrl: './lead-list.component.html',
  styleUrls: ['./lead-list.component.css']
})
export class LeadListComponent implements OnInit {

  listLeads$!: Observable <Leads[]>;
  constructor(private leadService: LeadService) { }

  ngOnInit(): void {
      this.listLeads$ = this.leadService.alsf.valueChanges();
  }
}
