import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-persons-dots',
  templateUrl: './carousel-persons-dots.component.html',
  styleUrls: ['./carousel-persons-dots.component.css']
})
export class CarouselPersonsDotsComponent implements OnInit {

  constructor() { }

  indexCarousel

  ngOnInit(): void {
    this.indexCarousel = this.id+1;
  }

  @Input('personID') id;

}
