import { Component } from '@angular/core';
import { Leads } from './models/Leads';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Landing page';

  lead: Leads = {
    name: 'Jão',
  };

  ngOnInit() : void {
      
  }
}
