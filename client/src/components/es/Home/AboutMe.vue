<template>
  <div id="about-me">
    <div id="about-text">
      <h2 class="subtitle">Sobre mi</h2>
      <p>
        Me llamo Raúl y soy de Málaga. Programo desde los 15 años, cuando
        descubrí el lenguaje de programación Python gracias a mi profesor de TIC
        (Tecnologías de la Información y Comunicación).
      </p>
      <p>
        Este fue el comienzo de mi camino de aprendizaje autodidacta, que
        combinándolo con varios cursos en los que aprendí nuevos lenguajes y
        tecnologías, me han permitido desarrollar una gran capacidad para
        resolver problemas, conviertiéndome en una persona en la que se puede
        depositar una gran confianza. También aprecio mucho el trabajo en
        equipo, en el que podría aportar lo mejor de mi.
      </p>
      <p>
        Actualmente mi meta es el desarrollo web, sin descartar a largo plazo el
        desarrollo de aplicaciones.
      </p>
    </div>
    <picture>
      <source
        srcset="../../../assets/images/me.webp"
        type="image/webp"
      />
      <source
        srcset="../../../assets/images/me.jpg"
        type="image/jpeg"
      />
      <img src="../../../assets/images/me.jpg" />
    </picture>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>
