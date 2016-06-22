import { Component, OnInit } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'app-courses',
  templateUrl: 'courses.component.html',
  styleUrls: ['courses.component.css']
})
export class CoursesComponent implements OnInit {

  constructor() {}
  title = "The title of courses page";
  courses = ["Course1", "Course2", "Course3"];
  ngOnInit() {
  }

}
