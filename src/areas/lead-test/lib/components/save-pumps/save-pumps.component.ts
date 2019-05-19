import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {DialogComponentComponent} from '../dialog-component/dialog-component.component';
import { SnackbarComponentComponent } from '../snackbar-component/snackbar-component.component';
import{TestServiceService} from '../../test/test-service.service'
import { validateStyleParams } from '@angular/animations/browser/src/util';
@Component({
    selector: 'app-save-pumps',
    templateUrl: './save-pumps.component.html',
    styleUrls: ['./save-pumps.component.scss']
  })
  export class SavePumpsComponent implements OnInit {
  
    constructor(
      private _snackbar: MatSnackBar,
      public dialog: MatDialog,
      private testservic:TestServiceService
    ) { }

    Id: number;
    Name: string;
    TankTotalCapacity: number;
    TankRemainedCapacity:number;

    
    openDialog(): void {
      const dialogRef = this.dialog.open(DialogComponentComponent, {
        width: '250px',
        data:  { Id:this.Id,Name: this.Name,TankTotalCapacity:this.TankTotalCapacity,TankRemainedCapacity:this.TankRemainedCapacity }
      });
  
      dialogRef.afterClosed().subscribe(result => {
        if(result!=null)
        {
          this.openSnackBar();
        }
        console.log(result);
       this.testservic.savedata(result).subscribe(
         a=>{ console.log(a)},
         e=>{console.log(e) }
       )
        console.log('The dialog was closed');
       
      });
    }

    openSnackBar() {
      this._snackbar.openFromComponent(SnackbarComponentComponent, {
        duration: 2000,
      });
    }
  
    ngOnInit() {
    }
  
  }
