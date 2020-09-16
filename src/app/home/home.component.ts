import { Component, OnInit } from '@angular/core';
import {CarBrands} from '../cars/carBrands';
import {MatFormField} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  brandList: any;
  cars = new FormControl();
  yearProductionList = Array.from(Array(2021).keys()).slice(1900).reverse();
  isChecked = true;
  moneyInput = new FormControl();
  myControl = new FormControl();


  constructor() { }
  ngOnInit(): void {
    // console.log(CarBrands);

  }

}
