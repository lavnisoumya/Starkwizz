import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
@Component({
  selector: 'app-noticescreen',
  templateUrl: './noticescreen.component.html',
  styleUrls: ['./noticescreen.component.css']
})
export class NoticescreenComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }

}
