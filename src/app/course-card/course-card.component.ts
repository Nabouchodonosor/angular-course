import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css']
})
export class CourseCardComponent implements OnInit {

  @Input()
  course:Course;
  @Input()
  cardIndex: number;

  @Output()
  courseSelected = new EventEmitter<Course>();

  constructor() { }

  ngOnInit(): void {
  }

  isImageVisible(){
    return this.course && this.course.iconUrl;
  }

  onCourseViewed(){

    console.log("card component - button clciked....");
    this.courseSelected.emit(this.course);
  }

  cardClasses(): "beginner" | "intermediate" | "advanced"{

    /* if */
    /* if(this.course.category == 'BEGINNER'){
      return 'beginner';
    }
    if(this.course.category == 'INTERMEDIATE'){
      return 'intermediate';
    }
    if(this.course.category == 'ADVANCED'){
      return 'advanced';
    } */

    /* Switch Case */
    switch(this.course.category){
      case 'BEGINNER':return 'beginner';
      case 'INTERMEDIATE':return 'intermediate';
      case 'ADVANCED':return 'advanced';      
    }


    /* This is elvis operator not a good solution here just for learning the syntax */
    /* return this.course.category == 'BEGINNER' ? 'beginner' : this.course.category == 'INTERMEDIATE' ? 'intermediate' : this.course.category == 'ADVANCED' ? 'advanced' : '' */
    
  }

  cardStyle(): { 'text-decoration': string; 'background-image': string; }{
    return {
      'text-decoration':'underline',
      'background-image': 'url(' + this.course.iconUrl + ')'
    };
  }


}
