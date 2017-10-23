import { Injectable } from '@angular/core';
import {Http, Response,  Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import {Observable}    from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()

export class BusesAvailabilityService {

	busesData =  [
					{
						"source": "hyd",
						"destination": "goa",
						"buses": [
									{
									"Duration":"9hr",
									"Operator": "Gunnam Travells",
									"Price": "1600",
									"startTime": "8pm",
									"endTime": "5am"
									},
									{
									"Duration":"10hr",
									"Operator": "Meghana Travells",
									"Price": "1000",
									"startTime": "10pm",
									"endTime": "8am"
									}

								]
					},
					{
						"source": "hyd",
						"destination": "mdp",
						"buses": [
									{
									"Duration":"9hr",
									"Operator": "Goli Travells",
									"Price": "1000",
									"startTime": "9pm",
									"endTime": "6am"
									},
									{
									"Duration":"10hr",
									"Operator": "Vytla Travells",
									"Price": "2500",
									"startTime": "11pm",
									"endTime": "9am"
									},
									{
									"Duration":"7hr",
									"Operator": "Orange Travells",
									"Price": "1200",
									"startTime": "8pm",
									"endTime": "3am"
									},
									{
									"Duration":"8hr",
									"Operator": "Phani Travells",
									"Price": "2700",
									"startTime": "10pm",
									"endTime": "6am"
									}


								]
					}
				];


	
	
	constructor() {
		}
	buses = [];
	
	getBusDetails(from,to){
		this.buses = [];
		this.busesData.forEach(bus => {
			if(bus.source == from && bus.destination == to){
				this.buses = bus.buses;
			}
		});
		return this.buses;
	}

  private searchButton = new BehaviorSubject<boolean>(false);
  searchDetails = this.searchButton.asObservable();
  toggleSearchButton(value:boolean){
    this.searchButton.next(value);
  }
	
}

