import { Component, OnInit } from '@angular/core';
import { Myservice } from '../myservice.service'

@Component({
  selector: 'app-viewcourse',
  templateUrl: './viewcourse.component.html',
  styleUrls: ['./viewcourse.component.css']
})
export class ViewcourseComponent implements OnInit {

  course: string;
  result:Array<object> = [];
  status:boolean;
  constructor(private api: Myservice) {

    this.status= false;


    this.api.viewCourse().subscribe((response:Array<object>) => {


      this.result = response;
      this.status  = true;
 
    });

  }

  ngOnInit() {
  }

}
