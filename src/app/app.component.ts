import { Component, ViewEncapsulation } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  //,encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  constructor(private router: Router) {

  }

  title =  'our project';
  color =  'orange ';
  show = undefined;
  theTextInInput = '';
  theID = '';

  doSomething(){
    alert( 'this is the message');
  }

doSomethingforButton(something: string){
  alert(something);
}

getMyValue(event) {
  this.theTextInInput = event.srcElement.value;
}

changaColor(selColor){
  this.color = selColor.value;
  selColor.value =  '';
}

// nvigate take un array this.router.navigate(['/', 'list','detailes']);
navaigateTO(to: string) {
  //this.router.navigateByUrl(to);
  this.router.navigate([ to , this.theID]);
}
}
