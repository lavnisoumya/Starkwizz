import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-splashscreen',
  templateUrl: './splashscreen.component.html',
  styleUrls: ['./splashscreen.component.css']
})
export class SplashscreenComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  setTimeout(() => {
    this.route.navigate(['/secondscreen'])
   }, 3000);
  }

}
