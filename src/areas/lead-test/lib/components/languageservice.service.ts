import { Injectable } from '@angular/core';
import { Observable } from "rxjs/Observable";
import { Observer } from "rxjs/Observer";
import { of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class LanguageserviceService {

  observable: Observable<string>;
  observer: Observer<string>;
  mylanguage:string;
  

  constructor() { };

setlang(a:string){

 const myObservable  = of(a);
  const myObserver = {
    next: x => console.log('Observer got a next value: ' + x),
    error: err => console.error('Observer got an error: ' + err),
    complete: () => console.log('Observer got a complete notification'),
  };
  myObservable.subscribe(myObserver);
  return myObservable
}

}