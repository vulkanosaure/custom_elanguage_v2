import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-menu-header',
  template: `
	<a (click)="onclick('quiz')">yo</a> -
	<a (click)="onclick('insert')">yo</a> -
	<a (click)="onclick('stats')">yo</a>
  `,
  styles: []
})
export class MenuHeaderComponent implements OnInit {

	@Output() navigate:EventEmitter<string> = new EventEmitter();
	
	
  constructor() { }

  ngOnInit() {
	}
	
	onclick(route:string):void
	{
		this.navigate.emit(route);
	}
}
