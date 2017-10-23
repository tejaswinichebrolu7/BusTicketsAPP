import { Component, OnInit,OnDestroy, Input, HostListener } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Person }  from '../persons/person';
import { NewEnrollmentsService } from './newenrollments.service';
import { BusesAvailabilityService } from '../busesAvailability/busesAvailability.service';


@Component({
    moduleId: module.id,
    selector: 'newenrollments',
    templateUrl: 'newenrollments.component.html'
})

export class NewEnrollmentsComponent implements OnInit,OnDestroy { 
	
	@Input() passengersList;
	@Input() ticketPrice;
	persons:Person[] = [];
	
	person:Person;
	model: any = {};
	currentUser: User;
	editable:boolean = false;
	addedPerson:Person;
	todaysDate: number = Date.now();
	deletedAllPassengers:boolean=false;
	res = [];
	showDetailsForm;
	amountToBePaidFinally;
	ActualAmountToBePaid;
	discountApplied;

	constructor(private userService: UserService,private route: ActivatedRoute, private router:Router, private _newEnrollmentsService: NewEnrollmentsService, private _busesAvailabilityService : BusesAvailabilityService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this._newEnrollmentsService.showDetailsForm.subscribe(showDetailsForm => this.showDetailsForm = showDetailsForm);
	}

  ngOnInit() {
	this.ActualAmountToBePaid = (this.passengersList.length*this.ticketPrice);
	this.discountApplied = false;
  }

  goToPayments(){
	this.router.navigate(['Dashboard/payment']);
  }

  goToDashboard(){
	this.router.navigate(['Dashboard']);
	this._busesAvailabilityService.toggleSearchButton(false);
  }

  ngOnDestroy(){
	  localStorage.removeItem("addedPerson"); 
	  localStorage.removeItem("person"); 
  }
  
  edit(person){
	 this.editable = true;
	 this.person = person;
  }
  
  onClickSubmit(){
		this.editable = false;
  }
  
  delete(index){
  	this.passengersList.splice(index,1);
	this.deletedAllPassengers = this.passengersList.length == 0 ? true : false;
	this.ActualAmountToBePaid = (this.passengersList.length*this.ticketPrice);
	this.discountApplied = false;
  }

  add(){
  	this._newEnrollmentsService.showPassangerForm(false);
  	this.deletedAllPassengers = false;
  }

  applyDiscount(){
  	this.amountToBePaidFinally = (this.passengersList.length < 4) ? (this.ActualAmountToBePaid*(10-this.passengersList.length)/10) : (this.ActualAmountToBePaid *(.6));
  	this.discountApplied = true;
  }
  
}
