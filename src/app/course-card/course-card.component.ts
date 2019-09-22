import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Course } from '../model/course';

//decorator  @Component 
@Component({
  //selector property shows what custom html element 'course-card' belongs to
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
//this file contain TypeScript Class called CourseCardComponent
export class CourseCardComponent implements OnInit {

  //by importing Course from model/course folder we can access everything inside it by calling on "course.{whatever object you want}"
  @Input()
  course:Course;

  @Input()
  cardIndex: number;

  @Output('courseSelected')
  courseEmitter = new EventEmitter<Course>();

  // @Output()
  // courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit() {
  }

  isImageVisible(){
    //image is visible if the course property is defined and the course property has iconUrl property also defined
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(){
    console.log("card component - button clicked ...");

    //emitting an instance of course and "this.course" will pass in the course that got selected
    // this.courseSelected.emit(this.course);
    this.courseEmitter.emit(this.course);

  }

  cardClasses(){
   if (this.course.category == 'BEGINNER'){
     return ['beginner'];
   }
  };

  cardStyles(){
    return {
      // 'text-decoration': 'underline',
      // 'background-image': 'url(' + this.course.iconUrl + ')'

    };
  }

}
