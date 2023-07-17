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
      {
        image: 'assets/directory/perfect-essay-writer.avif',
        url: 'https://www.perfectessaywriter.ai/',
        title: 'PerfectEssayWriter.AI',
        category: 'categoria',
        tags: ['Texto', 'Redes Sociales', 'Educacion', 'Generador de Texto'],
      },
      {
        image: 'assets/directory/fineshare.avif',
        url: 'https://www.fineshare.com/zoom-background/',
        title: 'Fineshare',
        category: 'categoria',
        tags: ['Generador de Imágenes', 'Redes Sociales', 'Divertido'],
      },
    ];
    return data;
  }
}
