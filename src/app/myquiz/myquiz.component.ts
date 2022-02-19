import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-myquiz',
  templateUrl: './myquiz.component.html',
  styleUrls: ['./myquiz.component.css']
})
export class MyquizComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  coupn(){
    this.router.navigate(['/coupun']);
  }
  dailyquiz(){
    this.router.navigate(['/dailyquiz']);
  }
}
