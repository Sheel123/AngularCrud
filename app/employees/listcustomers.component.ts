import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listcustomers',
  templateUrl: './listcustomers.component.html',
  styleUrls: ['./listcustomers.component.css']
})
export class ListcustomersComponent implements OnInit {
gridApi: any;
gridColumnApi: any;
 rowData: any[];
 columnDefs: any[];
  constructor() {
    this.rowData = [
      {name: 'Everest', email:'xyz@everest.com', location:'United States', product:'Xuber,WebAPI'},
      {name: 'Apollo', email:'123@Apollo.com', location:'United States, UK', product:'XIAP,XLPro'},
      {name: 'AXA', email:'456@AXA.com', location:'UK,Spain', product:'XIAP,Genius'},
      {name: 'Ascot', email:'hfgf@Ascot.com', location:'UK', product:'XIAP,LMM'}
    ];

    this.columnDefs = [
      
    {headerName: 'Name', field: 'name', filter:'agTextColumnFilter'},
    {headerName: 'Email', field: 'email'},
    {headerName: 'Location', field: 'location'},
    {headerName: 'Product', field: 'product'}
      
    ];
   }


  ngOnInit() {
  }

  onbtExport(): void{
  }

  onGridReady(params){
    this.gridApi =params.api;
    this.gridColumnApi = params.columnApi;
  }

}
