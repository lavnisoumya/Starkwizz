import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-fourthscreen',
  templateUrl: './fourthscreen.component.html',
  styleUrls: ['./fourthscreen.component.css']
})
export class FourthscreenComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
fifth(){
  this.route.navigate(['/fivescreen']);
}
seventh(){
  this.route.navigate(['/seventhscreen'])
}
}
