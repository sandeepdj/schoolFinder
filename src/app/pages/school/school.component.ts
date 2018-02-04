import { Component, OnInit } from '@angular/core';
import {ActivatedRoute } from '@angular/router';
import { SchooDetailsService } from './../../services/school-details.service';
import { MapsAPILoader, AgmMap } from '@agm/core';
 

@Component({
  selector: 'app-school',
  templateUrl: './school.component.html',
  styleUrls: ['./school.component.css']
})
export class SchoolComponent implements OnInit {
  public schoolId: string;
  sdata:any;
  schoolDetails:any;
  sname:any;
  lat:number;
  lng:number;
  zoom: number = 15;

  // lat: number = 13.0674827;
  // lng: number =77.6326949;

  constructor(private route: ActivatedRoute,private hservice : SchooDetailsService) { }

  ngOnInit() {
    this.schoolId = this.route.snapshot.paramMap.get('schoolId');
    console.log(this.schoolId);
    this.schoolData(this.schoolId );
  }


  schoolData(schoolId){
    this.hservice.schoolDatabyId(schoolId).subscribe(data => {
     console.log(data);   
     this.sdata = data;
     this.schoolDetails =   this.sdata.sdetails;
     console.log(this.schoolDetails)
       this.lat = Number(this.schoolDetails.latitude) ;
      this.lng = Number(this.schoolDetails.longitude) ;


     });
  }

}
