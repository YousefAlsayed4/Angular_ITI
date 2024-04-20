import { Routes } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { ErrorComponent } from './error/error.component';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { AddStudentComponent } from './add-student/add-student.component';

export const routes: Routes = [
	{
		path: '',
		redirectTo: 'students',
		pathMatch: 'full',
	},
	{
		path: 'students',
		component: StudentsComponent,
	},
	{
		path: 'students/add',
		component: AddStudentComponent,
	},
	{
		path: 'students/:id',
		component: StudentDetailsComponent,
	},
	{
		path: '**',
		component: ErrorComponent,
	},
];
