import * as  moment from 'moment';
import { Injectable } from '@angular/core';
import { FormGroup, AbstractControl } from '@angular/forms';

import { I18nService } from '../i18n/i18n.service';
import { JsonApiService } from '../services/json-api.service';

@Injectable({
	providedIn: 'root'
})
export class ValidationBase {
	private validations;
	private repalceKeys;

	constructor(private i18n: I18nService, private jsonReaer: JsonApiService) {
		this.i18n.validationState.subscribe(res => this.validations = res);
		this.jsonReaer.fetchKeys().subscribe((res: any) => this.repalceKeys = res);
	}

	public getErrorMessage(field: AbstractControl) {
		let errorMessage = '';

		if (this.hasErrors(field)) {
			const error = Object.keys(field.errors)[0];
			const translation = this.getTranslation(error);
			errorMessage = this.getValues(translation, field, error);
		}

		return errorMessage;
	}

	public hasErrors(field: AbstractControl) {
		return (field.touched && field.dirty) && field.invalid;
	}

	public markFormTouched(formGroup: FormGroup) {
		(Object as any).values(formGroup.controls).forEach((control: AbstractControl) => {
			control.markAsTouched();
			control.markAsDirty();
		});
	}

	public patchForm(form: FormGroup, data: any): FormGroup {
		const keys = Object.keys(form.value);

		for (const key of keys) {
			let value = data[key];

			if (typeof value === 'string' && moment(value).isValid()) {
				value = moment(value);
			}

			if (key != null && value != null) {
				form.get(key).setValue(value);
			}
		}

		return form;
	}

	private getValues(message: string, field: AbstractControl, key: string): string {
		if (this.repalceKeys[key]) {
			const replaceKey: string[] = this.repalceKeys[key].split('.');
			let err = field.errors;
			for (const rKey of replaceKey) {
				err = err[rKey];
			}
			return message.replace(`:${key}`, `${err}`);
		} else {
			return message;
		}
	}

	private getTranslation(key: string): string {
		return this.validations && this.validations[key] ? this.validations[key] : key;
	}
}
