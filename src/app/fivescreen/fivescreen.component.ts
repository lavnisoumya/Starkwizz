import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-fivescreen',
  templateUrl: './fivescreen.component.html',
  styleUrls: ['./fivescreen.component.css']
})
export class FivescreenComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
sixth(){
  this.route.navigate(['/sixthscreen']);
}
}
