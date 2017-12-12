import { store } from './reducers';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {PageQuizComponent} from './containers/page-quiz.component';
import {PageStatsComponent} from './containers/page-stats.component';
import {PageInsertComponent} from './containers/page-insert.component';


import { AppComponent } from './app.component';
import { routing } from 'app/routes/app.routes';
import { Actions, EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { MenuHeaderComponent } from './components/menu-header.component';
import { StatsEffectService } from 'app/effects/stats-effect.service';
import { HttpModule } from '@angular/http';


@NgModule({
  declarations: [
    AppComponent, 
		MenuHeaderComponent,
		PageQuizComponent,
		PageStatsComponent,
		PageInsertComponent,
  ],
  imports: [
		BrowserModule,
		routing,
		store,
		StoreDevtoolsModule.instrument(),
		EffectsModule.forRoot([StatsEffectService]),
		HttpModule,
  ],
  providers: [
		Actions,
	],
  bootstrap: [AppComponent]
})
export class AppModule { }
