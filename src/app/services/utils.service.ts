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
        category: 'Redes Sociales',
        tags: ['Redes Sociales', 'Marketing'],
      },
      {
        image: 'assets/directory/aig-master.avif',
        url: 'https://aigmaster.com/',
        title: 'AIG Master',
        price: 10,
        category: 'Redes Sociales',
        tags: ['SEO', 'IA', 'Time'],
      },
      {
        image: 'assets/directory/perfect-essay-writer.avif',
        url: 'https://www.perfectessaywriter.ai/',
        title: 'PerfectEssayWriter.AI',
        category: 'Redes Sociales',
        tags: ['Texto', 'Redes Sociales', 'Educacion', 'Generador de Texto'],
      },
      {
        image: 'assets/directory/fineshare.avif',
        url: 'https://www.fineshare.com/zoom-background/',
        title: 'Fineshare',
        category: 'Redes Sociales',
        description: "Cubre la mejor selección de fondos HD para reuniones de Zoom",
        tags: ['Generador de Imágenes', 'Redes Sociales', 'Divertido'],
      },
    ];
    return data;
  }
}
