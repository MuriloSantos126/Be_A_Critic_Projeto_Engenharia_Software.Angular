import {Injectable} from '@angular/core';
import {TvProgram} from '../../models/TvProgram';
import {TvShow} from '../../models/TvShow';
import {Movie} from '../../models/Movie';

export class MoviesList {

	public static items: TvProgram[] = [
		new TvShow(
			'Arrow',
			'O mimado playboy bilionário Oliver Queen está desaparecido e é considerado morto quando seu iate é perdido no mar. Ele retorna cinco anos depois, um homem mudado, determinado a limpar a cidade como um vigilante de capuz armado com um arco.',
			'Oliver Queen e seu pai estão perdidos no mar quando seu iate de luxo afunda, aparentemente em uma tempestade. Seu pai morre, mas Oliver sobrevive há cinco anos em uma ilha desconhecida e acaba voltando para casa. Mas ele não estava sozinho na ilha, onde aprendeu não apenas a lutar e sobreviver, mas também a corrupção de seu pai e negócios inescrupulosos. Ele retorna à civilização um homem mudado, determinado a consertar as coisas. Ele se disfarça com o capuz de um dos seus misteriosos mentores da ilha, arma-se com um arco e se põe a caçar os homens e mulheres que corromperam sua cidade.',
			'2018-10-10',
			'Inglês',
			'https://cdn.shopify.com/s/files/1/2597/5180/products/arwezppancst_bb32122a-4a1b-4d8d-8e48-3d7283303653_300x300.jpg?v=1517444088',
			false,
			161
		),
		new Movie(
			'John Wick',
			'Um ex-assassino sai da aposentadoria para rastrear os gangsters que mataram seu cachorro e levaram tudo dele.',
			'With the untimely death of his beloved wife still bitter in his mouth, John Wick, the expert former assassin, receives one final gift from her--a precious keepsake to help John find a new meaning in life now that she is gone. But when the arrogant Russian mob prince, Iosef Tarasov, and his men pay Wick a rather unwelcome visit to rob him of his prized 1969 Mustang and his wife\'s present, the legendary hitman will be forced to unearth his meticulously concealed identity. Blind with revenge, John will immediately unleash a carefully orchestrated maelstrom of destruction against the sophisticated kingpin, Viggo Tarasov, and his family, who are fully aware of his lethal capacity. Now, only blood can quench the boogeyman\'s thirst for retribution.',
			'2014-10-24',
			'Inglês',
			'http://cdn.shopify.com/s/files/1/0799/0083/products/71t-5MlMEnL._SL1500_grande.jpeg?v=1428351976',
			true,
			101
		)
	];

	constructor() {
	}
}
