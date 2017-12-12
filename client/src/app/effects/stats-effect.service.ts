import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import * as actions from 'app/actions/default.actions';
import { of } from 'rxjs/observable/of';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';


@Injectable()
export class StatsEffectService {
	
	@Effect() getStats$:Observable<Action> = this.actions$.ofType(actions.GET_STATS)
		.mergeMap(action => {
			return this.http.get('/api/index.php/elanguage/getstats/2')
			.map(data => {
				return new actions.GetStatsActionSuccess(data)
			})
			.catch(() => of(new actions.GetStatsActionFailed()))
		}
	); 
	
	
  constructor(
		private http: Http,
		private actions$: Actions,
		
	) { }
	
}
