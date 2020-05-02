import { empType } from './../employee-list/employee-list.component';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['./employee-detail.component.scss']
})
export class EmployeeDetailComponent implements OnInit {

  id: number;
  user: empType;

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

  ngOnInit(): void {

    // this.route.params.subscribe((params: Params) => {
    //   this.id = params['id'];
    // })
    // this.http.get(
    //   'http://dummy.restapiexample.com/api/v1/employee/' + this.id).subscribe((res: any) => {
    //     this.user = res;
    //   }
    //   );
    this.user = {
      id: "1",
      employee_name: "Tiger Nixon",
      employee_salary: "320800",
      employee_age: "61",
      profile_image: ""
    }

  }

}
