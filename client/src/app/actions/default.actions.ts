import { Action } from '@ngrx/store';
import { Response} from '@angular/http';


export const NAVIGATE = 'NAVIGATE';
export const GET_STATS = 'GET_STATS';
export const GET_STATS_SUCCESS = 'GET_STATS_SUCCESS';
export const GET_STATS_FAILED = 'GET_STATS_FAILED';


export class NavigateAction implements Action {
  readonly type = NAVIGATE;
  constructor(public route: string) {}
}

export class GetStatsAction implements Action {
  readonly type = GET_STATS;
}
export class GetStatsActionSuccess implements Action {
  readonly type = GET_STATS_SUCCESS;
  constructor(public payload: Response) {}
}
export class GetStatsActionFailed implements Action {
  readonly type = GET_STATS_FAILED;	
}





export type Actions = 
| NavigateAction
| GetStatsAction
| GetStatsActionSuccess
;