import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DropDownDirective } from './shared/dropdown.directive';
import { HomeComponent } from './home/home.component';
import { CoverageComponent } from './coverage/coverage.component';
import { CoverageDetailsComponent } from './coverage/coverage-details/coverage-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { CoverageListComponent } from './coverage/coverage-list/coverage-list.component';
import { AuthComponent } from './auth/auth.component';
import { AuthInterceptorService } from './auth/auth.interceptor.service';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { CoverageEditComponent } from './coverage/coverage-edit/coverage-edit.component';
import { CoverageTypeComponent } from './maintenance/coverage-type/coverage-type.component';
import { CoverageTypeListComponent } from './maintenance/coverage-type-list/coverage-type-list.component';
import { CoverageTypeEditComponent } from './maintenance/coverage-type-edit/coverage-type-edit.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DropDownDirective,
    HomeComponent,
    CoverageComponent,
    CoverageDetailsComponent,
    CoverageEditComponent,
    AboutComponent,
    ContactComponent,
    CoverageListComponent,
    AuthComponent,
    LoadingSpinnerComponent,
    CoverageTypeComponent,
    CoverageTypeEditComponent,
    CoverageTypeListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
