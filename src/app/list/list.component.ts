import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../myservice.service';


@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public employes = [];
  constructor(private employeService: MyserviceService) { }

  ngOnInit(): void {
    this.employeService.getDate().subscribe(data => this.employes = data);
    console.log(this.employes);

}
}
