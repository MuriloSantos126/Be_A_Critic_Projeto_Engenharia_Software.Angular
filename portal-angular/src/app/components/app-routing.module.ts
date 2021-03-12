import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {FilmesComponent} from './pages/filmes/filmes.component';
import {CadastroComponent} from './pages/cadastro/cadastro.component';
import {LoginComponent} from './pages/login/login.component';
import {AuthGuardService} from './pages/auth-guard.service';
import {FeedComponent} from './pages/feed/feed.component';

const routes: Routes = [
	{
		path: 'entrar',
		component: LoginComponent
	},
	{
		path: 'filmes',
		canActivate: [AuthGuardService],
		component: FilmesComponent
	},
	{
		path: 'cadastro',
		canActivate: [AuthGuardService],
		component: CadastroComponent
	},
	{
		path: 'feed',
		canActivate: [AuthGuardService],
		component: FeedComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {
}
