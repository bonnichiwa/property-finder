import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule} from '@angular/http';

import { AppComponent } from './app.component';
import { PfLogoComponent } from './components/pf-logo/pf-logo.component';
import { PfNameComponent } from './components/pf-name/pf-name.component';
import { PfCarouselComponent } from './components/pf-carousel/pf-carousel.component';
import { CounterService } from './services/counter.service';

@NgModule({
  declarations: [
    AppComponent,
    PfLogoComponent,
    PfNameComponent,
    PfCarouselComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule
  ],
  providers: [CounterService],
  bootstrap: [AppComponent]
})
export class AppModule { }
