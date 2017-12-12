import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/rx';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import * as actions from './actions/default.actions';
import { Actions, Effect } from '@ngrx/effects';
import { Store, Action } from '@ngrx/store'
import { getRoute } from 'app/selectors/routes.selector';
import { State } from 'app/reducers';

@Component({
	selector: 'app-root',
	
	template: 
	`
	{{route | async}}<br />
	<app-menu-header (navigate)="onNavigate2($event)"></app-menu-header>
	<router-outlet></router-outlet>
	`,
	styles:[
		
	],
})
export class AppComponent {
	
	route:Observable<string>;	
	
	
	constructor(
		public store:Store<State>,
		private router:Router,
		private actions$:Actions,
	){
		
		this.route = store.select(getRoute);
		
		this.route.subscribe(($data)=>{
			//debugger;
			this.router.navigate(["/" + $data]);
			
		});
		
		
		//or search bind route to observable...
		/* 
		Observable.interval(1000)
		// .throttleTime(1500)
		.map(data => data * 0.5)
		.map(data => Math.floor(data))
		.distinctUntilChanged()
		.take(8)
		// .filter(value => value != 40)
		.subscribe(data => console.log("sub"+data));
		 */
		 
		 
		/* 
		Observable.of({prop:1}, {prop:2}, {prop:3}, {prop:4}, {prop:5}) 
		.pluck("prop")
		.subscribe(value => console.log("value : "+value));
		
		let obj:any = "yoyo3";
		
		let objtest:any = {prop1:"yo", prop2:2};
		let clonetest = {...objtest, obj};
		clonetest.prop1 = "ya";
		debugger;
		 */
		
	}
	 
	
	
	onNavigate2(route:string){
		console.log("onNavigate2 " + route);
		this.store.dispatch(new actions.NavigateAction(route)); 
	}
	
}
