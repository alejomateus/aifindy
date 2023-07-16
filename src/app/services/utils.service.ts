import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getData(): any[] {
    const data = [
      {
        image: 'assets/directory/deep-art-effects.avif',
        url: 'https://www.deeparteffects.com',
        title: 'Deep Art Effects',
        price: null,
        category: 'categoria1',
        tags: ['Redes Sociales', 'Marketing'],
      },
      {
        image: 'assets/directory/aig-master.avif',
        url: 'https://aigmaster.com/',
        title: 'AIG Master',
        price: 10,
        category: 'categoria2',
        tags: ['SEO', 'IA', 'Time'],
      },
    ];
    return data;
  }
}
