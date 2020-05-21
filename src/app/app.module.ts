import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import {FormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component'
//mport { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    AuthentificationComponent,
    ListComponent,
    DetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
