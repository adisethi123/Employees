import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface empType {
  id: string
  employee_name: string
  employee_salary: string
  employee_age: string
  profile_image: string
}


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {

  empList: empType[];

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit() {
    this.http.get("http://dummy.restapiexample.com/api/v1/employees").subscribe((res: any) => {
      this.empList = res.data;
    });
  }

  deleteEmp = (empid: number) => {
    this.http.delete("http://dummy.restapiexample.com/api/v1/delete/" + empid).subscribe((res: any) => {
      if (res.status === "failed") {
        this.router.navigate(['/delete', empid]);
      }

    });
  }
}
