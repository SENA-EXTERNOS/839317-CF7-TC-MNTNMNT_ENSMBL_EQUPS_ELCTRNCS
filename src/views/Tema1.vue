<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Alistamiento y preparación de tarjetas electrónicas

    .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
      .bloque-texto-g__img(
        :style="{'background-image':`url(${require('@/assets/curso/temas/t1/f1.jpg')})`}"
      )
      .bloque-texto-g__texto.p-4
        p.mb-0 Para comprender el proceso de desarrollo de una tarjeta electrónica se requiere visualizar su composición, su forma, conocer qué elementos intervienen en su funcionamiento y de qué manera se disponen para lograr un correcto ensamble. También entender los riesgos del dispositivo con relación a su uso y la función que va a desempeñar, con el fin de garantizar la funcionalidad del producto final con métodos que lo protejan de factores externos o del calor que emita el mismo dispositivo. Además, tener en cuenta las guías de la normatividad para respaldar su correcto proceso de elaboración. Para ello, es necesario comprender conceptos y definiciones de algunos componentes y procesos.

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.1 Tarjeta de circuito impreso

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.zi2
        img(src='@/assets/curso/temas/t1/f2.svg', alt='circuito impreso')
      .col-md-8.trleft-zi1.tarjeta.bg-r-c(style="background-color: #e5e7f2")
        .bloque-texto-b.p-4.noBG
          .bloque-texto-b__texto
            p Doñate (2018), indica que:
            br
            i.fas.fa-quote-left
            p.mb-0: Una tarjeta de circuito impreso o también llamada PCB (
              em Printed Circuit Board
              | ), es una placa o superficie donde se ensamblan y conectan eléctricamente diversos componentes electrónicos por medio de pistas de cobre.
            i.fas.fa-quote-right

    .row.justify-content-center.mb-5.bg1
      .col-md-7
        p Comprender esta definición es indispensable, ya que estas tarjetas se usan en la mayoría de dispositivos electrónicos que son cada vez más pequeños y versátiles.
        .cajon.color-acento-contenido.p-4.mb-4
          p.mb-0 Con las PCB se logra implementar la industria 4.0 a través de conexiones a internet (Internet de las cosas o IoT), su uso no es únicamente militar o gubernamental; también se aplica en campos cómo el automotriz, el industrial o el aeroespacial, además de la implementación en el ámbito doméstico y de uso personal, catapultando la economía y el consumo de nuevos dispositivos por medio del desarrollo de inteligencias como la domótica con el desarrollando aspiradoras 
            em robots
            | , cámaras de seguridad inalámbricas, sensores de movimiento para controlar las puertas, 
            em switches 
            | inteligentes en el hogar controlados desde el celular y diferentes aplicaciones que facilitan la vida del ser humano.
        p En la Figura 1 se aprecia, una PCB con sus componentes ensamblados, en la parte superior y una sin componentes en la parte inferior.
      .col-md-5
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 1
          br
          em PCB con y sin componentes electrónicos
        figure
          img(src='@/assets/curso/temas/t1/f3.png', alt='')

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Componentes electrónicos

    .row.justify-content-center.align-items-center.mb-5
      .col-md-5
        img(src='@/assets/curso/temas/t1/f4.png', alt='dispositivos electrónicos')
      .col-md-7
        p Al momento de desarrollar una PCB hay que tener en cuenta que en ella intervienen diferentes componentes elementales sin los cuales no sería posible su funcionamiento. A través del ensamble y la ubicación de los componentes del circuito electrónico es posible conocer el objetivo para el cual ha sido diseñado.
          br
          br
          |A continuación, se presentan los componentes más importantes que intervienen en el desarrollo de una PCB:

    .tarjeta.tarjeta--gris.p-4.mb-5
      PasosB.color-acento-botones
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Resistencias
            p Son el componente pasivo más común en cualquier circuito eléctrico. Su función es establecer una relación entre intensidad eléctrica y tensión. Es difícil pensar una PCB que no contenga alguna resistencia, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f5.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Condensadores
            p Los condensadores son componentes frecuentes en filtrado, su función es el desacoplamiento de las señales. Los condensadores cerámicos dan rangos de 270pF a 47uF y son los más utilizados, para capacitancias mayores hay condensadores electrolíticos de 22uF a 470uF que cuentan con polaridad. También hay condensadores de tantalio que se encuentran en rangos de 10uF a 470uF, sin embargo, hay que tener en cuenta que su costo es más elevado, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f6.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Inductancias
            p El tercer y último elemento pasivo son las inductancias o bobinas en las cuales la alteración de la magnitud es equivalente al voltaje, siendo su comportamiento contrario al de los condensadores. Su uso es menos recurrente en circuitos de grado inicial, sin embargo, son elementos ampliamente empleados para filtrado, cambios de tensión y construcción de circuitos osciladores, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f7.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Diodos
            p Componente electrónico que presenta una resistencia muy superior al paso de la electricidad en un sentido que en el otro.
          .col-md-4
            img(src='@/assets/curso/temas/t1/f8.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Diodos rectificadores
            p Son diodos de baja velocidad que cuentan con altos valores de intensidad. Usualmente son utilizados en aplicaciones de potencia como conversores AC-DC, rectificadores, o diodos de 
              em flyback 
              | para proteger la electrónica de cargas inductivas. No están indicados para aplicaciones superiores a 10 Khz y tienen una caída de tensión de 0.7V, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f9.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Diodos tipo zener
            p Es un diodo de silicio diseñado para trabajar en zona inversa. Su principal función es, al polarizarse de forma inversa, imponer una tensión constante y casi invariante a variaciones de carga o temperatura. Son parte fundamental de reguladores de tensión, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f10.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Diodos Schottky
            p Diodos que sustituyen la unión de semiconductores P-N por una unión semiconductor metal. Su función principal es proporcionar una velocidad de conmutación rápida, y una menor caída de tensión. Como desventaja, tienen una menor capacidad de conducción de corriente, y soportan menores tensiones en inverso. (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f11.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Led
            p Se conoce también como diodo emisor de luz (
              em Light Emitting Diode
              | ), es un diodo en que el cambio de estado de los electrones se emplea para emitir luz. Los hay de distintos tamaños y colores, y están determinados por la caída de tensión para la que han sido diseñados, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f12.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Varistor
            p Un varistor (
              em variable resistor
              | ) es un elemento electrónico cuya resistencia se reduce una vez se incrementa el voltaje que se le aplica. Generalmente son empleados como limitadores de picos de tensión. Su confiabilidad se ve reducida ya que tienden a degradarse, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f13.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Cristales
            p Los cristales o resonadores sirven para producir frecuencias, que después se emplean en los demás de dispositivos como procesadores. Se encuentran entre 3.2 MHz y 400 MHz, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f14.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Transistores
            p Se usan principalmente como amplificadores o interruptores eléctricos.
          .col-md-4
            img(src='@/assets/curso/temas/t1/f15.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Transistores BJT
            p Entre los transistores NPN, los de uso más frecuente son el 2N3904 para una tensión de 40V y 0.2A, y el 2N2222 para 40V y hasta 1A. En formato PNP están los equivalentes 2N3906 de 40V y 0.2A, el 2N2905/2N2907 para 40V y 0.6A, así como el BC807, para 45V y 0.5ª, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f16.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Transistores Mosfet
            p Para el canal -N es ampliamente utilizado el AO3402 A29T, para 30V y hasta 4A. Para el canal- P se utiliza el AO3401 A19T para 30V y hasta 4.2ª, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f17.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Reguladores de voltaje
            p Se utilizan para establecer una tensión constante, normalmente son usados para alimentar un dispositivo, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f18.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Amplificadores operacionales
            p Son de gran utilidad, ya que sirven para comparar tensiones, también pueden emplearse en amplificadores, sumadores, integradores, entre otros, (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f19.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Optoacoplador
            p Empleado para conectar dos piezas electrónicas manteniendo el aislamiento galvánico entre ellas y transmitiendo la información a través de luz.
          .col-md-4
            img(src='@/assets/curso/temas/t1/f20.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Fusibles
            p Son elementos de protección para los dispositivos, producen una ruptura cuando pasa una corriente no apta para estos.
          .col-md-4
            img(src='@/assets/curso/temas/t1/f21.svg', alt='')
        .row.justify-content-around(titulo="")
          .col-md-6.mb-4.mb-md-0
            h4 Micro interruptores
            p Algunos son de enclavamiento (Interruptores) y otros de acción temporal (Pulsadores), se pueden encontrar abiertos o cerrado,. (Llamas, 2020).
          .col-md-4
            img(src='@/assets/curso/temas/t1/f22.svg', alt='')

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Técnicas de ensamble

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.trright.zi1.tarjeta(style="background-color: rgba(32,203,125,.15)").p-5
        p Según (Jordana, 2018): “el diseño de PCBs cuenta con un área en constante desarrollo debido a que cada día los elementos son más pequeños, con mayor cantidad de pines y con frecuencias de reloj más altas.” Por ello, es necesario tener un plan que cuente con la implementación de dispositivos y tecnologías cómo FPGAs, DSPs, sensores digitales, entre otros elementos que se requieren para conocer bien cuáles son las técnicas implementadas, además del funcionamiento de los programas de diseño.
        p.mb-0 Para ello se define el proceso adecuado para el desarrollo de las PCB’s. 
      .col-md-4.zi2
        img(src='@/assets/curso/temas/t1/f23.svg', alt='circuito impreso')

    p Se presentan los elementos que deben ser considerados en las técnicas de ensamble:

    .row.justify-content-center.mb-5
      .col-md-9
        TabsA.color-secundario.mb-5
          .tarjeta.p-4(titulo="Diseño", style="background-color: #E5E7F2")
            p En el Manual OrCAD Layout (s.f), se afirma que: “en la actualidad, el método de diseño se hace por medio de herramientas CAD idóneas para este objetivo. Las herramientas CAD (Diseño Asistido por Computador, de sus siglas en inglés #[em Computer Aided Design]) se asocian con el dibujo”; este método facilita, en gran medida, la elaboración del circuito impreso porque modela y simula su funcionamiento. El diseño CAD es empleado mayormente en dibujo, y cuenta con herramientas útiles que mejoran el rendimiento y evitan que, durante el montaje físico, se presenten inconvenientes en su rendimiento. Algunos de los programas para el diseño más usados mundialmente son: ALTIUM, Designspark, EAGLE, KICAD, entre otros.
              br
              br
              |También es necesario tener en cuenta los dos tipos de diseño que intervienen: Diseño esquemático y Diseño Layout (Board).
          .tarjeta.p-4(titulo="Disposición <br> de elementos", style="background-color: #E5E7F2")
            p Esta etapa se inicia con el cálculo de su tamaño máximo para que la disposición de los elementos cuente con exactitud en la PCB, luego es necesario ubicar los componentes, inicialmente los de entrada/salida, de acuerdo al diseño que se haya realizado anteriormente, para finalmente agruparlos por bloques lógicos con el fin de reducir las trazas de conexión para que las pistas sean más cortas y de esta manera se reduzcan los efectos resistivos que afecten el funcionamiento, (Bravo, 2018).
      .col-md-3
        img(src='@/assets/curso/temas/t1/f24.png', alt='tarjetas e integrados')
    p.mb-5(data-aos='fade-right') Lo invitamos a ver el siguiente video, para ampliar la información sobre las placas.

    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    
    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Serigrafía

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.trright.zi1.tarjeta(style="background-color: #ffeed4").p-5
        p La serigrafía, es la técnica que permite depositar la pasta para soldar, en los puntos donde se posicionan los componentes.
      .col-md-4.zi2
        img(src='@/assets/curso/temas/t1/f25.svg', alt='circuito impreso')

    p Las técnicas empleadas en la serigrafía, son:

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="Impresión serigráfica")
        .row.align-items-center.justify-content-around
          .col-md-3
            img(src='@/assets/curso/temas/t1/f26.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Según (Contaval, 2016) “Esta técnica utiliza tintas especiales resistentes al grabado para marcar el patrón en la capa de cobre. La pintura se puede aplicar con plantillas o con un plotter específico para PCB’s.” y requiere que al finalizar la pieza sea limpiada con productos químicos para eliminar el cobre sobrante.  
      .py-4.py-md-5(titulo="Fotograbado")
        .row.align-items-center.justify-content-around
          .col-md-3
            img(src='@/assets/curso/temas/t1/f27.png', alt='')
          .col-md-6.mb-4.mb-md-0
            p Se utiliza luz ultravioleta (UV) para transferir el patrón a la placa por medio de la transparencia en negativo. Las placas deben ser fotosensibles, y requieren de una capa de cobre cubierta con una resina fotosensible, para que se transfiera la transparencia del patrón. En las zonas en las que la transparencia deja pasar la luz UV, la resina reacciona a ella, (Jordana, 2018)

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Otros elementos de la tarjeta de circuito

    .col-md-10.mx-auto.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t1/f28.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Como se ha mencionado, las tarjetas de circuito se componen de diferentes elementos que en conjunto le permiten realizar el trabajo para el que han sido diseñadas, entre ellos, se encuentran: componentes electrónicos, técnicas de ensamble, placas, máscara de soldado, serigrafía, pads y pistas, encapsulados, patrones de circuito, documentación de diseño y polaridad de componentes.
            br
            br
            |Los conceptos de Pads y pistas, encapsulados, patrones de circuito, documentación de diseño y polaridad de componentes, son de gran relevancia, veamos:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--gris")
      .row.justify-content-around.align-items-center.bg-r-c(titulo="Pads y pistas")
        .col-md-7.mb-4.mb-md-0
          p En el blog de herramientas tecnológicas profesionales ‘HETPRO’ (Torres, 2015) indica que: “La separación mínima entre pistas depende de la tensión que estas soportan. Por ello es necesario tener en cuenta que para tensiones de trabajo digitales (5V-10V) una separación mínima de 0,3mm es suficiente. Además, en el trazado de las pistas es importante evitar ángulos de 90º y no se deben pasar pistas entre dos terminales de componentes activos”.
          p Cuando dos o más pistas discurren paralelas debe mantenerse la distancia de separación mínima. Es recomendable utilizar 
            em softwares 
            | para determinar y calcular las dimensiones de pistas a usar según parámetros solicitados; ya que estas dimensiones, mal diseñadas, podrían incrementar el valor de una resistencia no deseada, causar problemas por caídas de tensión o servir de fusible al limitar el paso de corriente. Todo material conductor presenta una resistividad propia y según las dimensiones del mismo, tendremos una resistencia eléctrica, (Bravo, 2018)
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t1/f29.png', alt='imagen relacionada')
      .row.justify-content-around.align-items-center.bg-r-c(titulo="Encapsulados")
        .col-md-7.mb-4.mb-md-0
          p La función del encapsulado es proteger los componentes a través de la aplicación de un polímero orgánico que proporciona aislamiento, salvaguardando los componentes de factores externos como temperaturas extremadamente altas, exceso de humedad o frío, baja resistencia de aislamiento o corrosión del conductor. Según (Díaz, 2021): “La encapsulación se da por medio de una resina que proporciona una fuerte protección a golpes físicos o productos químicos que puedan dañar los componentes y a su vez mejora su rendimiento eléctrico”.
          h4 ¿Cómo se realiza el encapsulado?
          p Para el blog de electrónica Moko technology (2021): “Se coloca la placa de circuito impreso en un recipiente abierto, conocido también como olla abierta, donde se deposita el líquido que contiene un compuesto que acelera el proceso de endurecimiento y que al momento de solidificarse juega un papel protector.” Esto permite determinar de qué forma proteger la placa de los componentes que tiene el líquido vertido, pueden ser con un recubrimiento de uretano, para mejorar la protección frente a los productos químicos o mediante epoxi y silicona para proteger la placa de altas temperaturas.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t1/f30.png', alt='imagen relacionada')
      .row.justify-content-around.align-items-center.bg-r-c(titulo="Patrones de circuito")
        .col-md-7.mb-4.mb-md-0
          p Al momento verificar el circuito se deben tener en cuenta sus patrones y la disposición de las bobinas y transformadores que debe tener una orientación perpendicular con el fin de evitar las influencias magnéticas sobre otros circuitos; ya que, en un solenoide, el campo magnético se concentra sobre su eje axial. Para los circuitos de alta frecuencia, es recomendable que las curvas de las pistas no superen un ángulo de 45°, ya que podría producirse una autoinducción sobre la misma, deformando su señal. Para evitar las interferencias electromagnéticas (EMI) y brindar protección eléctrica, se deben separar los planos de tierra analógico y digital o utilizar acoplamientos (transformador, opto acopladores, aisladores de radio frecuencia, etc). Además, para circuitos susceptibles, se debe dejar espacio para fijar las jaulas de Faraday, (Bravo, 2018)
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t1/f31.png', alt='imagen relacionada')
      .row.justify-content-around.align-items-center.bg-r-c(titulo="Documentación de diseño")
        .col-md-7.mb-4.mb-md-0
          p En la parte de documentación se puede visualizar el uso del formato de archivo Gerber, el cual fue desarrollado por Gerber Systems Corporation, empresa fundada por Joseph Gerber. Es un formato de archivo estándar de la industria electrónica utilizado para comunicar información de diseño a la fabricación de muchos tipos de placas de circuito impreso y es considerado un componente central en la cadena de suministro de fabricación electrónica. El formato Gerber contiene la información necesaria para la fabricación de las PCB, sus ficheros se componen tanto de las dimensiones de la placa, las pistas existentes y los pads de los componentes en la PCB, como de la información geométrica, las trazas sobre el cobre y los agujeros, (Bravo, 2018).
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t1/f32.png', alt='imagen relacionada')
      .row.justify-content-around.align-items-center.bg-r-c(titulo="Polaridad de componentes")
        .col-md-7.mb-4.mb-md-0
          p Se debe prestar particular atención a los elementos de polaridad a lo largo del proceso de procesamiento de PCB, pues un error en este sentido puede causar accidentes que representan el fracaso de todo el proceso. Para ello es importante entender el concepto de polaridad, refiriéndose a que el positivo y el negativo o el primer pin del componente, y el positivo y el negativo o el primer pin del PCB están en la misma dirección. Si la dirección del componente y la placa PCB no coinciden, se denomina falla inversa, (PCB Future, 2021).
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t1/f33.png', alt='imagen relacionada')

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.2 Tratamiento térmico

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.zi2(style="background-color: rgba(32,203,125,.29)").p-5.rounded-3
        p Una de las mayores preocupaciones de los diseñadores de PCB’s es la generación de calor que produce el circuito impreso y cómo abordar su disipación, este aspecto es fundamental, ya que la implementación de las placas con mayor rendimiento en superficies cada vez más pequeñas hace que los componentes queden más cerca unos de otros y las pistas sean cada vez más reducidas, produciendo un incremento de calor en los componentes y generando fallas en el dispositivo. 
        p.mb-0 Los efectos de la temperatura son factores determinantes en el tratamiento térmico, a continuación, podrá identificar en qué consiste cada uno de ellos:
      .col-md-4.trright-zi1.tarjeta
        img(src='@/assets/curso/temas/t1/f34.svg', alt='circuito impreso')

    .row.justify-content-center.mb-5
      .col-md-9
        TabsA.color-acento-botones.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Efectos del calor")
            p Para la Revista española de electrónica, (Revista española de electrónica 2017): “Las altas temperaturas por pérdidas resistivas que pueden ampliarse en entornos difíciles, afectan las propiedades eléctricas, como la impedancia, y provocan un comportamiento impredecible en el circuito. Las distintas tasas de expansión térmica de los componentes y la PCB generarán tensiones de tracción y de corte y, en el caso del ciclo térmico, fatiga, fragilidad y fallos”. 
            p Si no se toma en cuenta la seguridad de los componentes, las temperaturas pueden ser tan altas en los sustratos, que pueden llegar a dañarse por completo, fundiéndose o incluso quemándose, además puede comprometer la integridad de las soldaduras o de las propias capas de la placa, debido a la expansión y contracción sus materiales.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Niveles de <br> temperatura - <br> técnicas de reflujo")
            p El proceso de reflujo se visualiza en etapas antes de su implementación, y consiste en la aplicación de pasta de soldadura en la tarjeta impresa una vez se depositan los componentes electrónicos para luego introducir la placa a un horno de reflujo que realiza el proceso de calentamiento con una temperatura determinada, suficiente para adherir los componentes a la placa de circuito. Para ello, es importante que la soldadura sea de la calidad requerida, y que cada uno de los puntos (fijaciones) sean consistentes para lograr un buen acabado.
      .col-md-3
        img(src='@/assets/curso/temas/t1/f35.png', alt='placa electrónica')

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Etapas en el proceso de reflujo

    p La información que se presenta a continuación, le permitirá identificar las etapas del proceso de reflujo en el marco de los niveles de temperatura.

    .col-md-8.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 2
        br
        em Etapas en el proceso de reflujo
      ImagenInfografica.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t1/f36.svg', alt='Texto que describa la imagen')
        .tarjeta.color-acento-botones.p-3(x="20%" y="20%" numero="1")
          .h5.mb-2 Precalentamiento
          p Consiste en precalentar la placa con el montaje de 100 a 150 grados centígrados, controlando el parámetro más crítico que es del aumento progresivo de 1 a 4 grados centígrados por segundo. Esto con el fin de minimizar el choque térmico que pueden sufrir algunos componentes. El objetivo de que se realice progresivamente es evitar que la placa tenga un calentamiento excesivo que ocasione que la soldadura se disperse. (Pardo, 2005).
        .tarjeta.color-acento-botones.p-3(x="50%" y="80%" numero="2")
          .h5.mb-2 Secado
          p En esta etapa se asegura que la pasta de soldadura se seque completamente antes de llegar a la temperatura de reflujo. Se caracteriza por llevar el montaje a temperaturas entre 150 a 170 grados centígrados, en un lapso de tiempo entre 60 y 120 segundos. Esta etapa activa la  estabilización térmica de la placa para asegurar que la dispersión de calor sea homogénea mientras el circuito impreso entra en la zona de reflujo. (Pardo, 2005).
        .tarjeta.color-acento-botones.p-3(x="80%" y="20%" numero="3")
          .h5.mb-2 Reflujo
          p La pasta de soldar se eleva a una temperatura mayor que su punto de fusión, la temperatura puede llegar alrededor de 183 grados centígrados y debe ser superada en alrededor de 20 grados centígrados para asegurar un reflujo de buena calidad en cada punto de soldadura de la tarjeta. La cantidad de tiempo que la soldadura está por encima de su punto de fusión se conoce como tiempo de “mojado” (
            em wetting time
            | ), el cual es alrededor de 30 a 60 segundos para la mayoría de las pastas. (Pardo, 2005).

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Enfriamiento de tarjetas de circuito impreso

    .row.justify-content-center.mb-5
      .col-md-5
        img(src='@/assets/curso/temas/t1/f37.png', alt='')
      .col-md-7
        p Según (Olmos, 2005): 
          b “En la etapa de enfriamiento el proceso debe ser lento para evitar cambios abruptos en la pasta de soldadura ya que si la misma está líquida puede causar una estructura granulada que conlleva a tener puntos débiles en el montaje. La tasa de enfriamiento requiere ser controlada entre 1 y 2 grados centígrados por segundo.”
        p: b Conducción y convección
        p Para la empresa Proto Electronics, (Proto-Electronics.Com, 2019):,
        p: b “Una elevada temperatura de la PCB puede gestionarse extrayendo el calor producido y transfiriéndolo a otras zonas de la misma. Si el componente caliente está montado en la parte superior del PCB y tiene una superficie lo suficientemente amplia, puede instalarse un disipador térmico que extraiga el calor primero por conducción y luego por convección”. 

    .col-md-8.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4.mb-4
        p.mb-0 Esta técnica es usada con regularidad por los diseñadores y consiste en insertar una gran cantidad de vías térmicas en la PCB para transferir el calor desde el componente caliente hasta una capa de cobre situada en la parte superior desde donde puede transferirse posteriormente a un disipador térmico adecuado.

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Condensación e inmersión
    
    .row.justify-content-center.mb-5
      .col-md-7
        p D. Gudeczauskas, G. Milad, (1997) nos dice que:
        p "los métodos de revestimiento o de acabado de la superficie más utilizados para proteger las PCB son la plata de inmersión (IAg), estaño de inmersión (ISn), revestimiento de oro de inmersión de níquel no electrolítico (ENIG) y oro de inmersión de paladio no electrolítico de níquel no electrolítico (ENEPIG). Estos métodos mejoran el rendimiento y la confiabilidad del cobre, ya que protegen los componentes de la corrosión y la oxidación superficial de esta sustancia".
        .cajon.color-acento-botones.p-4.mb-4
          p.mb-0 Asimismo es indispensable conocer los componentes de la soldadura, ya que existen regulaciones internacionales que establecen su correcta utilización. En el simposio internacional sobre microelectrónica, (Tdgk2005, 2008) se destacó que “ahora se utilizan nuevos compuestos de soldadura para lograr el cumplimiento de la directiva RoHS en la UE que restringe el uso de plomo. Uno de estos compuestos sin plomo es el SN100CL, que contiene 99,3% de estaño, 0,7% de cobre, 0,05% de níquel y un valor nominal de 60 ppm de germanio”.
      .col-md-5
        img(src='@/assets/curso/temas/t1/f38.png', alt='')

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Instrumentos de medición térmica

    .row.justify-content-center.align-items-center.mb-5
      .col-md-2
        img(src='@/assets/curso/temas/t1/f39.svg', alt='')
      .col-md-10
        p Se han desarrollado métodos para identificar y medir los puntos conflictivos en las placas de circuitos impresos. Los métodos principales de medida del calor se dividen en dos grupos: con y sin contacto. La medición con contacto requiere el uso de sondas o el montaje de termopares. Las propias sondas pueden afectar la lectura de la temperatura, ya que a menudo tienen una masa térmica mayor que los componentes que comprueban, por lo que la lectura es inexacta. Cuando se utilizan sondas para comprobar componentes con una masa térmica reducida, contribuyen a disipar el calor, (Proto-Electronics.Com, 2019).
    
    .col-md-6.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 3
        br
        em Las mediciones de las temperaturas de funcionamiento y las simulaciones térmicas
      figure
        img(src='@/assets/curso/temas/t1/f40.png', alt='')

    .col-md-10.mx-auto.mb-5
      .cajon.color-acento-contenido.p-4
        p.mb-0 Las cámaras de infrarrojos ofrecen ventajas importantes respecto a las técnicas de medida por contacto tradicionales. Las imágenes termográficas de infrarrojos son las únicas con las que se obtienen datos fiables en condiciones de funcionamiento normales. Estas pueden influir significativamente en la producción de placas de circuitos impresos, tanto en el diseño como en las pruebas de producción. (Proto-Electronics.Com, 2019).
    
    .col-md-6.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 4
        br
        em Imágenes térmicas de la PCB
      figure
        img(src='@/assets/curso/temas/t1/f41.png', alt='')

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 1.3 Normativa técnica

    .bg1
      .col-md-10.mx-auto 
        .tarjeta.color-secundario.p-3.mb-5.d-flex.justify-content-center
          .row.justify-content-center.align-items-center
            .col-3.col-sm-2.col-lg-1
              img(src="@/assets/curso/temas/t1/f42.svg")
            .col
              .row.justify-content-between.align-items-center
                .col.mb-3.mb-sm-0
                  p Para entender la importancia de una norma aplicada al diseño, ensamble y documentación de tarjetas electrónicas lo invitamos a leer el documento “Normativa técnica”. Para acceder al documento haga clic en Descargar.
                .col.mb-3.mb-sm-0
                  a.boton.color-acento-contenido.texto-blanco(:href="obtenerLink('downloads/CF07_839317_Anexo1.pdf')" target="_blank" type="application/pdf")
                    span Descargar 
                    i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
