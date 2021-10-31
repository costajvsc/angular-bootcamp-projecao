import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment.prod';
import { AngularFirestoreModule, SETTINGS} from '@angular/fire/firestore';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeadListComponent } from './lead-list/lead-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LeadListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
