import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //,encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title="our project";
  color="orange";
  show=undefined;
  theTextInInput='';

  doSomething(){
    alert("this is the message ");
  }

doSomethingforButton(something: string){
  alert(something);
}

getMyValue(event){
  this.theTextInInput=event.srcElement.value;
}

changaColor(selColor){
  this.color=selColor.value;
  selColor.value="";
}

}
