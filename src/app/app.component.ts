import { Component } from '@angular/core';
import {COURSES} from '../db-data';
import { Course } from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  //brings in the whole array of courses
  courses = COURSES;

  title = COURSES[0].description;

  // startDate = new Date(2000, 0, 1);

  // price = 9.994536;

  // rate = 0.67;

  course = COURSES[0];

  //assigned to id:1 from file db-data.ts// 
  // coreCourse = COURSES[0];

  // rxjsCourse = COURSES[1];

  // ngrxCourse = COURSES[2];

  //course:Course is the value that got emitted EventEmitter
  onCourseSelected(course:Course){
    console.log("App component - click event bubbled...", course);
  }


}
