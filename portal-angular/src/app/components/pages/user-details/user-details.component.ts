import {Component, OnInit} from '@angular/core';
import {User} from '../../../models/User';
import {BasePortalComponent} from '../../shared/base-portal.component';
import {HttpClient} from '@angular/common/http';

@Component({
	selector: 'app-user-details',
	templateUrl: './user-details.component.html',
	styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent extends BasePortalComponent implements OnInit {

	isRequesting = false;

	requestError: string = null;

	user: User = new User('ALUNO BACANÃO', '123456', 'PROGRAMAÇÃO', 8, 'A');

	constructor(private http: HttpClient) {
		super();
	}

	ngOnInit() {
	}
}
