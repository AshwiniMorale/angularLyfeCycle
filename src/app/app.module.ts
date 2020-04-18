import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { AddServerComponent } from './add-server/add-server.component';
import { BlueprintServerComponent } from './blueprint-server/blueprint-server.component';

@NgModule({
  declarations: [
    AppComponent,
    AddServerComponent,
    BlueprintServerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }