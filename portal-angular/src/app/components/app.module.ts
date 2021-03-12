import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FilmesComponent} from './pages/filmes/filmes.component';
import {CadastroComponent} from './pages/cadastro/cadastro.component';
import {ScheduleComponent} from './pages/schedule/schedule.component';
import {ExtracurricularsComponent} from './pages/extracurriculars/extracurriculars.component';
import {LoginComponent} from './pages/login/login.component';
import {UserDetailsComponent} from './pages/user-details/user-details.component';
import {PageComponent} from './shared/page/page.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { FeedComponent } from './pages/feed/feed.component';
import { ReviewPipe } from './shared/pipes/review.pipe';
import { DatetimePipe } from './shared/pipes/datetime.pipe';

@NgModule({
	declarations: [
		AppComponent,
		HeaderComponent,
		FilmesComponent,
		CadastroComponent,
		ScheduleComponent,
		ExtracurricularsComponent,
		LoginComponent,
		UserDetailsComponent,
		PageComponent,
		FeedComponent,
		ReviewPipe,
		DatetimePipe,
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		HttpClientModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule {
}
