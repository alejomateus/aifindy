import { Injectable } from '@angular/core';
import { IA } from '../models/ia';

@Injectable({
  providedIn: 'root',
})
export class UtilsService {
  constructor() {}

  getData(): IA[] {
    let data: IA[] = [
      {
        image: 'adcreative-creativos.png',
        url: 'https://es.adcreative.ai/',
        title: 'AdCreative',
        accessType: 'Free Trial',
        price: 29,
        description:
          'AdCreative es una plataforma publicitaria para crear y gestionar anuncios digitales.',
        tags: [
          'Marketing',
          'Redes Sociales',
          'Texto',
          'Copywriting',
          'Presentaciones',
          'Influencers',
          'Diapositivas',
          'Ventas',
          'E-Commerce',
          'Analisis de Datos',
        ],
      },
    ];
    if (new Date() < new Date('2023-07-26')) {
      data = [
        {
          image: 'adcreative-creativos.png',
          url: 'https://es.adcreative.ai/',
          title: 'AdCreative',
          accessType: 'Free Trial',
          price: 29,
          description:
            'AdCreative es una plataforma publicitaria para crear y gestionar anuncios digitales.',
          tags: [
            'Marketing',
            'Redes Sociales',
            'Texto',
            'Copywriting',
            'Presentaciones',
            'Influencers',
            'Diapositivas',
            'Ventas',
            'E-Commerce',
            'Analisis de Datos',
          ],
        },
        {
          image: '2short.png',
          url: 'https://2short.ai/',
          title: '2short',
          accessType: 'Freemium',
          price: 9.99,
          description:
            '2Short es una herramienta en línea que permite acortar enlaces URL largos para que sean más cortos y fáciles de compartir.',
          tags: [
            'Video',
            'Redes Sociales',
            'Asistente',
            'Marketing',
            'Audio',
            'Automatización',
          ],
        },
        {
          image: 'Copymatic.png',
          url: 'https://copymatic.ai/',
          title: 'Copymatic',
          accessType: 'Free Trial',
          price: 29,
          description:
            'Copymatic es una plataforma para generar contenido creativo y persuasivo en línea.',
          tags: ['Marketing', 'Texto', 'Copywriting'],
        },
        {
          image: 'DALL-E 2.png',
          url: 'https://openai.com/',
          title: 'DALL-E 2',
          accessType: 'Freemium',
          price: 15,
          description:
            'DALL-E 2 es una versión mejorada del modelo de IA que genera imágenes únicas a partir de descripciones textuales.',
          tags: ['Fotos/Arte', 'Generador de Imágenes', 'Diseño'],
        },

        {
          image: 'Fliki.png',
          url: 'https://fliki.ai/',
          title: 'Fliki',
          accessType: 'Freemium',
          price: 29,
          description:
            'Fliki Ai convierte guiones o publicaciones de blog en videos con voces realistas en solo 2 minutos. Biblioteca de medios de stock y confiado por grandes empresas.',
          tags: [
            'Video',
            'Texto a Video',
            'Texto a Voz',
            'Marketing',
            'RedesSociales',
            'Automatización',
            'Influencers',
          ],
        },
        {
          image: 'Humata AI.png',
          url: 'https://www.humata.ai/',
          title: 'Humata AI',
          accessType: 'Freemium',
          price: 14.99,
          description:
            'Humata AI resume documentos largos, convierte textos técnicos en resúmenes claros, responde preguntas difíciles, genera escritura y proporciona información detallada para informes rápidamente.',
          tags: ['Buscador', 'Texto', 'Copywriting'],
        },
        {
          image: 'Midjourney.png',
          url: 'https://www.midjourney.com/home/',
          title: 'Midjourney',
          accessType: 'Freemium',
          price: 10,
          description:
            'Midjourney: Generador de arte de IA que expande la imaginación humana.',
          tags: ['Fotos/Arte'],
        },
        {
          image: 'RunwayML.png',
          url: 'https://runwayml.com/',
          title: 'RunwayML',
          accessType: 'Freemium',
          price: 15,
          description:
            'RunwayML es una plataforma que permite crear y experimentar con modelos de inteligencia artificial de manera accesible.',
          tags: [
            'Video',
            'Fotos/Arte',
            'Audio',
            'Musica',
            'Diseño',
            '3D',
            'Texto a Imagen',
            'Video a Subtitulos',
          ],
        },
        {
          image: 'Rytr.png',
          url: 'https://rytr.me/',
          title: 'Rytr',
          accessType: 'Freemium',
          price: 9,
          description:
            'Rytr AI es una plataforma de redacción asistida por IA.',
          tags: ['Texto', 'SEO', 'Redes Sociales', 'Copywriting'],
        },
        {
          image: 'Synthesia.png',
          url: 'https://www.synthesia.io/',
          title: 'Synthesia',
          accessType: 'De Pago',
          price: 26,
          description:
            'Synthesia: Crea videos con IA atractivos y económicos desde texto escrito.',
          tags: [
            'Video',
            'Texto a Video',
            'Avatar',
            'Texto a Voz',
            'Redes Sociales',
            'Marketing',
            'Habla',
          ],
        },
        {
          image: 'BHuman.png',
          url: 'https://app.bhuman.ai/',
          title: 'BHuman',
          accessType: 'Free Trial',
          price: 39,
          description:
            'Bhuman: Crea, personaliza y distribuye videos a gran escala con resultados medibles.',
          tags: [
            'Video',
            'Marketing',
            'Texto a Video',
            'Avatar',
            'Atencion al Cliente',
            'Redes Sociales',
            'Automatización',
            'Productividad',
            'Startup',
          ],
        },
        {
          image: 'Jasper AI.png',
          url: 'https://www.jasper.ai/',
          title: 'Jasper AI',
          accessType: 'Free Trial',
          price: 40,
          description:
            'Jasper AI: Crea contenido de calidad x10 veces más rápido con la herramienta de copywriting de IA líder.',
          tags: ['Marketing', 'Texto', 'Fotos/Arte', 'Copywriting'],
        },
        {
          image: 'Looka.png',
          url: 'https://looka.com/',
          title: 'Looka',
          accessType: 'Freemium',
          price: 20,
          description:
            'Looka Logo Maker combina tus preferencias de diseño de logo con la Inteligencia Artificial para ayudarte a crear un logo personalizado que te encantará.',
          tags: ['Logos'],
        },
        {
          image: 'Namecheap.png',
          url: 'https://sorare.com/',
          title: '​​Namecheap Logo Maker',
          accessType: 'Gratis',
          price: 10,
          description: 'Namecheap ',
          tags: ['Logos', 'Marketing'],
        },
        {
          image: 'QuillBot Paraphraser.png',
          url: 'https://quillbot.com/',
          title: '​​QuillBot Paraphraser',
          accessType: 'Freemium',
          price: 8.33,
          description:
            'QuillBot: Elimina errores gramaticales y parafrasea contenido. Pruébelo gratis y úselo junto a sus herramientas de escritura.',
          tags: ['Textos'],
        },
        {
          image: 'Smodin.png',
          url: 'https://smodin.io/',
          title: '​​Smodin',
          accessType: 'Freemium',
          price: 10,
          description:
            'Smodin: Herramientas diarias para mejorar la escritura con reescritor, verificador de plagio, citas automáticas y traductor.',
          tags: ['SEO', 'E-mail', 'Texto', 'Generador de Texto', 'Copywriting'],
        },
        {
          image: '10Web.png',
          url: 'https://10web.io/',
          title: '​​10Web',
          accessType: 'Free Trial',
          price: 10,
          description:
            '10Web: Plataforma de WordPress impulsada por IA para construir sitios web automáticos y rápidos.',
          tags: ['Programación/Code', 'WEB', 'Wordpress'],
        },
        {
          image: 'AI Image Enlarger.png',
          url: 'https://imglarger.com/',
          title: '​​AI Image Enlarger',
          accessType: 'Freemium',
          price: 9,
          description:
            'Kits de herramientas de AI: Mejora y aumenta la resolución de tus fotos sin pérdida de calidad.',
          tags: ['Fotos/Arte'],
        },
        {
          image: 'AI-Writer.com.png',
          url: 'https://ai-writer.com/',
          title: '​​AI-Writer.com',
          accessType: 'Free Trial',
          price: 29,
          description:
            'AI-Writer: Genera contenido preciso y de calidad en 2 minutos con modelos de escritura de IA de última generación.',
          tags: ['Texto', 'Generador de Texto', 'SEO', 'Marketing'],
        },
        {
          image: 'AIHelperBot.png',
          url: 'https://aihelperbot.com/',
          title: '​​AIHelperBot',
          accessType: 'Free Trial',
          price: 9,
          description:
            'Construye consultas SQL instantáneas sin conocimientos previos, mejora tu competencia y productividad en SQL. Soporta bases de datos NoSQL.',
          tags: ['SQL', 'Analisis de Datos'],
        },
        {
          image: 'AISEO.png',
          url: 'https://aiseo.ai/',
          title: '​​AISEO',
          accessType: 'Free Trial',
          price: 15,
          description:
            'AISEO: Tecnología de IA para convertir ideas en blogs convincentes y bien escritos con contenido optimizado para SEO. Ahorra tiempo y mejora tus habilidades de escritura.',
          tags: [
            'Redes Sociales',
            'Marketing',
            'SEO',
            'Texto',
            'Generador de Texto',
            'Copywriting',
          ],
        },
        {
          image: 'Anyword.png',
          url: 'https://anyword.com/',
          title: '​​Anyword',
          accessType: 'Free Trial',
          price: 24,
          description:
            'Anyword: Asistente de escritura de IA que genera copias efectivas para marketing, eliminando conjeturas y mejorando resultados.',
          tags: ['Texto', 'Copywriting'],
        },
        {
          image: 'AppIcons AI.png',
          url: 'https://appicons.ai/',
          title: '​​AppIcons AI',
          accessType: 'Freemium',
          price: 5,
          description:
            'Iconos de aplicaciones móviles generados por IA para Android e iOS. Sin habilidades técnicas requeridas. Personaliza y descarga.',
          tags: ['Programación/Code', 'Diseño', 'Asistente'],
        },
        {
          image: 'Article Fiesta.png',
          url: 'https://articlefiesta.com/',
          title: '​​Article Fiesta',
          accessType: 'Free Trial',
          price: 20,
          description:
            'Article Fiesta: Escritor de IA para crear artículos SEO listos para publicar. Agrega imágenes y enlaces internos automáticamente. Pruébanos gratis.',
          tags: ['SEO', 'Marketing', 'Diseño', 'Texto'],
        },
        {
          image: 'ArticleForge.png',
          url: 'https://www.articleforge.com/',
          title: '​​ArticleForge',
          accessType: 'Free Trial',
          price: 13,
          description:
            'Article Forge: Genera contenido único, SEO-friendly y de alta calidad con un clic.',
          tags: ['SEO', 'Texto', 'Copywriting'],
        },
        {
          image: 'ArtSpace.ai.png',
          url: 'https://www.artspace.ai/',
          title: '​​ArtSpace.ai',
          accessType: 'De Pago',
          price: 227,
          description:
            'ArtSpace.ai: Plataforma inmersiva y colaborativa para exhibir y descubrir arte digital en un entorno virtual.',
          tags: ['Fotos/Arte', 'Generador de Imágenes'],
        },
        {
          image: 'Bertha.ai.png',
          url: 'https://bertha.ai/',
          title: '​​Bertha.ai',
          accessType: 'Freemium',
          price: 20,
          description:
            'Bertha: Crea contenido de alta calidad para tu sitio web rápidamente con IA impulsada por redacción de textos y creación de imágenes.',
          tags: ['Copywriting', 'Fotos/Arte', 'Texto'],
        },
        {
          image: 'Botowski.png',
          url: 'https://www.botowski.com/',
          title: '​​Botowski',
          accessType: 'Free Trial',
          price: 19,
          description:
            'Botowski es tu nuevo redactor personal de inteligencia artificial.',
          tags: ['Texto', 'Redes Sociales', 'Fotos/Arte', 'Copywriting', 'SEO'],
        },
        {
          image: 'BrowseAI.png',
          url: 'https://www.browse.ai/',
          title: '​​BrowseAI',
          accessType: 'Freemium',
          price: 39,
          description:
            'Botowski: Extrae y monitorea datos de sitios web sin programación. Entrena al robot en minutos.',
          tags: ['WEB', 'Programación/Code', 'Automatización'],
        },
        {
          image: 'Chatbase.png',
          url: 'https://www.chatbase.co/',
          title: '​​Chatbase',
          accessType: 'Freemium',
          price: 10,
          description:
            'Chatbase: Plataforma de análisis de conversaciones para mejorar la experiencia de chatbots y usuarios.',
          tags: ['Asistente', 'Texto', 'Programación/Code', 'Bot'],
        },
        {
          image: 'ChatPDF.png',
          url: 'https://www.chatpdf.com/',
          title: '​​ChatPDF',
          accessType: 'Freemium',
          price: 5,
          description:
            "Inteligencia Artifical que analiza PDF's para poder responder preguntas como un chatbot",
          tags: ['Texto', 'Asistente', 'Automatización', 'Educacion'],
        },
        {
          image: 'ChefGPT.png',
          url: 'https://www.chefgpt.xyz/',
          title: '​​ChefGPT',
          accessType: 'Freemium',
          price: 2.99,
          description:
            'Recomendaciones de recetas personalizadas basadas en ingredientes, tiempo y nivel de habilidad, impulsadas por IA.',
          tags: ['Divertido', 'Asistente', 'Buscador', 'GPT'],
        },
        {
          image: 'Contentfries.png',
          url: 'https://www.contentfries.com/',
          title: '​​Contentfries',
          accessType: 'Free Trial',
          price: 9,
          description:
            'ContentFries: Genera múltiples piezas de contenido rápido y contexto para semanas o meses. Incluye creador de subtítulos automáticos.',
          tags: ['Video', 'Texto', 'Video a Subtitulos'],
        },
        {
          image: 'Copy.ai.png',
          url: 'https://www.copy.ai/',
          title: '​​Copy.ai',
          accessType: 'Freemium',
          price: 49,
          description:
            'ContentFries: IA genera copys de alta calidad. Comienza gratis, sin tarjeta.',
          tags: ['Texto', 'Copywriting'],
        },
        {
          image: 'CopyMonkey.ai.png',
          url: 'https://copymonkey.ai/',
          title: '​​CopyMonkey.ai',
          accessType: 'Free Trial',
          price: 24,
          description:
            'CopyMonkey: IA optimiza listas de Amazon, colocando palabras clave importantes para mejorar posicionamiento orgánico. Rápido y eficiente.',
          tags: ['Texto', 'Amazon', 'Copywriting'],
        },
        {
          image: 'CrawlQ.ai.png',
          url: 'https://crawlq.ai/',
          title: '​​CrawlQ.ai',
          accessType: 'Free Trial',
          price: 49,
          description:
            "CrawlQ: Genera 'Amor de Marca' con audiencias globales a través de trabajos creativos emocionales y de alto retorno.",
          tags: ['Redes Sociales', 'Asistente'],
        },
        {
          image: 'Creaitor AI.png',
          url: 'https://www.creaitor.ai/',
          title: '​​Creaitor AI',
          accessType: 'Freemium',
          price: 9,
          description:
            'Creaitor AI: Asistente de IA para escribir contenido poderoso y expresivo. Simplemente ingresa los detalles y obtén resultados sorprendentes.',
          tags: ['Texto', 'Asistente', 'Copywriting'],
        },
        {
          image: 'Easy-Peasy.AI.png',
          url: 'https://easy-peasy.ai/',
          title: '​​Easy-Peasy.AI',
          accessType: 'Freemium',
          price: 4.99,
          description:
            'Generador de Contenido IA: Supera bloqueos creativos, crea contenido original 10 veces más rápido.',
          tags: ['Fotos/Arte', 'Texto', 'Video', 'Copywriting', 'Voz a Texto'],
        },
        {
          image: 'Eightify.png',
          url: 'https://eightify.app/',
          title: '​​Eightify',
          accessType: 'Freemium',
          price: null,
          description:
            'Resúmenes de IA para YouTube: Convierte videos largos en resúmenes con 8 ideas clave. Ahorra tiempo y decide fácilmente.',
          tags: ['Video a Texto', 'Productividad', 'Video', 'Youtube'],
        },
        {
          image: 'Eilla AI.png',
          url: 'https://eilla.ai/',
          title: '​​Eilla AI',
          accessType: 'Freemium',
          price: 14,
          description:
            'Eilla: Asistente IA seguro para crear documentos diversos. Más de 90 plantillas y flujos de trabajo de IA protegiendo la privacidad.',
          tags: [
            'Texto',
            'Fotos/Arte',
            'SEO',
            'Copywriting',
            'Diseño',
            'Generador de Imágenes',
            'Finanzas',
            'Legal',
            'Startup',
            'Inmobiliaria/Arquitectura',
            'Automatización',
          ],
        },
        {
          image: 'Elephas.png',
          url: 'https://elephas.app/',
          title: '​​Elephas',
          accessType: 'Free Trial',
          price: 4.99,
          description:
            'Elephas es una plataforma para colaborar y automatizar flujos de trabajo de inteligencia artificial de manera eficiente.',
          tags: ['Texto', 'Asistente'],
        },
      ];
    }
    return data;
  }
  getCategories(): any[] {
    let categories = [
      {
        name: 'Redes Sociales',
        title: 'Redes Sociales',
        subtitle: '',
        description: '',
        image: 'REDES SOCIALES.png',
      },
    ];
    if (new Date() < new Date('2023-07-26')) {
      categories = [
        {
          name: 'Redes Sociales',
          title: 'Redes Sociales',
          subtitle: '',
          description: '',
          image: 'REDES SOCIALES.png',
        },
        {
          name: 'Fotos',
          title: 'Fotos',
          subtitle: '',
          description: '',
          image: 'FOTO.png',
        },
        {
          name: 'Texto',
          title: 'Texto',
          subtitle: '',
          description: '',
          image: 'TEXTOS.png',
        },
        {
          name: 'Diseños',
          title: 'Diseños',
          subtitle: '',
          description: '',
          image: 'DISEÑO.png',
        },
        {
          name: 'Música',
          title: 'Música',
          subtitle: '',
          description: '',
          image: 'MUSICA.png',
        },
        {
          name: 'Video',
          title: 'Video',
          subtitle: '',
          description: '',
          image: 'VIDEO.png',
        },
        {
          name: 'Buscador',
          title: 'Buscador',
          subtitle: '',
          description: '',
          image: 'BUSCADOR.png',
        },
        {
          name: 'Asistente',
          title: 'Asistente',
          subtitle: '',
          description: '',
          image: 'ASISTENTE.png',
        },
        {
          name: 'Automatización',
          title: 'Automatización',
          subtitle: '',
          description: '',
          image: 'AUTOMATIZACION.png',
        },
        {
          name: 'Programación',
          title: 'Programación',
          subtitle: '',
          description: '',
          image: 'PROGRAMACION.png',
        },
        {
          name: 'Divertido',
          title: 'Divertido',
          subtitle: '',
          description: '',
          image: 'DIVERTIDO.png',
        },
        {
          name: 'Gaming',
          title: 'Gaming',
          subtitle: '',
          description: '',
          image: 'GAMING.png',
        },
        {
          name: 'Inmobiliaria',
          title: 'Inmobiliaria',
          subtitle: '',
          description: '',
          image: 'INMOBILIARIA.png',
        },
        {
          name: 'Productividad',
          title: 'Productividad',
          subtitle: '',
          description: '',
          image: 'PRODUCTIVIDAD.png',
        },
        {
          name: 'Texto a voz',
          title: 'Texto a voz',
          subtitle: '',
          description: '',
          image: 'TEXTO A VOZ.png',
        },
        {
          name: 'Bot',
          title: 'Bot',
          subtitle: '',
          description: '',
          image: 'BOT.png',
        },
        {
          name: 'Influencers',
          title: 'Influencers',
          subtitle: '',
          description: '',
          image: 'INFLUENCER.png',
        },
        {
          name: 'Metaverso',
          title: 'Metaverso',
          subtitle: '',
          description: '',
          image: 'METAVERSO.png',
        },
        {
          name: 'Finanzas',
          title: 'Finanzas',
          subtitle: '',
          description: '',
          image: 'FINANZAS.png',
        },
        {
          name: 'Diapositivas',
          title: 'Diapositivas',
          subtitle: '',
          description: '',
          image: 'DIAPOSITIVAS.png',
        },
        {
          name: 'API',
          title: 'API',
          subtitle: '',
          description: '',
          image: 'API.png',
        },
        {
          name: '3D',
          title: '3D',
          subtitle: '',
          description: '',
          image: '3D.png',
        },
        {
          name: 'Logos',
          title: 'Logos',
          subtitle: '',
          description: '',
          image: 'LOGOS.png',
        },
        {
          name: 'Avatar',
          title: 'Avatar',
          subtitle: '',
          description: '',
          image: 'AVATAR.png',
        },
      ].sort(() => Math.random() - 0.5);
    }
    return categories;
  }
}
