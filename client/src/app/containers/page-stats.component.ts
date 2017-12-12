import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as actions from './../actions/default.actions';
import { State } from 'app/reducers';


@Component({
  selector: 'app-page-stats',
  template: `
    <p>
      page-stats Works!
    </p>
  `,
  styles: []
})
export class PageStatsComponent implements OnInit {

  constructor(private store:Store<State>) { }

  ngOnInit() {
		
		this.store.dispatch(new actions.GetStatsAction());
		
  }

}
