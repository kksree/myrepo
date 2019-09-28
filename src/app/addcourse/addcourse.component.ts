import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Myservice } from '../myservice.service'


@Component({
  selector: 'app-addcourse',
  templateUrl: './addcourse.component.html',
  styleUrls: ['./addcourse.component.css']
})
export class AddcourseComponent implements OnInit {


  constructor(private api: Myservice) {



  }
  ngOnInit() {
  }

  read(mydata: NgForm) {

    this.api.addCourse(mydata.value).subscribe((response)=> {

      
      alert("added")

    });


  }

}
