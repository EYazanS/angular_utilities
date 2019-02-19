import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError, of } from 'rxjs';

@Injectable({
	providedIn: 'root'
})
export class JsonApiService {

	constructor(private http: HttpClient) { }

	public fetch(url: string): Observable<any> {
		return this.http.get(this.getBaseUrl() + 'assets/api/' + url);
	}

	public fetchLanguages(): Observable<any> {
		return this.http.get(this.getBaseUrl() + 'assets/api/langs/languages.json');
	}

	public fetchKeys(): Observable<any> {
		return this.http.get(this.getBaseUrl() + 'assets/api/langs/replaceKeys.json');
	}

	private getBaseUrl() {
		return location.protocol + '//' + location.hostname + (location.port ? ':' + location.port : '') + '/';
	}
}
