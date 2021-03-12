import {Component, OnInit} from '@angular/core';
import {BasePortalComponent} from '../../shared/base-portal.component';
import {Extracurricular} from '../../../models/Extracurricular';
import {MoviesList} from '../../shared/MoviesList';
import {AuthToken} from '../../../models/AuthToken';
import {TvProgram} from '../../../models/TvProgram';

@Component({
	selector: 'app-filmes',
	templateUrl: './filmes.component.html',
	styleUrls: ['./filmes.component.scss']
})
export class FilmesComponent extends BasePortalComponent implements OnInit {

	constructor() {
		super();

		console.log(MoviesList.items);
	}

	get programas() {
		return MoviesList.items;
	}

	get usuario() {
		return AuthToken.user;
	}

	onReviewChanged(movie: TvProgram) {
		movie.reviewDate = new Date().getTime();
	}

	ngOnInit() {
	}

	getTotalHours(items: Extracurricular[]): number {
		let sum = 0;

		for (const item of items) {
			sum += item.hours;
		}

		return sum;
	}
}
