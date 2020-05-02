import { empType } from './../employee-list/employee-list.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.scss']
})
export class UpdateEmployeeComponent implements OnInit {

  empForm: FormGroup;
  submitted: boolean = false
  id: any
  user: empType
  abc: string

  constructor(
    private http: HttpClient,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'salary': new FormControl(null, [Validators.required])
    })

    this.route.params.subscribe((params: Params) => {
      this.id = params['id'];
    })
    // this.http.get(
    //   'http://dummy.restapiexample.com/api/v1/employee/' + this.id,
    //   {
    //     headers : new HttpHeaders({'Cookie' : 'PHPSESSID=c9bf77aef58af630dd91c646770a3b60; ezoadgid_133674=-2; ezoref_133674=; ezoab_133674=mod1; active_template::133674=pub_site.1588399624'})
    //   }
    //   ).subscribe((res: any) => {
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
    this.abc = "aditya"

  }

  onSubmit = () => {
    this.submitted = true;
    if (this.empForm.status == "VALID") {
      this.http.put("http://dummy.restapiexample.com/api/v1/update/" + this.id, this.empForm.value).subscribe((res: any) => {
        this.submitted = false;
        if (res.status === "success") {
          this.empForm.reset();
          alert("employee details have been updated");
          this.router.navigate(['employees']);
        }
        else {
          console.log("not done")
        }
      });
    }
  }

}
