import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddCollumnComponent } from './add-collumn/add-collumn.component';
import { AddCardComponent } from './add-card/add-card.component';
import { CardComponent } from './card/card.component';
import { CollumnComponent } from './collumn/collumn.component';

import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddCollumnComponent,
    AddCardComponent,
    CardComponent,
    CollumnComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
