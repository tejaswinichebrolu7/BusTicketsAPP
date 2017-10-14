import { Component } from '@angular/core';
import { User } from './_models/index';
import { UserService } from './_services/index';
import { Person }  from './persons/person';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    templateUrl: 'Dashboard.component.html'
})

export class DashboardComponent { 

  currentUser: User;
  model: any = {};
  todaysDate: number = Date.now();

  constructor(private userService: UserService, private router:Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.model.passengername = this.currentUser.firstName;
  }
  
}