import { Component } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Person }  from '../persons/person';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'assessments',
    templateUrl: 'assessments.component.html'
})

export class AssessmentsComponent {

	currentUser: User;
	model: any = {};
    loading = false;
	add:boolean = false;
	first:boolean = true;
	todaysDate: number = Date.now();
	passengerDetails:boolean = false;
	searchDetails:boolean = false;
	search:boolean = true;
	

	constructor(private userService: UserService, private router:Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
		this.model.passengername = this.currentUser.firstName;
	}
	
	onClickSubmit() {
        this.loading = true;
		console.log("id is:"+this.model.memberid);
		let person = new Person();
		let addedPerson = new Person();
		person.origin = this.model.fromplace;
		person.destination = this.model.toplace;
		person.dateOfJourney = this.model.fromdate;
		if(this.model.returndate != null){
			person.dateOfReturn = this.model.returndate;
		}
		person.passengerName = this.model.passengername;
		person.gender = this.model.gender;
		person.phone = this.model.phone;
		person.email = this.model.email;
		
		if(this.add == true){
			addedPerson.origin = this.model.fromplaces;
			addedPerson.destination = this.model.toplaces;
			addedPerson.dateOfJourney = this.model.fromdates;
			if(this.model.returndates != null){
				addedPerson.dateOfReturn = this.model.returndates;
			}
			addedPerson.passengerName = this.model.passengernames;
			addedPerson.gender = this.model.genders;
			addedPerson.phone = this.model.phones;
			addedPerson.email = this.model.emails;
			console.log("coming into added");
			localStorage.setItem("addedPerson",JSON.stringify(addedPerson));
			localStorage.setItem('person',JSON.stringify(person));
			if(localStorage.getItem('addedPerson') !=null){
				let addedPerson = JSON.parse(localStorage.getItem('addedPerson'));
				console.log("addedPerson:"+addedPerson.origin);
			}
		this.router.navigate(['/newenrollments',{person,addedPerson}]);
		}
		else{
			this.router.navigate(['/newenrollments',person]);
		}
	}
	
	addAnotherPerson(){
		this.add = true;
		this.first = false;
		console.log("coming into add function");
	}
	
	onSearch(){
		this.searchDetails=true;
		this.search= false;
	}
	
	book(){
		this.searchDetails=false;
		this.passengerDetails=true;
	}
}