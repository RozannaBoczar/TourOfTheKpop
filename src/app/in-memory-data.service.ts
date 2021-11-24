import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Idol } from './idols';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const idols = [
      { id: 11, name: 'Namjoon' },
      { id: 12, name: 'Felix' },
      { id: 13, name: 'Bang Chan' },
      { id: 14, name: 'V' },
      { id: 15, name: 'Jungkook' },
      { id: 16, name: 'JHope' },
      { id: 17, name: 'Suga' },
      { id: 18, name: 'Lee Know' },
      { id: 19, name: 'Hyunjin' },
      { id: 20, name: 'Jimin' }
    ];
    return {idols};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(idols: Idol[]): number {
    return idols.length > 0 ? Math.max(...idols.map(idol => idol.id)) + 1 : 11;
  }
}