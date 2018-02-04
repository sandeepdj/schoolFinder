import { Component, OnInit,Inject } from '@angular/core';
import { Router} from "@angular/router";
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

 
  constructor(private router: Router,public dialog: MatDialog) { }

  ngOnInit() {
  }

  loginDialog() {
    this.dialog.open(DialogLogin, {
      width: '512px',
      data: {
        animal: 'panda'
      }
    });
  }
  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

}

@Component({
  selector: 'login-dialog',
  templateUrl: 'login.component.html',
})
export class DialogLogin{
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {}
}