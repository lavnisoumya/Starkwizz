import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
   gotodynamo(){
     this.route.navigate(['/dynamo']);
   }
}
