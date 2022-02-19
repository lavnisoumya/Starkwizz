import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-firstscreen',
  templateUrl: './firstscreen.component.html',
  styleUrls: ['./firstscreen.component.css']
})
export class FirstscreenComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }
  gotopage(){
    this.router.navigate(['/secondscreen']);
  }
  gotopage2(){
    this.router.navigate(['/seventhscreen']);
  }

}
