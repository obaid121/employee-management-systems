import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from './employee.interface';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  url = "http://localhost:3000/employees"
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  get(): Observable<Employee> {
    return this.http.get<Employee>(this.url);
  }

  create(emp: Employee) {
    return this.http.post(this.url, emp);
  }

  delete(id: any) {
    return this.http.delete(this.url+"/"+id);
  }

  edit(id: any, data: any) {
    return this.http.put(this.url+"/"+id.id, data, { headers: this.headers })
  }
}
