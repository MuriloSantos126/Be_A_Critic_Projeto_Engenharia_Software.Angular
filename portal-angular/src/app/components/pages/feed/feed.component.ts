import {Component, OnInit} from '@angular/core';
import {BasePortalComponent} from '../../shared/base-portal.component';
import {MoviesList} from '../../shared/MoviesList';
import {AuthToken} from '../../../models/AuthToken';
import {TvProgram} from '../../../models/TvProgram';

@Component({
	selector: 'app-feed',
	templateUrl: './feed.component.html',
	styleUrls: ['./feed.component.scss']
})
export class FeedComponent extends BasePortalComponent implements OnInit {

	constructor() {
		super();
	}

	get movies() {
		return MoviesList.items;
	}

	get moviesWithReviews(): TvProgram[] {
		const movies = [];

		for (const movie of this.movies.sort((a, b) => b.reviewDate - a.reviewDate)) {
			if (movie.review !== 0) {
				movies.push(movie);
			}
		}

		return movies;
	}

	get user() {
		return AuthToken.user;
	}

	get hasReviews(): boolean {
		for (const movie of this.movies) {
			if (movie.review !== 0) {
				return true;
			}
		}

		return false;
	}

	ngOnInit() {
	}
}
