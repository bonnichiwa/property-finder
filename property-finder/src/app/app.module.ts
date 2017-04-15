import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { PfLogoComponent } from './components/pf-logo/pf-logo.component';
import { PfNameComponent } from './components/pf-name/pf-name.component';

@NgModule({
  declarations: [
    AppComponent,
    PfLogoComponent,
    PfNameComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
