import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-element',
  templateUrl: './element.component.html',
  styleUrls: ['./element.component.css']
})
export class ElementComponent implements OnInit {
  constructor() { }

  hasError = true;
  myMessage = 'this is my message';


  @Input() name: string;
  @Output() public valueToSend = new EventEmitter();


  currentStyles = {
  'font-style': this.hasError ? 'italic' : 'normal',
  color: this.hasError ? 'red' : 'black',
  'font-size': this.hasError ? '24px' : '12px'
  };

  changeMessgae(event){
    this.myMessage = event.srcElement.value;
  }

  // quand je fait enterer affiche moi la value dans le console classique sl
  sendValueToParent(event){
    if (event.key === 'Enter') {
      console.log(event.srcElement.value);
      this.valueToSend.emit(event.srcElement.value);
    }
  }
  // <input (keydown.enter)="onKeydown($event)"> // we can put key name (enter) in input and make it easyer
  // onKeydown(event) {
  //   console.log(event);
  // }
  //<input (keyup.control.1)="onKeydown($event)"> // we can combine the keys ( ctrl + 1)



  ngOnInit(): void {
  }
}
