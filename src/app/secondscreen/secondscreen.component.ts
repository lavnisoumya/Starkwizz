import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-secondscreen',
  templateUrl: './secondscreen.component.html',
  styleUrls: ['./secondscreen.component.css']
})
export class SecondscreenComponent implements OnInit {

 disabled = false;
  constructor(private router:Router) {


   }

  ngOnInit(): void {
  }
   third(){
     this.router.navigate(['/eighthscreen']);
   }
   validate(){
     const ele = document.getElementById("checkbox")! as HTMLInputElement;
       if(ele.checked = true){
         this.disabled = true;
       }else{
         this.disabled=false;
       }
   }

   }
