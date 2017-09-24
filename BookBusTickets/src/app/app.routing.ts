import { NgModule }             from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';
import { AuthGuard } from './_guards/index';

import { WebHomeComponent }  from './webhome/webhome.component';
import { AssessmentsComponent }  from './assessments/assessments.component';
import { NewEnrollmentsComponent }  from './newenrollments/newenrollments.component';
import { PaymentComponent } from './payment/payment.component';
import { DashboardComponent }  from './Dashboard.component';
import { PageNotFoundComponent } from './PageNotFound.component';

const routes: Routes = [
    {path: 'Dashboard', component: DashboardComponent, canActivate: [AuthGuard],
     children: [
                  { path: 'assessments', component: AssessmentsComponent,},
                  { path: 'webhome', component: WebHomeComponent },
                  { path: 'newenrollments', component: NewEnrollmentsComponent },
                  { path: 'newenrollments/:person1/:person2', component: NewEnrollmentsComponent },
                  { path: 'newenrollments/:person', component: NewEnrollmentsComponent },
                  { path: 'payment', component: PaymentComponent },
                  {path: '', redirectTo: 'assessments', pathMatch: 'full' },
               ]
     },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path: '404', component: PageNotFoundComponent },
    { path: '', redirectTo: 'login',  pathMatch: 'full' },
    { path: '**', redirectTo: '404', pathMatch: 'full' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
