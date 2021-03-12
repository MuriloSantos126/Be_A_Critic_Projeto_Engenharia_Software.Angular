import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthToken} from '../../../models/AuthToken';
import {ActivatedRoute, Router} from '@angular/router';
import {BasePortalComponent} from '../../shared/base-portal.component';
import {TvProgram} from '../../../models/TvProgram';
import {Movie} from '../../../models/Movie';
import {TvShow} from '../../../models/TvShow';
import {MoviesList} from '../../shared/MoviesList';

@Component({
	selector: 'app-cadastro',
	templateUrl: './cadastro.component.html',
	styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent extends BasePortalComponent implements OnInit {

	isRequesting = false;

	errors: string[] = [];

	name = '';
	synopsis = '';
	description = '';
	releaseDate = '';
	duration = -1;
	episodeCount = -1;
	language = '';
	image = '';
	isMovie = true;

	constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
		super();
	}

	ngOnInit() {

	}

	getErrors(errors: string[]): string {
		const errorsText = '';
		for (const error of errors) {
			errorsText.concat('* ' + error + '\n');
		}

		return errorsText;
	}

	onRegisterClick() {
		this.errors = [];

		if (
			this.name.length === 0
			|| this.synopsis.length === 0
			|| this.description.length === 0
			|| this.releaseDate.length === 0
			|| this.language.length === 0
			|| (this.isMovie && this.duration === -1)
			|| (!this.isMovie && this.episodeCount === -1)
		) {
			this.errors.push('Preencha todos os campos.');
			return;
		}

		let program: TvProgram = null;

		if (this.isMovie) {
			program = new Movie(
				this.name,
				this.synopsis,
				this.description,
				this.releaseDate,
				this.language,
				this.image,
				this.isMovie,
				this.duration
			);
		} else {
			program = new TvShow(
				this.name,
				this.synopsis,
				this.description,
				this.releaseDate,
				this.language,
				this.image,
				this.isMovie,
				this.episodeCount
			);
		}

		MoviesList.items.push(program);

		this.router.navigate(['/filmes'], {
			relativeTo: this.route
		});
	}
}
