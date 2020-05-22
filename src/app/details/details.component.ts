import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor(private route: ActivatedRoute) {
    //route.params.subscribe((param) => console.log(param));
    route.params.subscribe( (par) =>  {console.log(par["id"])});
    // you cas addd ?attribut=value in url query params is optionnal
    route.queryParams.subscribe((queryParam) => {
       console.log(queryParam);
      });
  }
  ngOnInit(): void {

  }

}
