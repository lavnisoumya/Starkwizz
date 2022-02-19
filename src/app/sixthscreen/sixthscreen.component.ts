import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-sixthscreen',
  templateUrl: './sixthscreen.component.html',
  styleUrls: ['./sixthscreen.component.css']
})
export class SixthscreenComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  seventh(){
    this.route.navigate(['/thirdscreen']);
  }
  fourth(){
    this.route.navigate(['/parentscreen']);
  }
  teacher(){
    this.route.navigate(['/teacherscreen']);
  }
  tittok(){
    this.route.navigate(['/tiktokscreen']);
  }
}
