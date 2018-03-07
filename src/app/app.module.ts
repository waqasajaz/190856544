import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    AppRoutingModule.components,
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    SharedModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyAk4W8bqg3qr_TpELwXO009xosd516bGPU'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
