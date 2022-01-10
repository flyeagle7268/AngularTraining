import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { CoverageComponent } from './coverage/coverage.component';
import { CoverageDetailsComponent } from './coverage/coverage-details/coverage-details.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AuthComponent } from './auth/auth.component';
import { AuthGuard } from './auth/auth.guard';
import { CoverageEditComponent } from './coverage/coverage-edit/coverage-edit.component';
import { CoverageTypeComponent } from './maintenance/coverage-type/coverage-type.component';
import { CoverageTypeEditComponent } from './maintenance/coverage-type-edit/coverage-type-edit.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'coverage', component: CoverageComponent, canActivate: [AuthGuard]},
  {path: 'coverage/:id', component: CoverageDetailsComponent, canActivate: [AuthGuard]},
  {path: 'coverage/:id/edit', component: CoverageEditComponent, canActivate: [AuthGuard]},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'auth', component: AuthComponent},
  {path: 'ctype', component: CoverageTypeComponent, canActivate: [AuthGuard],
  children: [
    { path: ':id', component: CoverageTypeEditComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
