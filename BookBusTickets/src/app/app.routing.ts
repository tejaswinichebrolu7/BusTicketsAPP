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

const routes: Routes = [
    { path: '', component: AssessmentsComponent, canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
	{ path: 'webhome', component: WebHomeComponent },
	{ path: 'assessments', component: AssessmentsComponent },
	{ path: 'newenrollments', component: NewEnrollmentsComponent },
	{ path: 'newenrollments/:person1/:person2', component: NewEnrollmentsComponent },
	//{ path: 'newenrollments/:person', component: NewEnrollmentsComponent },
	{ path: 'payment', component: PaymentComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
