import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';

import { ValidationBase } from './../../shared/validation/ValidationsBase';

@Component({
	selector: 'app-forms',
	templateUrl: './forms.component.html',
	styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {

	form: FormGroup;

	constructor(
		private formBuilder: FormBuilder,
		public validator: ValidationBase
	) {
		this.initForm();
	}

	ngOnInit() {
	}

	private initForm() {
		this.form = this.formBuilder.group({
			name: [null, [Validators.minLength(2), Validators.maxLength(15)]],
			desciption: [null, [Validators.minLength(2), Validators.maxLength(250)]],
		});
	}

	public get name(): AbstractControl {
		return this.form.get('name');
	}
}
