import {TvProgram} from './TvProgram';

export class Movie extends TvProgram {
	constructor(
		name = '',
		synopsis = '',
		description = '',
		releaseDate = '',
		language = '',
		image = '',
		isMovie = true,
		public duration = -1
	) {
		super(name, synopsis, description, releaseDate, language, image, isMovie);
	}
}
