import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-dailyquiz01',
  templateUrl: './dailyquiz01.component.html',
  styleUrls: ['./dailyquiz01.component.css']
})
export class Dailyquiz01Component implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
