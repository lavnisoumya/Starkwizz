import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-instructionbackend',
  templateUrl: './instructionbackend.component.html',
  styleUrls: ['./instructionbackend.component.css']
})
export class InstructionbackendComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
 dailyqiz01(){
   this.route.navigate(['dailyquiz1']);
 }
}
