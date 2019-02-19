import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainLayoutModule } from './pages/main-layout/main-layout.module';
import { MainLayoutComponent } from './pages/main-layout/main-layout.component';

const routes: Routes = [
	{
		path: '', component: MainLayoutComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes, { useHash: true }), MainLayoutModule],
	exports: [RouterModule]
})
export class AppRoutingModule { }
