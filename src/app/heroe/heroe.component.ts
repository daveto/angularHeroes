import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
	selector: 'app-heroe',
	templateUrl: './heroe.component.html',
	styleUrls: [ './heroe.component.css' ],
})
export class HeroeComponent implements OnInit {
	// hero = 'Windstorm';
	heroes = HEROES;
	selectedHero: Hero;

	onSelect(hero: Hero): void {
		this.selectedHero = hero;
	}

	hero: Hero = {
		id: 1,
		name: 'Windstorm',
	};

	constructor() {}

	ngOnInit() {}
}
