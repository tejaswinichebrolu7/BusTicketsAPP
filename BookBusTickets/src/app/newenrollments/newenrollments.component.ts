import { Component, OnInit,OnDestroy } from '@angular/core';
import { User } from '../_models/index';
import { UserService } from '../_services/index';
import { Router, ActivatedRoute, Params, Data } from '@angular/router';
import { Person }  from '../persons/person';


@Component({
    moduleId: module.id,
    selector: 'newenrollments',
    templateUrl: 'newenrollments.component.html'
})

export class NewEnrollmentsComponent implements OnInit,OnDestroy { 

	persons:Person[] = [];
	
	person:Person;
	model: any = {};
	currentUser: User;
	editable:boolean = false;
	addedPerson:Person;
	todaysDate: number = Date.now();
	deleted:boolean=false;
	
	constructor(private userService: UserService,private route: ActivatedRoute,private router:Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        
	}

	ngOnInit() {
	
	let origin = this.route.snapshot.params['origin'];
	let destination = this.route.snapshot.params['destination'];
	let dateOfJourney = this.route.snapshot.params['dateOfJourney'];
	let dateOfReturn = null;
	if(this.route.snapshot.params['dateOfReturn'] != null){
		dateOfReturn = this.route.snapshot.params['dateOfReturn'];
	}
	let passengerName = this.route.snapshot.params['passengerName'];
	let gender = this.route.snapshot.params['gender'];
	let phone = this.route.snapshot.params['phone'];
	let email = this.route.snapshot.params['email'];

	if(localStorage.getItem('addedPerson') !=null){
		this.addedPerson = JSON.parse(localStorage.getItem('addedPerson'));
		console.log("addedPerson in new enrollments page:"+this.addedPerson.origin);
		this.persons.push(JSON.parse(localStorage.getItem('person')),JSON.parse(localStorage.getItem('addedPerson')));
	}
	else{
	this.persons.push({origin:origin,destination:destination,dateOfJourney:dateOfJourney,dateOfReturn:dateOfReturn,passengerName:passengerName,gender:gender,phone:phone,email:email});	
	}
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
}