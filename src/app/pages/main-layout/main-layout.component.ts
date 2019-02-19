import { Component, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnDestroy {

	mobileQuery: MediaQueryList;

	fillerNav = [
		{ name: 'Index', icon: 'dashboard', path: '/' },
		{ name: 'Forms', icon: 'all_inbox', path: '/forms' }
	];

	private mobileQueryListener: () => void;

	constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
		this.mobileQuery = media.matchMedia('(max-width: 600px)');
		this.mobileQueryListener = () => changeDetectorRef.detectChanges();
		this.mobileQuery.addEventListener('change', this.mobileQueryListener);
	}

	ngOnDestroy(): void {
		this.mobileQuery.removeEventListener('change', this.mobileQueryListener);
	}
}
