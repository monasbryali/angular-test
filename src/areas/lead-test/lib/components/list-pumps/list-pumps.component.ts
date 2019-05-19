import { Component, OnInit ,Inject} from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { NgProgress } from '@ngx-progressbar/core';

import { DOCUMENT } from '@angular/common';
import{TestServiceService} from '../../test/test-service.service';

import { Observable } from 'rxjs';
///===============================================table=====================
export interface listPumps {
  $id: string;
  Id: number;
  Name: string;
  MacAddress: string;
  MLPS: number;
  TankTotalCapacity: number;
  TankRemainedCapacity:number;
  UserId: string;
  Activities: string;
}

  


@Component({
    selector: 'app-list-pumps',
    templateUrl: './list-pumps.component.html',
    styleUrls: ['./list-pumps.component.scss']
  })
  export class ListPumpsComponent implements OnInit {
    user = {
      name: 'Arthur',
      age: 42
    }     
    LIST_DATA :listPumps[]=[];
    dataSource
     //===============file============
   
    // ==========end file===========

  color = 'primary';
  mode = 'determinate';
  value = 50;
  bufferValue = 75;
//=========================== table==========================
  displayedColumns: string[] = [ '$id','Id',  'Name','MacAddress', 'MLPS', 'TankTotalCapacity', 'TankRemainedCapacity', 'UserId', 'Activities'];

  
    constructor(
      @Inject(DOCUMENT) private document: any,
      private _translateService: TranslateService,
      public ngProgress: NgProgress,
      private  testservice :TestServiceService,

    
    ) { 
      _translateService.setDefaultLang('en');
    }

   
    switchLanguage(language: string) {
      this._translateService.use(language);

    }
         
  
  
  
    ngOnInit() {
      this.ngProgress.start();
      // setTimeout(() => {
      //   this.ngProgress.set(0.1);
      // }, 1000);
      // setTimeout(() => {
      //   this.ngProgress.inc(0.2);
      // }, 2000);
      this.testservice.getdata().subscribe( 
        a=>{   this.ngProgress.done();
          this.LIST_DATA=a.Data; 
           this.dataSource = this.LIST_DATA;
           console.log(a.Data)
         },
      e=>{console.log(e)}
      )
      
    }

  
  }