import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class Myservice {

  constructor(private client:HttpClient) {
   

   }


  addCourse(data) {

    return this.client.post("https://dummyapilist.herokuapp.com/addcourse",data)


  }

  viewCourse() {


    return this.client.get("https://dummyapilist.herokuapp.com/getcourses")

  }
}
