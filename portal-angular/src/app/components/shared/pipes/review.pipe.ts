import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'review'
})
export class ReviewPipe implements PipeTransform {

	transform(value: any, args?: any): any {
		switch (<number>value) {
			case 1:
				return 'Péssimo';
			case 2:
				return 'Ruim';
			case 3:
				return 'Regular';
			case 4:
				return 'Bom';
			case 5:
				return 'Ótimo';
		}
	}
}
