import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormControl, Validators } from '@angular/forms';
import { User } from '../_models/index';

@Component({
	moduleId: module.id,
  selector: 'payment-form',
  templateUrl: './payment.component.html'
})

export class PaymentComponent{
  paymentForm: FormGroup;
  displayMessage: string;
  cardholdernameControl;
  cardnumberControl;
  monthControl;
  yearControl;
  cvvControl;
  success : boolean = false;
  failed : boolean = false;
  todaysDate: number = Date.now();
  currentUser: User;
  payment:boolean = true;

  constructor(private fb: FormBuilder) {
    /* Declare Reactive Form Group here */
	this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.createForm();
  }
  

    createForm() {
        this.paymentForm = this.fb.group({
            cardholdername: this.fb.control(null,[Validators.required,Validators.pattern("[a-zA-Z][a-zA-Z ]+")]),
            cardnumber : this.fb.control(null,[Validators.required,Validators.pattern("[0-9]+"),
                                                Validators.minLength(16),Validators.maxLength(16)]),
            month : this.fb.control(null,[Validators.pattern("[0-9]+"),
                                                Validators.minLength(2),Validators.maxLength(2)]),
            year : this.fb.control(null,[Validators.pattern("[0-9]+"),
                                                Validators.minLength(4),Validators.maxLength(4)]),
            cvv : this.fb.control(null,[Validators.pattern("[0-9]+"),
                                                Validators.minLength(3),Validators.maxLength(3)])
                            
        });
    this.cardholdernameControl = this.paymentForm.get('cardholdername');
    this.cardnumberControl = this.paymentForm.get('cardnumber');
    this.monthControl = this.paymentForm.get('month');
    this.yearControl = this.paymentForm.get('year');
    this.cvvControl = this.paymentForm.get('cvv');
  }

  submitForm() {
    /* Change the display message on button click / submit form */
    if(this.paymentForm.valid){
        this.success = true;
        this.failed = false;
		this.payment = false;
    }
    if(!this.paymentForm.valid){
        this.success = false;
        this.failed = true;
    }
  }
}