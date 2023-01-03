import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/services/employee.service';

@Component({
  selector: '[employee-rows]',
  templateUrl: './employee-rows.component.html',
  styleUrls: ['./employee-rows.component.scss']
})
export class EmployeeRowsComponent implements OnInit, AfterViewInit, OnChanges {
  @Input() employees: any = [];
  @Output() deleteEmployee = new EventEmitter();
  @Output() editEmployee = new EventEmitter();
  empId: any;

  constructor(private empService: EmployeeService,  private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(res => {
      this.empId = res['id'];
      console.log(this.empId,   res);
    })
  }
  ngAfterViewInit(): void {
    console.log(this.employees);
  }
  ngOnChanges(simple: SimpleChanges) {
    console.log(simple);
  }

  delete(id: any) {
    // this.empService.delete(id).subscribe(res => {
    //   console.log(res);
    // });
    this.deleteEmployee.emit(id);
  }
  edit(id: any) {
    this.editEmployee.emit(id);
  }

}
