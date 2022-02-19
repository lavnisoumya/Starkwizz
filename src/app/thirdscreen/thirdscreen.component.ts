import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-thirdscreen',
  templateUrl: './thirdscreen.component.html',
  styleUrls: ['./thirdscreen.component.css']
})
export class ThirdscreenComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit(): void {
  }
 fourth(){
   this.router.navigate(['/secondscreen']);{

   }
 }
}
