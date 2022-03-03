import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-showcase',
  templateUrl: './showcase.component.html',
  styleUrls: ['./showcase.component.css']
})
export class ShowcaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  openNav() {
   document.getElementById("mySidenav")!.style.width = "250px";
 }
 closeNav() {
  document.getElementById("mySidenav")!.style.width = "0";
}
playpause(){

  // console.log(videos);


  const videos = document.querySelectorAll('video')!;

       for (const video of videos) {
         video.play();
        
       }
}

}
