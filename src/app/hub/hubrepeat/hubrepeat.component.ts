import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-hubrepeat',
  templateUrl: './hubrepeat.component.html',
  styleUrls: ['./hubrepeat.component.css']
})
export class HubrepeatComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  hello(){
     this.route.navigate(['/tiktokscreen']);
  }
  offers(){
    this.route.navigate(['/offers']);
  }
}
