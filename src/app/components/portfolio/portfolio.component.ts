import { Component, OnInit } from '@angular/core';
import { TestimonialsService } from 'src/app/services/testimonials.service';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {

  constructor( private testmonialService:TestimonialsService ) { }
  subscriber;
  persons;
  personsCount;
  ngOnInit(): void {
    this.subscriber = this.testmonialService.getPersons()
      .subscribe((responce)=>{
        this.persons = responce['data'];
        this.personsCount = responce['per_page'];
      })
  }

}
