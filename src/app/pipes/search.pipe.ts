import { Pipe, PipeTransform } from '@angular/core';
import { Song } from '../interfaces/Song';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(items: Song[], searchText: string): unknown {
    if (!items) {
      return [];
    }
    if (!searchText) {
      return items;
    }

    searchText = searchText.toLocaleLowerCase();

    // Todo: Base on instance
    return items.filter(song => song.title.toLocaleLowerCase().includes(searchText));
  }

}
