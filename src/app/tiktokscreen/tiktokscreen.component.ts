import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tiktokscreen',
  templateUrl: './tiktokscreen.component.html',
  styleUrls: ['./tiktokscreen.component.css']
})
export class TiktokscreenComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav() {
   document.getElementById("mySidenav")!.style.width = "250px";
 }
 closeNav() {
  document.getElementById("mySidenav")!.style.width = "0";
}
}
