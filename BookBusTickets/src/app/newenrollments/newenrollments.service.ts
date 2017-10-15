import { Injectable } from '@angular/core';
import {Http, Response,  Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {Observable}    from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class NewEnrollmentsService {
  
  private addPassanger = new BehaviorSubject<boolean>(false);
  showDetailsForm = this.addPassanger.asObservable();
  showPassangerForm(value:boolean){
    this.addPassanger.next(value);
  }
}