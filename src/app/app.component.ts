import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title : string = "My App";
  name : string = "sreejith";
  visible:boolean = true;
  course:"Mean";

  constructor() {


    setTimeout(()=>{

      this.visible = !this.visible;
    },10);
  }
   
  change() {

    

  }

}
