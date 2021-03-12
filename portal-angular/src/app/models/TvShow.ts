import {TvProgram} from './TvProgram';

export class TvShow extends TvProgram {
	constructor(
		name = '',
		synopsis = '',
		description = '',
		releaseDate = '',
		language = '',
		image = '',
		isMovie = true,
		public episodeCount = -1
	) {
		super(name, synopsis, description, releaseDate, language, image, isMovie);
	}
}
