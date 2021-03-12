import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AuthToken} from '../../../models/AuthToken';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html',
	styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

	isRequesting = false;

	errors: string[] = [];

	password = '';
	username = '';

	constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute) {
	}

	ngOnInit() {
		const unauthorized = this.route.snapshot.queryParams['unauthorized'];

		if (unauthorized) {
			this.errors.push('Você não está logado ainda.');
		}
	}

	getErrors(errors: string[]): string {
		const errorsText = '';
		for (const error of errors) {
			errorsText.concat('* ' + error + '\n');
		}

		return errorsText;
	}

	onLoginClick() {
		this.errors = [];

		if (this.username.length === 0 || this.password.length === 0) {
			this.errors.push('Preencha todos os campos.');
			return;
		}

		if (
			(
				this.username !== 'admin'
				&& this.username !== 'user'
			)
			|| (
				this.username === 'admin'
				&& this.password !== 'admin'
			)
			|| (
				this.username === 'user'
				&& this.password !== 'user'
			)
		) {
			this.errors.push('Usuário ou senha inválido.');
			return;
		}

		AuthToken.setToken('Bearer 432j54gh345f45535g43fgh');
		AuthToken.user = this.username;

		this.router.navigate([this.username === 'admin' ? '/filmes' : '/feed'], {
			relativeTo: this.route
		});
	}
}
