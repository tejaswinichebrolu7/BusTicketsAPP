import { Component, OnInit,OnDestroy, Input } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Person }  from '../persons/person';
import { NewEnrollmentsService } from './newenrollments.service';


@Component({
    moduleId: module.id,
    selector: 'newenrollments',
    templateUrl: 'newenrollments.component.html'
})

export class NewEnrollmentsComponent implements OnInit,OnDestroy { 
	
	@Input() passengersList;
	persons:Person[] = [];
	
	person:Person;
	model: any = {};
	currentUser: User;
	editable:boolean = false;
	addedPerson:Person;
	todaysDate: number = Date.now();
	deleted:boolean=false;
	res = [];
	showDetailsForm;

	constructor(private userService: UserService,private route: ActivatedRoute, private router:Router, private _newEnrollmentsService: NewEnrollmentsService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        this._newEnrollmentsService.showDetailsForm.subscribe(showDetailsForm => this.showDetailsForm = showDetailsForm);
	}

	ngOnInit() {
  }

  goToPayments(){
	this.router.navigate(['Dashboard/payment']);
  }

  goToDashboard(){
	this.router.navigate(['Dashboard']);
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
  
  delete(person){
	  let allPersons = this.persons;
	  for(let i=0;i<allPersons.length;i++){
		  if(allPersons[i].passengerName == person.passengerName){
				if(this.persons.length == 1){
					this.deleted=true;
					// this.router.navigate(['/assessments']);
				}
			  allPersons.splice(i,1);
		  } 
	  }
  }

  add(){
  	this._newEnrollmentsService.showPassangerForm(false);
  }
}
