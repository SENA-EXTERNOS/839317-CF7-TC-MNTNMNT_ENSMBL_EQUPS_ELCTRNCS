<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.mb-5
      .col-md-7
        p Apreciado aprendiz, bienvenido a este recurso educativo orientado al diseño, ensamble y documentación de tarjetas electrónicas. En este componente formativo, podrá aprender sobre el alistamiento y preparación de este tipo tarjetas, así como el ensamble y documentación de componentes sobre las mismas y de acuerdo a procedimientos y normativas. 
        p El siguiente video presenta, de manera general, los saberes que se desarrollarán en este componente formativo.
        p.cp: b Le deseamos una grata experiencia de aprendizaje.
      .col-md-5
        img(src='@/assets/curso/temas/if1.png', alt='personas trabajando en dispositivos electrónicos')

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
