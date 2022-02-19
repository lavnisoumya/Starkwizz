import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-parentscreen',
  templateUrl: './parentscreen.component.html',
  styleUrls: ['./parentscreen.component.css']
})
export class ParentscreenComponent implements OnInit {

  constructor(private approute: Router) { }

  ngOnInit(): void {
  }
   
}
