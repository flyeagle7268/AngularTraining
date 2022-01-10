import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicStyleComponent } from './basic-style/basic-style.component';
import { BasicLayoutComponent } from './basic-layout/basic-layout.component';
import { Ibm2ColumnLayoutComponent } from './ibm2-column-layout/ibm2-column-layout.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicStyleComponent,
    BasicLayoutComponent,
    Ibm2ColumnLayoutComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
