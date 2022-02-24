import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-termsandcondition',
  templateUrl: './termsandcondition.component.html',
  styleUrls: ['./termsandcondition.component.css']
})
export class TermsandconditionComponent implements OnInit {

  constructor(private approute:Router) { }

  ngOnInit(): void {
  }
  gotosecondpage(){
    this.approute.navigate(['/']);
  }

}
