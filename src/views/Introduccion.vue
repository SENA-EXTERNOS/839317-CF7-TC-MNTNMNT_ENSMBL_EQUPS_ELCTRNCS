<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción

    .row.justify-content-center.align-items-center.mb-5
      .col-md-7
        p Apreciado aprendiz, bienvenido a este componente formativo, que está orientado al diseño, ensamble y documentación de tarjetas electrónicas. En este componente formativo, podrá aprender sobre el alistamiento y preparación de este tipo tarjetas, así como el ensamble y documentación de componentes sobre las mismas, y de acuerdo con procedimientos y normativas. 
          br
          br
          |En el siguiente video conocerá, de forma general, la temática que se estudiará a lo largo del componente formativo.
      .col-md-5
        img(src='@/assets/curso/temas/if1.png', alt='personas trabajando en dispositivos electrónicos')

    figure
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3kMtSEYpnZ0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
