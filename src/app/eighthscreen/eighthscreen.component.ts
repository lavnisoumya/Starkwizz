import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-eighthscreen',
  templateUrl: './eighthscreen.component.html',
  styleUrls: ['./eighthscreen.component.css']
})
export class EighthscreenComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
 first(){
   this.route.navigate(['/fourthscreen'])
 }
 tiktok(){
   this.route.navigate(['/tiktokscreen'])
 }
}
