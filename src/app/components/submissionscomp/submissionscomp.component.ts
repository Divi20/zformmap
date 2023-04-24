import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissionscomp',
  templateUrl: './submissionscomp.component.html',
  styleUrls: ['./submissionscomp.component.css']
})
export class SubmissionscompComponent implements OnInit {

  dateVal :  any = new Date();
  searchVal : any = "";
  formVal :  any = "";
  statusVal :  any = "";
  exportOptionVal : any = "Map";

  mapList : any = [
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "6 December",
      Status : "Uncomplete"

    },
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "6 December",
      Status : "Complete"
      
    },
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "6 December",
      Status : "Needs Review"
      
    }
    ,
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "6 December",
      Status : "Uncomplete"
      
    }
    ,
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "6 December",
      Status : "Uncomplete"
      
    },
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "6 December",
      Status : "Uncomplete"
      
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

  setExportType(type :  any){
    this.exportOptionVal =  type;
  }

}
