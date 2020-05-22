import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ElementComponent } from './element/element.component';
import { AuthentificationComponent } from './authentification/authentification.component';
import { FormsModule} from '@angular/forms';
import { ListComponent } from './list/list.component';
import { DetailsComponent } from './details/details.component'
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';

//mport { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    ElementComponent,
    AuthentificationComponent,
    ListComponent,
    DetailsComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
