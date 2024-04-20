import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
	selector: '[oneStudent]',
	standalone: true,
	imports: [RouterModule],
	templateUrl: './one-student.component.html',
	styles: ``,
})
export class OneStudentComponent {
	@Input() std!: { id: number; name: string; age: number; grade: string; email: string };
}
