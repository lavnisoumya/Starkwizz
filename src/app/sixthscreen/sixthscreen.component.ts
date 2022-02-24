import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-sixthscreen',
  templateUrl: './sixthscreen.component.html',
  styleUrls: ['./sixthscreen.component.css']
})
export class SixthscreenComponent implements OnInit {
   isfirstclicked = false;
   issecondclicked = false;
   isthirdclicked = false;
   isfirstdisabled = false;
   isseconddisabled = false;
   isthirddisabled = false;
   isproceeddisabled = true;
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
  one(){
    if (this.isfirstclicked = true) {
      this.issecondclicked = false;
       this.isthirdclicked = false;
       this.isproceeddisabled = false;

    };
  }
    two(){
      if(this.issecondclicked = true){
        this.isfirstclicked = false;
        this.isthirdclicked = false;
         this.isproceeddisabled = false;
      };
    }
      three(){
        if (this.isthirdclicked = true) {
          this.isfirstclicked = false;
          this.issecondclicked = false ;
           this.isproceeddisabled = false;
        };
      }



//  buttonactive(){
  //  var btnContainer = document.getElementById("studentactivebutton")!;

// Get all buttons with class="btn" inside the container
//var btns = btnContainer.getElementsByClassName("button")!;

// Loop through the buttons and add the active class to the current/clicked button
//for (let index = 0; index < btns.length; index++) {
//  var cureent = document.getElementsByClassName("active");
//  cureent[0].className = cureent[0].className.replace("active","");
//  this.className += "active";

//}

//}
}
