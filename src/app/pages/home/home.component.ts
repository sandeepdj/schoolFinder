import { Component, OnInit } from '@angular/core';
 import { LivesearchService } from './../../services/livesearch.service';
 import { HttpClient } from '@angular/common/http';
 import { WOW } from 'wowjs/dist/wow.min';
 new WOW().init();

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   constructor(private http: HttpClient) { }

  ngOnInit() {
  }


}
 