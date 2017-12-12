import { Action } from '@ngrx/store';
import { Actions } from 'app/actions/default.actions';
import * as actionTypes from 'app/actions/default.actions';

 
export interface State{
	total_words:number;
	percent_global:number;
	percent_src_dst:number;
	percent_dst_src:number;
	percent_audio_src:number;
}

const initialState:State = {
	total_words:0,
	percent_global:0,
	percent_src_dst:0,
	percent_dst_src:0,
	percent_audio_src:0,
}


export function reducer(state = initialState, action: Actions){
  switch (action.type) {
		case actionTypes.GET_STATS_SUCCESS:
			//get raw stats here, 
			//compute here
			debugger;
			
			console.log("reducer stats success");
			
      return action; 
    default:
      return state;
  }
};
