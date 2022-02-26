import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-secondscreen',
  templateUrl: './secondscreen.component.html',
  styleUrls: ['./secondscreen.component.css']
})
export class SecondscreenComponent implements OnInit {

 disabled = false;

  constructor(private router:Router) {


   }

  ngOnInit(): void {

  }
   third(){
     this.router.navigate(['/eighthscreen']);
   }
   validate(){
     const ele = document.getElementById("checkbox")! as HTMLInputElement;
       if(ele.checked = true){
         this.disabled = true;

       }else{
         this.disabled=false;
       }
   }

   showSlides() {
     var slideIndex = 0;
     var i;
     var slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
     var dots = document.getElementsByClassName("dot") as HTMLCollectionOf<HTMLElement>;
     for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";
     }
     slideIndex++;
     if (slideIndex > slides.length) {slideIndex = 1}
     for (i = 0; i < dots.length; i++) {
       dots[i].className = dots[i].className.replace(" active", "");
     }
     slides[slideIndex-1].style.display = "block";
     dots[slideIndex-1].className += " active";
     setTimeout(this.showSlides, 2000); // Change image every 2 seconds
   }

   }
