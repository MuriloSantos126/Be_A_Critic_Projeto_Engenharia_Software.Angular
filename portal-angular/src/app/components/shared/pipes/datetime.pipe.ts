import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
	name: 'datetime'
})
export class DatetimePipe implements PipeTransform {

	transform(value: any, args?: any): any {
		const date = new Date(<number>value);
		const today = new Date();

		if (date.getDay() === today.getDay()) {
			return date.getHours() + ':' + date.getMinutes();
		}

		return date.getDay() + '/' + date.getMonth();
	}

}
