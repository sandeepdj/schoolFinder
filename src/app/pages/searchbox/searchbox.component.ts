import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LivesearchService } from '../../services/livesearch.service';
@Component({
  selector: 'app-searchbox',
  templateUrl: './searchbox.component.html',
  styleUrls: ['./searchbox.component.css']
})
export class SearchboxComponent implements OnInit {
  schools:any;
  schoolList:any;
  districts:any;
  distsList:any;
  constructor(private Live: LivesearchService) { }

  ngOnInit() {
  }

  liveSearch(event){
    var srcText = event.target.value;
    var textLength = srcText.length; 
    if(textLength>=3){
      console.log(srcText);
      this.Live.searchSchools(srcText).subscribe(data => {
         this.schools = data;
         this.schoolList =   this.schools.schools;
         this.distsList =   this.schools.districts;   
       });
    }else{
     this.schoolList ='';
    }
  }

}
