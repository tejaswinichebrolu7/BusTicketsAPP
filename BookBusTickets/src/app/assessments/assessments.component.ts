import { Component, OnInit } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Person }  from '../persons/person';
import { Router } from '@angular/router';
import { BusesAvailabilityService } from '../busesAvailability/busesAvailability.service';

@Component({
    moduleId: module.id,
    selector: 'assessments',
    templateUrl: 'assessments.component.html',
	styleUrls: ['./assessments.component.css']
})

export class AssessmentsComponent implements OnInit {

	currentUser: User;
	model: any = {};
    loading = false;
	add:boolean = false;
	first:boolean = true;
	todaysDate: number = Date.now();
	passengerDetails:boolean = false;
	search:boolean = true;
	searchDetails;
	fromPlace;
	toPlace;
	journeyDate;
	places= ['hyd', 'mdp', 'goa'];

	constructor(private userService: UserService, private router:Router, private _busesAvailabilityService : BusesAvailabilityService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.model.passengername = this.currentUser.firstName;
	}

	ngOnInit() {
		this._busesAvailabilityService.searchDetails.subscribe(searchDetails => this.searchDetails = searchDetails)
	}
	
	addAnotherPerson(){
		this.add = true;
		this.first = false;
	}
	
	onSearch(f){
		this._busesAvailabilityService.toggleSearchButton(true);
		this.search= false;
		this.fromPlace = this.model.fromplace;
		this.toPlace = this.model.toplace;
		this.journeyDate = this.model.fromdate;
		f.reset();
	}
	
	book(){
		this._busesAvailabilityService.toggleSearchButton(true);
		this.passengerDetails=true;
	}


}