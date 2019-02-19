import { Injectable, ApplicationRef } from '@angular/core';
import { BehaviorSubject, Subject, Observable } from 'rxjs';

import { languages } from './languages.model';
import { JsonApiService } from '../services/json-api.service';


@Injectable()
export class I18nService {
	public state;

	public validationState: BehaviorSubject<any>;

	public data: {};

	public validationData: {};

	public currentLanguage: any;

	constructor(private jsonApiService: JsonApiService, private ref: ApplicationRef) {
		this.state = new Subject();
		this.validationState = new BehaviorSubject<any>({});
		this.initLanguage(localStorage.getItem('locale') || 'en');
		this.fetch(this.currentLanguage.key);
	}

	setLanguage(language) {
		this.currentLanguage = language;
		this.fetch(language.key);
	}

	subscribe(sub: any, err: any) {
		return this.state.subscribe(sub, err);
	}

	// Last Change
	public getTranslationAsync(phrase: string): Observable<string> {
		return this.state.map(res => res[phrase]);
	}

	public getTranslation(phrase: string): string {
		return this.data && this.data[phrase] ? this.data[phrase] : phrase;
	}

	private fetch(locale: any) {
		this.jsonApiService.fetch(`/langs/${locale}/text.json`)
			.subscribe((data: any) => {
				localStorage.setItem('locale', locale);
				this.data = data;
				this.state.next(data);
			}, err => { }, () => {
				this.jsonApiService.fetch(`/langs/${locale}/validation.json`)
					.subscribe((data: any) => {
						localStorage.setItem('locale', locale);
						this.validationData = data;
						this.validationState.next(data);
						this.ref.tick();
					});
			});
	}

	private initLanguage(locale: string) {
		const language = languages.find((it) => {
			return it.key === locale;
		});
		if (language) {
			this.currentLanguage = language;
		} else {
			throw new Error(`Incorrect locale used for I18nService: ${locale}`);
		}
	}
}
