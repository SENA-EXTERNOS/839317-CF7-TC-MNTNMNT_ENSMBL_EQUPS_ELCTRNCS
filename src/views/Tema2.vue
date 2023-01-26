<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Ensamble y documentación de componentes sobre tarjetas electrónicas

    .col-md-10.mx-auto.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t2/f1.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Estos procesos se basan en la normatividad recomendada IPC-J-STD-075-spanish: clasificación de componentes electrónicos no-ic para procesos de ensamble:
          p.mb-0 Esta norma proporciona métodos de ensayo para clasificar las limitaciones del proceso térmico en el peor de los casos para los componentes electrónicos. La clasificación se refiere a los perfiles de soldadura por ola y por reflujo habituales en la industria, incluido el procesamiento sin plomo, (IPC Build Electronics Better, 2008).

    separador

    #t_2_1.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.1 Equipos de ensamble electrónico

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.trleft-zi1.tarjeta
        img(src='@/assets/curso/temas/t2/f2.svg', alt='circuito impreso')
      .col-md-8.zi2(style="background-color: #E5E7F2")
        p Los equipos actuales para el ensamblaje electrónico son verdaderos laboratorios tecnológicos en líneas de producción de tarjetas PCB, existen diferentes proveedores y marcas, minimizando los tiempos de fabricación con altos volúmenes de producción y supliendo las necesidades del mercado más rápidamente.
        p.mb-0 A continuación, se describen las fases principales de un laboratorio: 

    .row.justify-content-center.mb-5
      .col-lg-5
        .crd_hover_txt.color-acento-botones
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/t2/f3.jpg', alt='')
          .crd_hover_txt--body
            h4.text-center Trazador de placas de circuitos
            p.text-center.text-small.mb-0 El trazador de placas de circuitos es aquel que realiza la placa con perforaciones de orificios y las pistas necesarias por medio de un sistema de fresado que ayuda a la separación final de las placas, obteniendo una muy alta calidad. Este método se puede realizar por arranque de material o por medio de láser, obteniendo resultados similares.
      .col-lg-5
        .crd_hover_txt.color-acento-botones
          .crd_hover_txt--img
            figure
              img(src='@/assets/curso/temas/t2/f4.jpg', alt='')
          .crd_hover_txt--body
            h4.text-center Soldadura de placas
            p.text-center.text-small.mb-0 Las placas pueden ser soldadas posteriormente para continuar con el ensamble, ubicando los componentes necesarios y aplicando luego una pasta de soldadura por medio de una impresión acompañada de una interfaz de usuario que indica paso a paso el procedimiento. Esta técnica se apoya en una cámara que permite visualizar el proceso e inspeccionar la correcta aplicación de soldadura, terminando el proceso con un tratamiento en un horno de reflujo. Todo el procedimiento está soportado por un 
              em software 
              | que integra cada una de las etapas y da la posibilidad de obtener procesos estandarizados y precisos.

    p Ahora lo invitamos a conocer algunas de las técnicas, características, métodos de uso y configuraciones, de equipos de ensambles electrónicos:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--secundario bg-c-r")
      .row.justify-content-around.align-items-center(titulo="Técnicas y sistemas de microscopias")
        .col-md-7.mb-4.mb-md-0
          p El microscopio se usa para diferentes aplicaciones en la electrónica. En el control de calidad se usan microscopios digitales de instalación fija que ofrecen al usuario más posibilidades de orientación, lo cual le permite comprobar cada segmento de la placa individualmente, se recomienda verlo a través de una pantalla. Esta técnica permite la comprobación de cortocircuitos o alguna línea cortada comparando un patrón de contornos y la continuidad en orificios, evitando los usuales contactos en las soldaduras con los pines y pistas contiguas.
          p En soldaduras frías suele ser muy útil, dado que no se establecen contactos entre los pines de conexión y las partes. Cabe aclarar que los microscopios se utilizan en el ensamblaje de PCB, pero también en el mantenimiento de las mismas.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t2/f5.png', alt='Texto que describa la imagen')
      .row.justify-content-around.align-items-center(titulo="Características de los accesorios")
        .col-md-7.mb-4.mb-md-0
          ul.lista-ul--color
            li
              i.fas.fa-circle
              | Los accesorios presentan características dependiendo de sus usos, algunos son de corte (láser o por arranque de material), de unión (soldaduras) o de recubrimiento (capas de materiales). 
            li 
              i.fas.fa-circle
              | Los accesorios de corte, tienen características con filo y diferentes formas, dependiendo si es de perforado o de fresado.
            li 
              i.fas.fa-circle
              | Los de unión, tienen presencia de temperaturas altas y suelen ser peligrosos para los usuarios si no se tiene la protección necesaria.
            li 
              i.fas.fa-circle
              | Los de recubrimiento, son aquellos que dan acabados finales y protecciones especiales a los componentes.

        .col-md-3
          figure
            img(src='@/assets/curso/temas/t2/f6.png', alt='Texto que describa la imagen')
      .row.justify-content-around.align-items-center(titulo="Métodos de uso")
        .col-md-7.mb-4.mb-md-0
          p Los equipos actuales requieren de un conocimiento técnico y de herramientas ofimáticas por parte del usuario, son operados por medio de manuales y fichas, las cuales deben ser difundidas con anterioridad. Se requiere de habilidad para el montaje y desmonte de piezas y partes en los equipos, además de interpretación de planos eléctricos. Los equipos pueden ser operados de forma manual o automática, reconociendo que en ambos casos se requiere de la intervención humana y reconociendo los principios de funcionamiento y sistemas propios de cada equipo. 
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t2/f7.png', alt='Texto que describa la imagen')
      .row.justify-content-around.align-items-center(titulo="Accionamiento y configuración")
        .col-md-7.mb-4.mb-md-0
          p Cada equipo requiere un accionamiento y configuración específico, siempre se debe apoyar el uso en las recomendaciones de los fabricantes, siguiendo los procedimientos que se sugieren en la empresa, esto depende de los equipos que se tengan para realizar las intervenciones, pero siempre se tiene que preservar la seguridad tanto de los usuarios como de los equipos, sabiendo que se operan con conexiones especiales y que pueden ocasionar lesiones.
        .col-md-3
          figure
            img(src='@/assets/curso/temas/t2/f8.png', alt='Texto que describa la imagen')

    separador

    #t_2_2.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.2 Riesgo en ensamble electrónico

    .col-md-10.mx-auto.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t2/f9.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p La electricidad es la principal fuente de energía de los dispositivos eléctricos y electrónicos, la cual es de difícil detección y puede ocasionar accidentes considerables a las personas o a la infraestructura, tales como incendios, quemaduras, caídas a diferentes niveles, golpes y choques eléctricos.
          p.mb-0 Aunque este tipo de accidentes no suelen presentarse con frecuencia, cuando ocurren revisten un alto grado de afectación al organismo con consecuencias graves que pueden significar hasta la pérdida de la vida. La gravedad del daño depende de diferentes factores asociados a las tensiones que manejan los aparatos y al tipo de cuidado que se debe tener para evitar los accidentes, aunque no existe ninguna medida que evite la presencia de los riesgos.

    p A continuación, se presentan los riesgos en ensamble electrónico.

    .col-md-10.mx-auto.mb-5
      .titulo-sexto.color-acento-contenido(data-aos='fade-right')
        h5 Figura 5
        br
        em Riesgo en ensamble electrónico
      
      ImagenInfograficaB.color-secundario.mb-5
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/t2/f10.svg', alt='Texto que describa la imagen')
        .tarjeta.color-acento-botones.p-4(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
          h4.cst Concepto
          p.cst Los riesgos están relacionados con las situaciones que pueden ocasionar o poner en peligro la integridad de las personas, en electrónica no se es ajeno a esta situación dado que se puede trabajar con altas temperaturas, exposición a vapores o humos, contacto con elementos cortopunzantes, agentes químicos y tensiones eléctricas.
        .tarjeta.color-acento-botones.p-4(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
          h4.cst Descargas electrostáticas
          p.cst Son aquellas descargas de electricidad estática hacía la tierra, en ellas se evidencia la transferencia de cargas electrostáticas entre dos cuerpos con diferentes potenciales, produciendo una transferencia que puede ser por un contacto directo. Esto ocurre cuando una persona toca un objeto cuyo potencial eléctrico es menor y se pasa una corriente. Es necesario realizar descargas electrostáticas en los equipos para evitar daños, además de utilizar las pulseras destinadas para este fin, así como el uso de superficies que eviten este tipo de descargas.
        .tarjeta.color-acento-botones.p-4(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
          h4.cst Sobrecargas eléctricas
          p.cst Primero es necesario entender que la sobrecarga eléctrica es un exceso de energía en una corriente a través de un circuito, se puede producir al conectar demasiados dispositivos a una misma instalación, sobrecargándola y propiciando fallas.
        .tarjeta.color-acento-botones.p-4(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
          h4.cst Prevención de descargas y sobrecargas
          p.cst Para evitar este tipo de daños, se recomienda utilizar el 80% de la capacidad instalada de la red, para no sobrecargarla, sin dejar de lado las normas para la instalación y construcción de los circuitos eléctricos. Si se desconoce el diseño y construcción de la instalación, es importante evitar realizar demasiadas conexiones en un mismo punto.
        .tarjeta.color-acento-botones.p-4(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
          h4.cst Mantenimiento de accesorios
          p.cst No es suficiente tener un plan de mantenimiento en la empresa, se requiere mantener los accesorios en buen estado para poder implementarlo de forma eficiente. Para ello tendremos en cuenta las siguientes claves:
          ul.lista-ul--color
            li
              i.fas.fa-circle
              p.mb-0 
                b Limpieza de las piezas: 
                | al mantener las piezas limpias se evitan cortos, deterioro y malos contactos, evitando la acumulación de polvo y partículas. Se recomienda programar una limpieza periódica, puede ser semanal, realizar una higienización, de ser posible diaria, para evitar deterioro y ayudar en la seguridad para evitar el contagio de virus.
            li
              i.fas.fa-circle
              p.mb-0 
                b Desarrollar un sistema centralizado y confiable: 
                | es necesario no solo para los equipos sino para los accesorios, tener en cuenta las fechas de vencimiento, condiciones ambientales de almacenamiento, rotación por demanda, limpieza de zonas, entre muchos otros factores, llevando un control detallado que ayude a proporcionar alertas para una rotación adecuada. Las herramientas también son incluidas en este sistema, para inspeccionarlas y darles un mantenimiento adecuado.
            li
              i.fas.fa-circle
              p.mb-0 
                b Indicaciones de los fabricantes: 
                | es importante seguir las indicaciones de los fabricantes para hacer un correcto uso y alargar la vida útil de los accesorios, dado que cada uno puede tener un uso específico, en caso de alguna duda es necesario consultar los manuales, fichas e información proporcionada por estos.
            li
              i.fas.fa-circle
              p.mb-0 
                b Conseguir un proveedor de confianza: 
                | la confiabilidad de un proveedor ayuda a la consulta de información relevante para el mantenimiento de los accesorios, se recomienda apoyarse en estos por su experiencia, diligencia y veracidad de la información, así como en el correcto y rápido aprovisionamiento de los accesorios.
            li
              i.fas.fa-circle
              p.mb-0 
                b Servicio técnico: 
                | es un aspecto relevante para brindar apoyo y confianza en caso de requerir insumos, repuestos, equipos, etc. La rápida respuesta de este servicio facilita las labores de la organización.
        .tarjeta.color-acento-botones.p-4(x="20%" y="20%" tooltip="tooltip de max 35 caracteres" numero="1")
          h4.cst Compatibilidad electromagnética
          p.cst Es la capacidad que presenta un equipo o un sistema para no causar interferencias electromagnéticas a otros y funcionar correctamente a su vez ante las perturbaciones que pueden presentarse en su entorno. Se resume en dos conceptos básicos:
          ul.lista-ul--color
            li
              i.fas.fa-circle
              p.mb-0 
                b EMI: 
                em Electromagnetic Interference 
                | (Emisiones)
            li
              i.fas.fa-circle
              p.mb-0 
                b EMS: 
                em ElectroMagnetic Susceptibility 
                | (Inmunidad) 
          p.cst La importancia de la compatibilidad electromagnética se evidencia en el aumento de equipos electrónicos en ambientes hogareños e industriales, los cuales son cada vez más grandes y complejos en su operación y funcionamiento. También se presentan nuevas frecuencias de trabajo y aumento en las telecomunicaciones.


    separador

    #t_2_3.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.3 Soldadura en electrónica

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.zi2.tarjeta(style="background-color: #E5E7F2")
        p Es un proceso en el cual se unen dos o más piezas, fundiendo un material que aporta alguna sustancia igual o parecida a ellos. En electrónica se utilizan las soldaduras blandas, las cuales funden a menos de 200°C, encontrando la soldadura de estaño como la principal utilizada en este tipo de ensambles,. (IPC Build Electronics Better, 2010).
        p.mb-0 A continuación, se presentan algunas de las normas a tener en cuenta para la soldadura en electrónica:
      .col-md-4.trright.zi1
        img(src='@/assets/curso/temas/t2/f11.svg', alt='circuito impreso')

    TabsC.color-acento-contenido.mb-5
      .py-4.py-md-5(titulo="IPC-J-STD-001H: Requisitos para ensambles eléctricos y electrónicos soldados")
        .row.justify-content-around.align-items-center
          .col-md-3.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t2/f12.png', alt='')
          .col-md-6
            p IPC-J-STD-001H es reconocido mundialmente por sus criterios sobre procesos y materiales de soldadura. Actualizado con participantes de 27 países que proporcionan información y experiencia, la norma IPC-J-STD-001H trae los últimos criterios a la industria, incluyendo pautas sobre el uso de rayos X para inspeccionar condiciones de soldadura en orificios con soporte que no son visibles bajo ningún otro medio. Es imprescindible para aquellos en la industria electrónica con un interés en el proceso y los criterios de aceptación para ensambles eléctricos y electrónicos. (IPC Build Electronics Better, 2020)
      .py-4.py-md-5(titulo="IPC-J-STD-001HS: Suplemento del IPC J-STD-001H")
        .row.justify-content-around.align-items-center
          .col-md-3.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t2/f13.png', alt='')
          .col-md-6
            h4 Requisitos para ensambles eléctricos y electrónicos soldados para aplicaciones espaciales y militares de dispositivos Electrónicos
            p Esta norma establece los requisitos del proceso y los criterios de aceptación de los conjuntos electrónicos, (IPC Build Electronics Better, 2021)
      .py-4.py-md-5(titulo="Norma IPC-J-STD-001G-AM1: J-STD-001G-AM1-SP")
        .row.justify-content-around.align-items-center
          .col-md-3.mb-4.mb-md-0
            img(src='@/assets/curso/temas/t2/f14.png', alt='')
          .col-md-6
            p Provee requisitos para materiales de soldadura y procesos para ensambles, establece los requisitos del proceso y los criterios de aceptación de los conjuntos electrónicos, (IPC Build Electronics Better, 2010)

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Alineación y aceleradores

    .col-md-10.mx-auto.mb-5
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t2/f15.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p Los hilos de estaño más utilizados para realizar soldaduras son los eutécticos, en los que el punto de fusión es inferior al de los materiales que componen la aleación. Existen otras alternativas y aleaciones, cambiando las temperaturas de fusión de acuerdo a estos, (Vuelapluma S.L., 2007).<br><br>
          p.mb-0 A continuación, se presentan algunos de los componentes de los materiales de aleación y los aceleradores.

    .row.justify-content-center.mb-5
      .col-md-3
        .tarjeta.mb-5.p-4(style="background-color: #E0EFFB")
          .mb-4.mx-auto
            img.mx-auto(src='@/assets/curso/temas/t2/f16.svg' alt='AvatarTop', style='height:150px;width:auto')
            .p-4
              h6.text-center Estaño SnPB 60/40
              p.text-center Se compone de 60% de estaño y 40% de plomo, con un punto de fusión de 183°C.
      .col-md-3
        .tarjeta.mb-5.p-4(style="background-color: #E0EFFB")
          .mb-4.mx-auto
            img.mx-auto(src='@/assets/curso/temas/t2/f17.png' alt='AvatarTop' style='height:150px;width:auto')
            .p-4
              h6.text-center Estaño SAC305
              p.text-center Se compone de 96.5% de estaño, 3% de plata y un 0.5 de cobre, con un punto de fusión de 220°C.
      .col-md-3
        .tarjeta.mb-5.p-4(style="background-color: #E0EFFB")
          .mb-4.mx-auto
            img.mx-auto(src='@/assets/curso/temas/t2/f18.svg' alt='AvatarTop' style='height:150px;width:auto')
            .p-4
              h6.text-center Estaño SnPbAg
              p.text-center Se compone de 62% de estaño, 36% de plomo y 2% de plata, con un punto de fusión de 190°C.

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Métodos de uso

    .row.justify-content-center.align-items-center.mb-5
      .col-md-4.trleft-zi1.tarjeta
        img(src='@/assets/curso/temas/t2/f19.svg', alt='circuito impreso')
      .col-md-8.zi2(style="background-color: #E5E7F2")
        p Los métodos de uso se basan en la práctica y la experiencia de la persona que va a realizar el proceso de soldado, se recomienda tener en cuenta algunas consideraciones, en lo que se refiere a los materiales empleados.
        p.mb-0 A continuación, encontrará las recomendaciones de uso:

    .row.justify-content-center.mb-5
      .col-md-8
        LineaTiempoD.color-secundario
          p.text-small(numero="1" titulo="Estaño SnPB 60/40") Es el más utilizado en soldaduras electrónicas, pero contiene plomo, el cual es contaminante y tiende dejar de usarse cada vez más.
          p.text-small(numero="2" titulo="Estaño SAC305") Es la soldadura que mejor calidad brinda, lo que requiere calentar los componentes con relación a la soldadura anterior.
          p.text-small(numero="3" titulo="Estaño SnPbAg") Es una alternativa intermedia entre las soldaduras anteriores. 
      .col-md-4
        img(src='@/assets/curso/temas/t2/f20.png', alt='')

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Mantenimiento de herramientas

    p Para las herramientas se requiere de cuidado y buen uso, buscando alargar la vida útil de los equipos. Para ello se dan algunas recomendaciones generales.
    p A continuación, se presentan las recomendaciones y cuidados que se deberán tener con las herramientas de trabajo:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row.justify-content-center.align-items-center
        .col-md-8.mb-4.mb-md-0
          h4 Puntas soldadores
          p Trabajar las puntas de los soldadores a las temperaturas más bajas posibles.
        .col-md-4
          img(src='@/assets/curso/temas/t2/f21.svg', alt='')
      .row.justify-content-center.align-items-center
        .col-md-4
          img(src='@/assets/curso/temas/t2/f22.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          h4 Posición del soldador
          p Colocar el soldador en la posición recomendada y en una base adecuada, evitando accidentes, también permitir que el equipo descanse de forma adecuada.
      .row.justify-content-center.align-items-center
        .col-md-8.mb-4.mb-md-0
          h4 Limpieza
          p Limpiar constantemente la punta del soldador con una esponja húmeda.
        .col-md-4
          img(src='@/assets/curso/temas/t2/f23.svg', alt='')
      .row.justify-content-center.align-items-center
        .col-md-4
          img(src='@/assets/curso/temas/t2/f24.svg', alt='')
        .col-md-8.mb-4.mb-md-0
          h4 Almacenamiento soldadores
          p No almacenar los soldadores calientes, pueden ocasionar daños en los cables de conexión o conflagraciones por temperatura.
      .row.justify-content-center.align-items-center
        .col-md-8.mb-4.mb-md-0
          h4 Disposición del material
          p Evitar el exceso de material de soldadura y dejar los soldadores sobre los componentes electrónicos.
        .col-md-4
          img(src='@/assets/curso/temas/t2/f25.svg', alt='')

    h3.titulo-tercero(data-aos='fade-right')
      i.fas.fa-square.cab.me-2 
      | Accesorios, dispositivos, soldabilidad, retiro y limpieza de excesos 
      
    p Para la soldadura se requiere de accesorios, herramientas y dispositivos que faciliten el proceso, a continuación, se presentan algunos de ellos:
    
    SlyderA.tarjeta.bg-slider(tipo='b')
      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0.p-4
          h4 Accesorios y dispositivos
          p Para realizar la soldadura manual en electrónica, se utiliza el soldador tipo lapicero con su base, denominado de este modo por su forma similar de utilizarse en la mano, es conocido comúnmente como cautín. Para lograr una mejor soldadura se recomienda utilizar las bases con lupas, soportes, tapetes, etc. 
          p Las estaciones de soldadura dan la oportunidad de realizar trabajos automatizados y con una mayor precisión, porque utilizan tecnología y equipos especializados con técnicas que ayudan a la fabricación de las placas de los circuitos. Para esto se requiere de personal capacitado que opere correctamente los equipos. 
        .col-md-6
            img(src='@/assets/curso/temas/t2/f26.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0.p-4
          h4 Soldabilidad
          p Es una capacidad que tienen los materiales para ser unidos entre sí, utilizando soldaduras y las técnicas necesarias para ello, conociendo las propiedades y las características para evitar daños en los elementos.
          p Es importante saber que los materiales unidos deben de procurar una continuidad eléctrica entre los metales que se van a unir, para que funcionen los circuitos ensamblados.
        .col-md-6
            img(src='@/assets/curso/temas/t2/f27.png', alt='Texto que describa la imagen')
      .row.justify-content-center.align-items-center
        .col-md-6.mb-4.mb-md-0.p-4
          h4 Retiro y limpieza de excesos
          p Para realizar el retiro de los excesos se utiliza un desoldador, el cual se aplica para fundir el estaño y se retira por medio de aspirado, es posible que este proceso se deba realizar varias veces para evitar los excesos de material en zonas muy pequeñas.
        .col-md-6
            img(src='@/assets/curso/temas/t2/f28.png', alt='Texto que describa la imagen')

    separador

    #t_2_4.titulo-segundo.color-acento-contenido(data-aos='fade-right')
      h2 2.4 Sistemas de información

    .col-md-10.mx-auto.mb-5
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5
        .bloque-texto-g__img(
          :style="{'background-image':`url(${require('@/assets/curso/temas/t2/f29.jpg')})`}"
        )
        .bloque-texto-g__texto.p-4
          p.mb-0 Un sistema de información es donde se pueden consignar todos los documentos de un mismo proceso sin limitar ninguno de los archivos que puedan existir en este. Tiene la característica de compilar archivos tanto de forma física como digital según la necesidad de la organización, clasificándolos en centralizados, descentralizados y mixtos. Cada organización cuenta con su nomenclatura propia para la codificación de los archivos. Lo invitamos a aprender y profundizar en este tema, realizando la lectura del documento ‘Sistemas de Información’.

    .row.justify-content-center.align-items-center.mb-5
      .col-md-8.zi2.tarjeta(style="background-color: #E5E7F2")
        p.mb-0
          b ¡Excelente! 
          | Ha finalizado el estudio de este componente formativo a través del cual ha aprendido sobre el diseño, ensamble y documentación de tarjetas electrónicas. Ahora lo invitamos a estudiar la síntesis, donde podrá recordar de forma general los saberes que se han desarrollado; y a realizar la actividad de aprendizaje para poner a prueba lo aprendido, así como a consultar el material complementario y el glosario que le servirán como refuerzo y profundización.  
      .col-md-4.trright.zi1
        img(src='@/assets/curso/temas/t2/f30.svg', alt='circuito impreso')

</template>

<script>
export default {
  name: 'Tema2',
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
