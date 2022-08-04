import { Component, OnInit } from "@angular/core";
import { Course } from "./course";

@Component({
    selector: 'app-course-list',
    templateUrl: './course-list.component.html'
})

export class CourseListComponent implements OnInit {
    courses: Course[] = [];

    ngOnInit(): void {
        this.courses = [
            {
                id: 1,
                name: 'Angular: Forms',
                imageUrl: './assets/images/forms.png',
                price: 99.99,
                code: 'XPS-8796',
                duration: 120,
                rating: 5.4,
                releaseDate: 'November, 2, 2022',
                description: ''
            },
            {
                id: 2,
                name: 'Angular: HTTP',
                imageUrl: './assets/images/http.png',
                price: 45.99,
                code: 'GJD-2069',
                duration: 80,
                rating: 4.0,
                releaseDate: 'December, 2, 2022',
                description: ''
            }
        ]
    }

}