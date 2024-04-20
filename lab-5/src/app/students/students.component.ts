import { Component, OnInit } from '@angular/core';
import { FetchDataService } from '../Services/fetch-data.service';
import { HttpClientModule } from '@angular/common/http';
import { OneStudentComponent } from '../one-student/one-student.component';
import { AddBtnComponent } from '../add-btn/add-btn.component';

@Component({
	selector: 'app-students',
	standalone: true,
	imports: [HttpClientModule, OneStudentComponent, AddBtnComponent],
	providers: [FetchDataService],
	templateUrl: './students.component.html',
	styles: ``,
})
export class StudentsComponent implements OnInit {
	students: any;

	constructor(private fetchDataService: FetchDataService) {}
	ngOnInit(): void {
		setInterval(() => {
			this.fetchDataService.getAllStudents().subscribe({
				next: (data) => {
					this.students = data;
				},
				error: (err) => {
					console.log(err);
				},
			});
		}, 1000);
	}
}
