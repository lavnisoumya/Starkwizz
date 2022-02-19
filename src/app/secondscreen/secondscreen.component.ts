import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-secondscreen',
  templateUrl: './secondscreen.component.html',
  styleUrls: ['./secondscreen.component.css']
})
export class SecondscreenComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
   third(){
     this.router.navigate(['/eighthscreen']);
   }
}
