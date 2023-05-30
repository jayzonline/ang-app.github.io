import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-no-page-found',
  templateUrl: './no-page-found.component.html',
  styleUrls: ['./no-page-found.component.css']
})


export class NoPageFoundComponent implements OnInit  {
  constructor(private Router : Router) {}

  ngOnInit(): void {
    
  }

  goback(){
    this.Router.navigate([''])
  }
}
