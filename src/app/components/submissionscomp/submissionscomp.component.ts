import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-submissionscomp',
  templateUrl: './submissionscomp.component.html',
  styleUrls: ['./submissionscomp.component.css']
})
export class SubmissionscompComponent implements OnInit {

  dateVal :  any = '';
  searchVal : any = "";
  formVal :  any = "";
  statusVal :  any = "";
  exportOptionVal : any = "Map";
  mapList :  any = [];
  mapListOrig : any = [
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "2022-12-06",
      Status : "Uncomplete"

    },
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "2022-12-06",
      Status : "Complete"
      
    },
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "2023-02-06",
      Status : "Needs Review"
      
    }
    ,
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "2023-03-06",
      Status : "Uncomplete"
      
    }
    ,
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "2023-03-06",
      Status : "Uncomplete"
      
    },
    {
      From : "denisgordiyena@gmail.com",
      To : "denisgordiyena@gmail.com",
      DueDate : "2023-03-06",
      Status : "Uncomplete"
      
    }
  ]

  constructor() { }

  ngOnInit(): void {
    let d = new Date();
    let y = d.getFullYear() + "";
    let m = d.getMonth() < 10 ? "0" + d.getMonth() : d.getMonth() + "";
    // this.dateVal = y + "-" +  m + "-" + d.getDate();
    this.mapList = this.mapListOrig;
    // this.filterDateData();
  }

  downLoad(){
    if(this.exportOptionVal == 'Map'){
      alert("Sorry, dowload not available for Map");
    }
    else if(this.exportOptionVal == 'List'){
      var obj = this.mapList;
      let name = "maplistData";
      let text = JSON.stringify(obj);
      const a = document.createElement('a');
      const type = name.split(".").pop();
      a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
      a.download = name;
      a.click();
    }
  }

  searchData(){
    let mapListTemp = [...this.mapListOrig];
    let maptFinalList = mapListTemp;
    if(this.searchVal){
      maptFinalList = mapListTemp.filter((dObj)=> {
        return dObj.Status.toLowerCase().includes(this.searchVal.toLowerCase()) || dObj.From.toLowerCase().includes(this.searchVal.toLowerCase()) || dObj.To.toLowerCase().includes(this.searchVal.toLowerCase()) || dObj.DueDate.toLowerCase().includes(this.searchVal.toLowerCase())
      }
      );
    }
    this.mapList = maptFinalList
  }

  filterData(){
    let mapListTemp = [...this.mapListOrig];
    let maptFinalList = mapListTemp;
    if(this.statusVal){
      maptFinalList = mapListTemp.filter((dObj)=> {
        return dObj.Status == this.statusVal
      }
      );
    }
   
    let maptFinalList2 = maptFinalList;
    if(this.dateVal){
        maptFinalList2 = maptFinalList.filter((dObj)=> {
        return dObj.DueDate == this.dateVal
      }
      );
    }
    this.mapList = maptFinalList2;
  }

  setExportType(type :  any){
    this.exportOptionVal =  type;
  }

}
