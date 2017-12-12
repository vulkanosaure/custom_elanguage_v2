import * as actionTypes from 'app/actions/default.actions';
import { Action } from '@ngrx/store';
import { Actions } from 'app/actions/default.actions';


export type State = string;

const initialState:State = "";


export function reducer(state = initialState, action: Actions){
	
  switch (action.type) {
    case actionTypes.NAVIGATE:
      return action.route;
    default:
      return state;
  }
};
