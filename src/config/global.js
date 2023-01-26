export default {
  global: {
    componenteFormativo:
      'Diseño, ensamble y documentación de tarjetas electrónicas',
    descripcionCurso:
      'Este componente formativo permite visualizar el diseño, desarrollo e implementación de las tarjetas electrónicas, conocidas como PCB, las cuales son el núcleo de cualquier dispositivo tecnológico, debido a que soportan y programan los componentes electrónicos a través de caminos de cobre interconectados de manera predeterminada, permitiendo el correcto funcionamiento de cada uno de ellos, según las normas establecidas para este propósito.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-img.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/banner-bg.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/decorativo1.svg'),
      },
      {
        clases: ['decorativo-2'],
        imagen: require('@/assets/curso/portada/decorativo2.svg'),
      },
      {
        clases: ['decorativo-3'],
        imagen: require('@/assets/curso/portada/decorativo3.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Alistamiento y preparación de tarjetas electrónicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Tarjeta de circuito impreso',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Tratamiento térmico',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Normativa técnica',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo:
          'Ensamble y documentación de componentes sobre tarjetas electrónicas',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Equipos de ensamble electrónico',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Riesgo en ensamble electrónico',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Soldadura en electrónica',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Sistemas de información',
            hash: 't_2_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Alistamiento y preparación de tarjetas electrónicas.',
      referencia:
        'Serna R. A. & García G. J. (2000). <em>Desarrollo y construcción de prototipos electrónicos.</em> Paraninfo.',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000034022&context=L&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=Local%20Search%20Engine&tab=sena_completo&query=any,contains,dise%C3%B1o%20de%20pcb&offset=10',
    },
    {
      tema: 'Alistamiento y preparación de tarjetas electrónicas ',
      referencia:
        'Jordana, J. B. (2018). <em>Descripción, fabricación y montaje de una PCB.</em> d',
      tipo: 'Informe de investigación',
      link:
        'https://dspace.uib.es/xmlui/bitstream/handle/11201/151210/Memoria_EPSU0862.pdf?s',
    },
    {
      tema: 'Alistamiento y preparación de tarjetas electrónicas',
      referencia:
        'Lajara V. J., et al. (2014). <em>Diseño, circuitos impresos con EAGLE</em> (Primera edición. Ed).',
      tipo: 'Libro',
      link:
        'https://sena-primo.hosted.exlibrisgroup.com/primo-explore/fulldisplay?docid=sena_aleph000078453&context=L&vid=SENA&lang=es_ES&search_scope=sena_completo&adaptor=Local%20Search%20Engine&tab=sena_completo&query=any,contains,dise%C3%B1o%20de%20pcb&offset=10',
    },
    {
      tema: 'Alistamiento y preparación de tarjetas electrónicas ',
      referencia:
        'Aldelta Technologies. (2021). <em>IPC 2221B requisitos Parte1 Tips para usar la Norma Genérica de diseño de PCB [video].</em> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=WKonehj93hk',
    },
    {
      tema:
        'Ensamble y documentación de componentes sobre tarjetas electrónicas',
      referencia:
        'Argudo, A. (2021).  <em>Diseño de PCB con Fritzing [video].</em> YouTube. ',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=DamOAfvkFjo',
    },
    {
      tema:
        'Ensamble y documentación de componentes sobre tarjetas electrónicas',
      referencia:
        'IPC Build Electronics Better. (2008). <em>IPC-J-STD-075-Spanish: Clasificación de componentes electrónicos no-IC para procesos de ensamble.</em> ',
      tipo: 'Norma',
      link: 'http://www.ipc.org/TOC/J-STD-075-SP-TOC.pdf',
    },
    {
      tema:
        'Ensamble y documentación de componentes sobre tarjetas electrónicas',
      referencia:
        'IPC Build Electronics Better. (2016). <em>IPC-1601A: Guía para el manejo y almacenamiento de tarjetas impresas.</em> ',
      tipo: 'Norma',
      link: 'http://www.ipc.org/TOC/ipc-1601A-SP-TOC.pdf',
    },
    {
      tema:
        'Ensamble y documentación de componentes sobre tarjetas electrónicas',
      referencia:
        'IPC Build Electronics Better. (2019). <em>IPC-2591: Intercambio en fábricas conectadas (CFX).</em>',
      tipo: 'Norma',
      link: 'http://www.ipc.org/TOC/IPC-2591-Spanish-toc.pdf',
    },
  ],
  glosario: [
    {
      termino: 'ASIC',
      significado:
        'Circuito integrado para aplicaciones específicas (por sus siglas en inglés).',
    },
    {
      termino: 'CAD',
      significado:
        'Diseño asistido por computadora (por sus siglas en inglés); las herramientas CAD se usan para diseñar PCB para fines de fabricación.',
    },
    {
      termino: 'Circuito',
      significado:
        'Agrupación de componentes eléctricos y/o electrónicos que llevan a cabo una función específica al conectarlos entre sí.',
    },
    {
      termino: 'DFA',
      significado:
        'Diseño para montaje (por sus siglas en inglés); son las especificaciones de diseño para el proceso de ensamblaje de PCB.',
    },
    {
      termino: 'DFT',
      significado:
        'Diseño para testeabilidad (por sus siglas en inglés); se diseña una PCB para poder realizarle pruebas.',
    },
    {
      termino: 'EDA',
      significado:
        'Automatización de diseño electrónico (por sus siglas en inglés).',
    },
    {
      termino: 'FPGA',
      significado:
        'Matriz de compuertas programables (por sus siglas en inglés).',
    },
    {
      termino: 'IC',
      significado:
        'Circuito integrado (por sus siglas en inglés); es un paquete con diferentes componentes electrónicos.',
    },
    {
      termino: 'Placa',
      significado: 'Tablero en el cual se hace el circuito impreso.',
    },
    {
      termino: 'SMD',
      significado:
        'Dispositivo de montaje en superficie (por sus siglas en inglés).',
    },
    {
      termino: 'SMT',
      significado:
        'Tecnología de montaje superficial (por sus siglas en inglés).',
    },
    {
      termino: 'Soldar',
      significado:
        'Proceso en el cual una aleación se usa para unir metales cuando alcanza un punto de fusión.',
    },
  ],
  referencias: [
    {
      referencia:
        'Aldelta_Technologies. (2022). <em>Normas para diseño de PCB y electrón</em>,',
      link:
        'https://www.aldeltatec.com/blog-diseno-con-normas-y-certificaciones/normas-pcb-y-electronica/',
    },
    {
      referencia: 'Altium_Limited. (2022). <em>Recursos y apoyo</em>.: ',
      link: 'https://resources.altium.com/es',
    },
    {
      referencia:
        'Contaval. (2016), <em>¿Cómo se fabrica una placa electrónica,Electronica</em> blog',
      link: 'https://www.contaval.es/como-se-fabrica-una-placa-electronica/',
    },
    {
      referencia:
        'Bravo, Jordana, J, (2018), <em>Descripción, fabricación y montaje de una PCB</em>, ',
      link:
        'https://dspace.uib.es/xmlui/bitstream/handle/11201/151210/Memoria_EPSU0862.pdf?s',
    },
    {
      referencia:
        'D. Gudeczauskas, G. Milad . (1997). " <em>Fiabilidad de las juntas de soldadura de los acabados superficiales de oro (ENIG, ENEPIG y DIG) para PWB ensamblados con aleación SAC sin plomo</em> ". ',
    },
    {
      referencia:
        'Díaz, M. J. (2021). <em>Normas Básicas y Recomendaciones en el Diseño de PCB´s</em>.',
    },
    {
      referencia:
        'Doñate, R. (2018). <em>Tarjeta de Circuito Impreso – Definiciones y Terminología Utilizada parte I</em>. ',
      link:
        'https://pcbcentral.com/tarjeta-de-circuito-impreso-definiciones-y-terminologa-utilizada-parte-i',
    },
    {
      referencia: 'IDEAM. (2016). <em>Definción y Entes Normalizadores</em>.',
      link:
        'http://www.ideam.gov.co/web/ecosistemas/normas-estandares#:~:text=En%20un%20%C3%A1mbito%20formal%2C%20se,y%20servicios%20cumplen%20con%20su',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2008). IPC-J-STD-075-Spanish: <em>Clasificación de componentes electrónicos no-IC para procesos de ensamble</em>.',
      link:
        'https://shop.ipc.org/general-electronics/standards/j075-0-0-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2009). IPC-7711/21B-SP: Retrabajo, <em>Modificación y Reparación de Ensamble Electrónicos</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics/standards/771121-0-b-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2009), IPC-7711/21B-SP: Retrabajo, <em>Modificación y Reparación de Ensamble Electrónicos</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics/standards/771121-0-b-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2010), IPC-J-STD-001G-AM1: <em>Provee requisitos para materiales de soldadura y procesos para ensambles</em>. Obtenido de ',
      link: 'https://shop.ipc.org/standards/j001-a1-g1-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2012), IPC/WHMA-A-620B-SP: <em>Requisitos y Aceptabilidad de Cables y Mazos de Cables</em>. ',
      link:
        'https://shop.ipc.org/general-electronics-space-and-defense/standards/a620-0-b-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2012), IPC/WHMA-A-620B-SP: <em>Requisitos y Aceptabilidad de Cables y Mazos de Cables</em>.',
      link:
        'https://shop.ipc.org/general-electronics-space-and-defense/standards/a620-0-b-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2015), IPC-6012DS-SP: <em></em>.',
      link: 'https://shop.ipc.org/space-and-defense/standards/6012-s-d-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2015), IPC-J-STD-020E: <em>Clasificación de la sensibilidad a la humedad / reflujo de dispositivos de montaje superficial no herméticos</em>.',
      link:
        'https://shop.ipc.org/general-electronics/standards/j020-0-e-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2015), IPC-J-STD-020E: <em>Clasificación de la sensibilidad a la humedad / reflujo de dispositivos de montaje superficial no herméticos</em>.',
      link:
        'https://shop.ipc.org/general-electronics/standards/j020-0-e-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2016), <em>A-600J-SP-Aceptabilidad de Tableros Impresos</em>. ',
      link:
        'https://shop.ipc.org/general-electronics/standards/a600-0-j-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2016). IPC-1601A: <em>Guía para el manejo y almacenamiento de tarjetas impresas</em>.',
      link:
        'https://shop.ipc.org/general-electronics/standards/1601-0-a-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2016). IPC-6012D-SP: <em>Clasificación y especificación de rendimiento para los tableros impresos rígidos</em>',
      link:
        'https://shop.ipc.org/automotive-general-electronics-medical-space-and-defense/standards/6012-0-d-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (01 de 05 de 2016). IPC-A-600J-SP: <em>Aceptabilidad de Tableros Impresos</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics/standards/a600-0-j-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (01 de 01 de 2017). IPC-7711/21C: <em>Reparación, Modificación y Reparación de Ensambles Electrónicos - Spanish</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics/standards/771121-0-c-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (01 de 10 de 2017). IPC-J-STD-001GS: <em>Adenda para dispositivos electrónicos utilizados en aplicaciones militares y espaciales, realizada al documento IPC J-STD-001G titulado Requisitos de ensambles soldados eléctricos y electrónicos</em>. Obtenido de ',
      link: 'https://shop.ipc.org/space-and-defense/j001-s-g-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (01 de 01 de 2017). IPC-WHMA-A-620C: <em>Requisitos y Aceptabilidad de Cables y Mazos de Cables - Spanish</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics-space-and-defense/standards/a620-0-c-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (01 de 03 de 2018). IPC/JEDEC-J-STD-033D: <em>Manejo, embalaje, transporte y uso de componentes sensibles a la humedad/reflujo y/o al proceso.</em> Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics/standards/j033-0-d-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (01 de 03 de 2019). IPC-2591: <em>Intercambio en fábricas conectadas (CFX)</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics/standards/2591-0-0-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (23 de 06 de 2020). IPC/WHMA-A-620D: <em>Requisitos y admisibilidad de ensambles con cables y mazos de cables</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics-space-and-defense/standards/a620-0-d-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. ( 2020). IPC-7711/21C-AM1: <em>Retrabajo, Modificación y Reparación de Ensambles Electrónicos Enmienda 1</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics/standards/771121-a1-c1-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2020). IPC-A-600K: <em>Admisibilidad de las placas impresas</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics/standards/a600-0-k-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (02020). IPC-A-610H: <em>Aceptabilidad de Ensambles Electrónicos</em>.',
      link:
        'https://shop.ipc.org/automotive-general-electronics-telecom/standards/a610-0-h-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2020). IPC-J-STD-001H: <em>Requisitos para Ensambles Eléctricos y Electrónicos Soldados</em>.',
      link: 'https://shop.ipc.org/general-electronics/j001-0-h-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (01 de 05 de 2021). IPC-J-STD-001HS: <em>Suplemento del IPC J-STD-001H Requisitos para Ensambles Eléctricos y Electrónicos Soldados para Aplicaciones Espaciales y Militares de Dispositivos Electrónicos</em>. Obtenido de ',
      link:
        'https://shop.ipc.org/general-electronics-space-and-defense/standards/j001-s-hs-spanish',
    },
    {
      referencia:
        'IPC Build Electronics Better. (2022). <em>The Global Association for Electronics Manufacturing</em>. Obtenido de ',
      link: 'https://www.ipc.org/',
    },
    {
      referencia:
        'Laverde, A. (09 de 02 de 2016). <em>Aldelta Technologies</em>. Obtenido de ',
      link:
        'https://www.aldeltatec.com/blog-diseno-con-normas-y-certificaciones/normas-pcb-y-electronica/',
    },
    {
      referencia: 'Leon, E. C. (2018). <em>PCB Central</em>. Obtenido de ',
      link:
        'https://pcbcentral.com/tarjeta-de-circuito-impreso-definiciones-y-terminologa-utilizada-parte-i',
    },
    {
      referencia:
        'Llamas, L. (2020), <em>COMPONENTES HABITUALES EN PCBS</em>. Obtenido de ',
      link: 'https://www.luisllamas.es/componentes-habituales-en-pcbs/',
    },
    {
      referencia:
        'Manual OrCAD Layout. (s.f.). <em>Capitulo 4, Ddiseño del PCB</em>. Obtenido de ',
      link:
        'http://www.futureworkss.com/tecnologicos/electronica/manuales/Manual%20del%20orcad%20Layout.pdf',
    },
    {
      referencia:
        'Ministerio_de_Ambiente_y_Desarrollo_Sostenible. (2013). <em>Ley 1672</em>. Obtenido de ',
      link:
        'https://www.minambiente.gov.co/wp-content/uploads/2021/06/ley-1672-2013.pdf',
    },
    {
      referencia:
        'Moko technology, (2021), <em>Encapsulado de PCB VS Revestimiento conformado</em>. ',
      link:
        'https://www.mokotechnology.com/es/pcb-potting-vs-conformal-coating/',
    },
    {
      referencia:
        'Olmos Pardo, F. J. (2005), <em>Control De Un Horno De Reflujo Utilizando Una Plataforma</em>, ',
      link:
        'https://repositorio.uniandes.edu.co/bitstream/handle/1992/22213/u262268.pdf?sequence=1',
    },
    {
      referencia:
        'PCB Future. (2021), <em>Cómo identificar la polaridad del componente SMT</em>.',
      link:
        'http://es.pcbfuture.com/news/how-to-identify-smt-components-polarity/',
    },
    {
      referencia:
        'Peterson, Z. (09 de 02 de 2020). <em>Guía para la terminología de PCB para Altium Designer</em>. Obtenido de ',
      link:
        'https://resources.altium.com/es/p/guide-to-pcb-terminology-for-altium-designer',
    },
    {
      referencia:
        'Proto-Electronics.Com. (2019). <em>PCB en un entorno hostil: ¿qué precauciones deben tomarse?</em> Obtenido de ',
      link:
        'https://www.proto-electronics.com/es/blog/precauciones-pcb-entorno-hostil',
    },
    {
      referencia:
        'Revista española de electrónica, ( 2017), <em>Distribución de calor en PCB: uso de imágenes termográficas para obtener resultados más precisos</em>, ',
      link:
        'https://www.redeweb.com/articulos/distribucion-de-calor-en-pcb/?cn-reloaded=1',
    },
    {
      referencia:
        'Tkgd2005 ( 2008), <em>placas de circuito impreso de alta densidad</em>,',
      link: 'https://hmong.es/wiki/Printed_circuit_board',
    },
    {
      referencia: 'Torres, H. (2015). <em>Guía diseño de PCB con EAGLE</em>.',
      link: 'https://hetpro-store.com/TUTORIALES/guia-diseno-de-pcb-con-eagle/',
    },
    {
      referencia:
        'Vuelapluma S.L., A. B. (2007). <em>Principios de electrónica</em> (Séptima edición. ed. ed.). Madrid: McGraw-Hill.',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Nombre',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Álvaro Andrés Angarita Ramirez',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
