import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { ElementData } from '../utility/constants';
/*
  this will use mocked data from constants - no http requests
  will still use rxjs - may decide to refactor to Behavior Subject at some point
  or explore more rxjs options
*/

@Injectable({
  providedIn: 'root'
})
export class ChemElementService {

  
  constructor() { }

  getAllElements(){
    return of(ElementData);
  }
}
