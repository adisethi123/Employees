import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit {

  empForm: FormGroup;
  submitted: boolean = false;

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.empForm = new FormGroup({
      'name': new FormControl(null, [Validators.required]),
      'age': new FormControl(null, [Validators.required]),
      'salary': new FormControl(null, [Validators.required])
    })
  }

  onSubmit = () => {
    this.submitted = true;
    if (this.empForm.status == "VALID") {
      this.http.post("http://dummy.restapiexample.com/api/v1/create", this.empForm.value).subscribe((res: any) => {
        this.submitted = false;
        if (res.status === "success") {
          this.empForm.reset();
          alert("New employee has been created");
          this.router.navigate(['employees']);
        }
        else {
          console.log("not done")
        }
      });
    }
  }

}
