import { Component, OnInit , ChangeDetectorRef } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import { ColDef } from 'ag-grid-community';
import { GirdDataService } from '../gird-data.service';
@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  
  constructor(private cdr: ChangeDetectorRef , private girdDataService: GirdDataService) { }

  ngOnInit(): void {
    const user = this.girdDataService.getRowData()
    // console.log(user)
    for (const item of user) {
      this.rowData.push(item);
    }
  }
  //放欄位標題=>headerName，資料內屬性名稱=>field
  //要指定類型給他: ColDef[]
  public columnDefs: ColDef[] = [
    { headerName: 'name', field: 'name' },
    { headerName: 'email', field: 'email' },
    { headerName: 'pwd', field: 'pwd' },
  ]

  rowData = [
    //放數據
    { name: '華安', email: 'test1@gmail.com', pwd: '123456' },
    { name: '秋香', email: 'test2@gmail.com', pwd: '654321' },
  ]

}
