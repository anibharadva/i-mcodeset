import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'ClientSearchPipe', pure: false })
export class ClientSearchPipe implements PipeTransform {
    transform(value, args?): Array<any> {
        const searchText = new RegExp(args, 'ig');
        if (value) {
            return value.filter(character => {
                if (character.name) {
                    return character.name.search(searchText) !== -1;
                } else {
                    return character.name.search(searchText) !== -1;
                }
            });
        }
    }
}