import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class TestServiceService {
  constructor(private http: HttpClient) { }

  getdata(){
    return this.http.get<any>("http://pumpapi.crowdthem.com/api/PumpsAPI/Pumps");
    
  }
  savedata(a:any){
    return this.http.post<any>("http://pumpapi.crowdthem.com/api/PumpsAPI/SavePump",a);
  }

}
