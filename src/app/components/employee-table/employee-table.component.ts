import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/services/employee.interface';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: 'app-employee-table',
  templateUrl: './employee-table.component.html',
  styleUrls: ['./employee-table.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeTableComponent implements OnInit {
  @Input() deleteEmployee: any;
  @Input() editEmp: any;
  empForm!: FormGroup;
  employees: any = [];
  emp: any = {};
  url = "http://localhost:3000/employees"
  createEmp: boolean = false;
  isEdit: boolean = false;
  submitted: boolean = false;

  constructor(private empService: EmployeeService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private fb: FormBuilder) {
  }

  ngOnInit(): void {
    this.getEmployees();
    this.buildForm();
  }
  buildForm() {
    this.empForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.maxLength(10)]],
      dob: ['', Validators.required],
      doj: ['', Validators.required],
    })
  }
  get f() { return this.empForm.controls; }

  createEmployee() {
    if(!this.empForm.valid) return;
    const empId = this.activatedRoute.snapshot.queryParams['id']

    if(empId) {
      this.editEmployee(empId)
    } else {
      this.submitted = true;
      this.empService.create(this.empForm.value).subscribe();

      this.getEmployees();
      this.createEmp = false;
    }
  }

  showCreateEmp() {
    this.createEmp = !this.createEmp;
    this.router.navigate(['employee'])
  }

  getEmployees() {
    this.empService.get().subscribe(res => {
      this.employees = res;
      this.router.navigate(['employee'])
    });
  }

  delete(id: any) {
    if(confirm('Are you sure!')) {
      this.empService.delete(id).subscribe(res => {
        console.log(res);
      });
    }

    this.getEmployees();
  }

  edit(data: any) {
    this.createEmp = true;
    this.isEdit = true;
    this.emp = data;
    this.empForm.patchValue(data);

    this.router.navigate(['employee'], { queryParams: {
      id: data.id
    }})
  }

  editEmployee(emp: any) {
    emp = this.emp;
    this.empService.edit(emp, this.empForm.value).subscribe(res => {
      this.getEmployees();
    })
    this.empForm.reset();
    this.createEmp = false;
    this.router.navigate(['employee'])
  }

}
