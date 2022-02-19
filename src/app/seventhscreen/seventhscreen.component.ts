import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-seventhscreen',
  templateUrl: './seventhscreen.component.html',
  styleUrls: ['./seventhscreen.component.css']
})
export class SeventhscreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
 eighthscreen(){
   this.router.navigate(['/fivescreen']);
 }
}
