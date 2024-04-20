import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FetchDataService } from '../Services/fetch-data.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
	selector: 'app-add-student',
	standalone: true,
	imports: [ReactiveFormsModule, HttpClientModule],
	providers: [FetchDataService],
	templateUrl: './add-student.component.html',
	styles: ``,
})
export class AddStudentComponent {
	constructor(
		private router: Router,
		private fetchDataService: FetchDataService,
	) {}
	checkForm = new FormGroup({
		name: new FormControl('', [Validators.minLength(3), Validators.required]),
		age: new FormControl(null, [Validators.pattern('[0-9]+'), Validators.required]),
		email: new FormControl('', [Validators.email, Validators.required]),
		grade: new FormControl('A+', [Validators.required]),
	});
	checkData() {
		console.log(`name: ${this.nameValid}, age: ${this.ageValid}, email: ${this.emailValid}`);

		if (this.ageValid && this.nameValid && this.emailValid) {
			const std = {
				name: this.checkForm.controls.name.value,
				age: this.checkForm.controls.age.value,
				grade: this.checkForm.controls.grade.value,
				email: this.checkForm.controls.email.value,
			};
			this.fetchDataService.addStudent(std).subscribe();
			this.router.navigate(['/']);
		}
	}

	get ageValid(): boolean {
		return this.checkForm.controls.age.valid;
	}
	get nameValid(): boolean {
		return this.checkForm.controls.name.valid;
	}
	get emailValid(): boolean {
		return this.checkForm.controls.email.valid;
	}
	get gradeValid(): boolean {
		return this.checkForm.controls.grade.valid;
	}
}
