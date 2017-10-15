import { Component, OnInit, Input, ViewChild, ElementRef, AfterViewInit, HostListener, ViewEncapsulation } from '@angular/core';
import { BusesAvailabilityService } from './busesAvailability.service';
import { Router, ActivatedRoute } from '@angular/router';
import {Observable}    from 'rxjs/Observable';
import { Person }  from '../persons/person';
import { NewEnrollmentsService } from '../newenrollments/newenrollments.service';

@Component({
  moduleId: module.id,
  selector : 'buses-availability',
  templateUrl: './busesAvailability.component.html',
  encapsulation: ViewEncapsulation.None  
})

export class BusesAvailability implements OnInit {
  
  @Input() from;
  @Input() to;
  
  buses:any = [];
  passengerDetails;
  loading;
  model;
  selectedBus;
  passengers = [];
  showDetails;
  showDetailsAgain;

  constructor(private _busesAvailabilityService : BusesAvailabilityService, private router: Router, private _newEnrollmentsService: NewEnrollmentsService) { 
    this._newEnrollmentsService.showDetailsForm.subscribe(showDetails => this.showDetails = showDetails);
  }

  ngOnInit() {
    this.model = new Person();
    this.buses = this._busesAvailabilityService.getBusDetails(this.from,this.to);
  }

  bookTicket(bus){
    this.passengerDetails = true;
    this.selectedBus = bus;
  }

  goBack(){
    this._busesAvailabilityService.toggleSearchButton(false);
  }

  onClickSubmit(f) {
    let person = new Person();
    person.passengerName = this.model.passengername;
    person.gender = this.model.gender;
    person.phone = this.model.phone;
    person.email = this.model.email;
    
    this.passengers.push(person);
    console.log("hi passengers", this.passengers);
    this.showDetails = true;
    f.reset(); 
  }

  addAnotherPerson(f){
    let person = new Person();
    person.passengerName = this.model.passengername;
    person.gender = this.model.gender;
    person.phone = this.model.phone;
    person.email = this.model.email;
    
    this.passengers.push(person);
    f.reset();
  }
  
}
