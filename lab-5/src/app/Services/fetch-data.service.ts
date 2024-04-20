import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
	providedIn: 'root',
})
export class FetchDataService {
	private readonly URL: string = 'http://localhost:3000/students';

	constructor(private readonly http: HttpClient) {}

	getAllStudents() {
		return this.http.get(this.URL);
	}

	getStudent(ID: number) {
		return this.http.get(`${this.URL}/${ID}`);
	}

	addStudent(std: unknown) {
		return this.http.post(this.URL, std);
	}
}
