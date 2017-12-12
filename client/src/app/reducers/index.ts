import {StoreModule, combineReducers} from '@ngrx/store';
import * as fromRoutes from './routes.reducer';
import * as fromStats from './stats.reducer';


export interface State{
	routes: fromRoutes.State;
	stats: fromStats.State;
}



// const reducer = combineReducers(routes);
const reducer = {
	routes : fromRoutes.reducer,
	stats : fromStats.reducer,
};

export const store = StoreModule.forRoot(reducer);