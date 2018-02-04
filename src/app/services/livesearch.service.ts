import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LivesearchService {

  constructor(private http: HttpClient) { }
   

 
  searchSchools(srcText){
    return this.http.get('http://localhost:8080/2018/tsr/api/index.php/liveSearch/'+srcText);
  }

}
