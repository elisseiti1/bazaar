import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import {CarBrands} from './carBrands';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  brandList: any;
  cars = new FormControl();
  yearProductionList = Array.from(Array(2021).keys()).slice(1900).reverse();
  isChecked = true;
  moneyInput = new FormControl();
  myControl = new FormControl();
  constructor() { }

  ngOnInit(): void {
    console.log(this.yearProductionList);
    this.brandList = CarBrands;
    console.log(this.brandList, 'asdfas');
  }

}
