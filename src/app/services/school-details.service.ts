import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
@Injectable()
export class SchooDetailsService {

  constructor(private http: HttpClient) { }

  
  schoolDatabyId(schoolId){
    return this.http.get('http://localhost:8080/2018/tsr/api/index.php/schoolById/'+schoolId);
  }
}
