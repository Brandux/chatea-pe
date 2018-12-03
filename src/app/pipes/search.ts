import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'search' // --- este es el nombre con que se implementa en el html
})
export class SearchPipe implements PipeTransform {
    public transform(value, args: string) {
        if (!value) {
            return;
        }
        if (!args) {
            return value;
        }
        args = args.toLowerCase();
        return value.filter((item) => {
            return JSON.stringify(item).toLowerCase().includes(args);
        });
    }
}
