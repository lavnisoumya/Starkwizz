import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-eighthscreen',
  templateUrl: './eighthscreen.component.html',
  styleUrls: ['./eighthscreen.component.css']
})
export class EighthscreenComponent implements OnInit {
   disabled = false;
  constructor(private route: Router) { }

  ngOnInit(): void {
  }
 first(){
   this.route.navigate(['/fourthscreen'])
 }
 tiktok(){
   this.route.navigate(['/tiktokscreen'])
 }
 validate(){
   const ele = document.getElementById("checkbox")! as HTMLInputElement;
     if(ele.checked = true){
       this.disabled = true;
     }else{
       this.disabled = false;
     }
 }
}
