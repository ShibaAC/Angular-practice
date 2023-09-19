import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GirdDataService {
  private rowData:any [] = [];
  constructor() { 

  }

  addData(data:any){
    this.rowData.push(data)
  }

  getRowData() {
    // console.log('123')
    return this.rowData;
  }
}
