import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FetchDataService } from '../Services/fetch-data.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
	selector: 'app-student-details',
	standalone: true,
	imports: [HttpClientModule],
	providers: [FetchDataService],
	templateUrl: './student-details.component.html',
	styles: ``,
})
export class StudentDetailsComponent implements OnInit {
	ID!: number;
	std: any;

	constructor(
		private readonly route: ActivatedRoute,
		private readonly fetchStudentData: FetchDataService,
	) {
		this.ID = route.snapshot.params['id'];
	}
	ngOnInit(): void {
		this.fetchStudentData.getStudent(this.ID).subscribe({
			next: (data) => {
				this.std = data;
				console.log(this.std);
			},
			error: (err) => console.log(err),
		});
	}
}
