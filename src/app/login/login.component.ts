import { Component, OnInit } from '@angular/core';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Tablet,
      Breakpoints.TabletPortrait,
      Breakpoints.TabletLandscape,
      Breakpoints.WebPortrait,
      Breakpoints.Web,
      Breakpoints.WebLandscape,
      Breakpoints.Handset,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait])
   ;
  }
  ngOnInit(): void {
  }

}
