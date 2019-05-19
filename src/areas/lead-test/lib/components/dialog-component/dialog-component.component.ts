import { Component, OnInit ,Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { MatFormFieldControl, MatFormField } from '@angular/material';
export interface SavedPumps {
  Id: number;
  Name: string;
  TankTotalCapacity: number;
  TankRemainedCapacity:number;
  }
@Component({
  selector: 'app-dialog-component',
  templateUrl: './dialog-component.component.html',
  styleUrls: ['./dialog-component.component.scss']
})


export class DialogComponentComponent implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<DialogComponentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: SavedPumps) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}
