import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FotoModule } from './foto/foto.module';
import { HttpClientModule } from '@angular/common/http';
import { FotoRegistroComponent } from './foto-registro/foto-registro.component';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './foto/app.routing.module';

@NgModule({
  declarations: [
    AppComponent,
    FotoRegistroComponent,
    
  ],
  imports: [
    BrowserModule,
    FotoModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
