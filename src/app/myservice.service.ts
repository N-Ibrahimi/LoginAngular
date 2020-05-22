import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee} from './employe';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

private url = './assets/data.json';
constructor(private http: HttpClient) {} // la varibale http de type HttpClient

getDate(): Observable<Employee[]> {
  return this.http.get<Employee[]>(this.url);
}



}

