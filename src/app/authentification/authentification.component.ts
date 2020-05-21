import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-authentification',
  templateUrl: './authentification.component.html',
  styleUrls: ['./authentification.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AuthentificationComponent implements OnInit {

  title = 'my name is nasim';
  parentValue = 'i am the parent text';
  textColor = 'text-danger font-weight-bold';
  users = [{
    name: 'nasim',
    age: 32,
    submit: true
  }, {
    name: 'Ali',
    age: 12,
    submit: false
  }
]
messageRecived = '';
  constructor() { }
  ngOnInit(): void {
  }

}
