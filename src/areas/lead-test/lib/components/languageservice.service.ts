import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";

@Injectable({
  providedIn: 'root'
})
export class lang{
  lang:string
}
export class LanguageserviceService {

  observable: Observable<string>;
  observer: Observer<string>;
  mylanguage:string;
  

  constructor() { };

//   laguage(a:string){
//  console.log(a);
//     this.observable = new Observable(Observer=>{
//      // this.observer=Observer
    
//    // function  savelnaguge(a:string){
//       const {next, error} = Observer;
//        let lan=a;
      
      
//     // }
//     // savelnaguge(a);
//  });
 
//  this.observable.subscribe(
//     a=>{console.log(a); },
//     e=>{console.log(e);  }
//           ) ;
//      return this.mylanguage =a;
// }
// private _loading: boolean = false;

// public get loading():string{
//     return this.mylanguage;
// }

// public set loading(isLoading: boolean) {
//     this._loading = isLoading;
//     this.changeBtnTxt();
// }
getlang(){
  return this.mylanguage; 
}
setlang(a:string){
  this.mylanguage=a;
}

}