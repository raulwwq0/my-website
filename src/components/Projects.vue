<template>
  <h1 class="title">Proyectos</h1>

  <div id="projects">
    <div
      class="project"
      @mouseover="infoHoverON()"
      @mouseleave="infoHoverOFF()"
    >
      <div class="project-info">
        <h2 class="project-title">Titulo del proyecto</h2>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          dignissim tempor suscipit. Vivamus lacinia dolor turpis, vel aliquet
          felis egestas id.
        </p>

        <button>Ir a la web</button>
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Projects",
  setup() {
    function infoHoverON() {
      gsap.to(".project-info", {
        y: "-250px",
        background: "rgba(0, 0, 0, 0.85)",
      });
    }

    function infoHoverOFF() {
      gsap.to(".project-info", { y: "0%", background: "rgba(0, 0, 0, 0.5)" });
    }
    return { infoHoverON, infoHoverOFF };
  },
};
</script>