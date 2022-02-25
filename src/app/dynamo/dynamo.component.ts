import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-dynamo',
  templateUrl: './dynamo.component.html',
  styleUrls: ['./dynamo.component.css']
})
export class DynamoComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
    gotosubpage(){
      this.route.navigate(['/subscribe'])
    }
}
