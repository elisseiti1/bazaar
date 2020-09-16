import { Component, OnInit } from '@angular/core';
import {CarBrands} from './carBrands';
import {MatFormField} from '@angular/material/form-field';
import {FormControl} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  brandList: any;
  cars = new FormControl();
  constructor() { }
  ngOnInit(): void {
    console.log(CarBrands);
    this.brandList = CarBrands;
    console.log(this.brandList,"asdfas");
  }

}
