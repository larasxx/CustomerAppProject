import { Component, OnInit } from '@angular/core';
import { Employee } from 'src/app/employee';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {
    employees:any;
    employee = new Employee();
    
    constructor(private dataService:DataService) {}

    ngOnInit(): void {
      this.getEmployeesData();
    }

    getEmployeesData() {
      this.dataService.getData().subscribe(res => {
        console.log(res);
      });

    }


    insertData() {
      this.dataService.insertData(this.employee).subscribe(res => {
        this.getEmployeesData();
      })
  }
}
