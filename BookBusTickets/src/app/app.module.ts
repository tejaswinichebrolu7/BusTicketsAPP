import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers/index';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { BaseRequestOptions } from '@angular/http';

import { AppComponent }  from './app.component';
import { AppRoutingModule }  from './app.routing';

import { AlertComponent } from './_directives/index';

import { AuthGuard } from './_guards/index';
import { AlertService, AuthenticationService, UserService } from './_services/index';
import { HomeComponent } from './home/index';
import { LoginComponent } from './login/index';
import { RegisterComponent } from './register/index';

import { WebHomeComponent }  from './webhome/webhome.component';
import { AssessmentsComponent }  from './assessments/assessments.component';
import { NewEnrollmentsComponent }  from './newenrollments/newenrollments.component';
import { PaymentComponent } from './payment/payment.component';

import { Person }  from './persons/person';
 
@NgModule({  
    imports: [
        BrowserModule,
        FormsModule, 
		ReactiveFormsModule,
        HttpModule,
        AppRoutingModule 
    ], 
    declarations: [
        AppComponent, 
        AlertComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
		WebHomeComponent,
		AssessmentsComponent,
		NewEnrollmentsComponent,
		PaymentComponent
    ],
    providers: [
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService,

        // providers used to create fake backend
        fakeBackendProvider,
        MockBackend,
        BaseRequestOptions
    ],
    bootstrap: [AppComponent]
})

export class AppModule { }