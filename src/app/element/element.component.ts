import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  constructor() { }

  @Input() name: string;
  hasError = true;


  currentStyles = {
  'font-style': this.hasError ? 'italic' : 'normal',
  color: this.hasError ? 'red' : 'black',
  'font-size': this.hasError ? '24px' : '12px'
}

  ngOnInit(): void {
  }
}
