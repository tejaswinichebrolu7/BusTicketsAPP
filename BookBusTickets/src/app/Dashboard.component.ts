import { Component } from '@angular/core';
import { User } from './_models/index';
import { UserService } from './_services/index';
import { Person }  from './persons/person';
import { Router } from '@angular/router';
import { BusesAvailabilityService } from './busesAvailability/busesAvailability.service';

@Component({
    moduleId: module.id,
    templateUrl: 'Dashboard.component.html'
})

export class DashboardComponent { 

  currentUser: User;
  model: any = {};
  todaysDate: number = Date.now();

  constructor(private userService: UserService, private router:Router,private _busesAvailabilityService : BusesAvailabilityService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.model.passengername = this.currentUser.firstName;
  }
  goToHome(){
  	alert("Hello you are about leave this page and going to  Homepage");
  	this._busesAvailabilityService.toggleSearchButton(false);
    this.router.navigate(['Dashboard']);
  }
}