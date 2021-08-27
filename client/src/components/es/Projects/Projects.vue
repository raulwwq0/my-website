<template>
  <h1 class="title">Proyectos</h1>

  <p id="projects-section-text" class="section-text">
    Esta es la lista de todos los proyectos que he realizado desde mis comienzos
    como desarrollador web. Visita mi GitHub para ver los repositorios de cada
    proyecto.
  </p>

  <div id="projects" v-if="projects">
    <article
      class="project"
      @mouseover="infoHoverON(project._id)"
      @mouseleave="infoHoverOFF(project._id)"
      v-for="project in projects"
      :key="project._id"
    >
      <img
        :src="api + '/get-image/' + project.image"
        v-if="project.image"
      />

      <img
        src="../../../assets/images/loading.svg"
        alt="Cargando..."
        v-if="!project.image"
      />

      <div :class="'project-info project-info-' + project._id">
        <div class="project-title">
          <h2>{{ project.title }}</h2>
        </div>

        <p>{{ project.description_es }}</p>

        <form id="web-button" :action="project.link" target="_blank" v-if="project.link">
          <button>Ir a la web</button>
        </form>
      </div>
    </article>
  </div>

  <img
  src="../../../assets/images/loading.svg"
  alt="Cargando..."
  v-if="!projects"
  />
</template>

<script>
import gsap from "gsap";
import axios from "axios";

export default {
  name: "Projects",
  data() {
    return {
      projects: [],
    };
  },
  setup() {
    const api = process.env.VUE_APP_API;

    function infoHoverON(_id) {
      let classID = ".project-info-" + _id;
      gsap.to(classID, {
        duration: 0.3,
        y: "-250px",
        background: "rgba(0, 0, 0, 0.9)",
      });
    }

    function infoHoverOFF(_id) {
      let classID = ".project-info-" + _id;
      gsap.to(classID, {
        duration: 0.3,
        y: "0%",
        background: "rgba(0, 0, 0, 0.5)",
      });
    }

    function entryAnimation() {
      gsap.fromTo(
        ".project",
        { opacity: 0, duration: 0.5 },
        { stagger: 0.2, opacity: 1, duration: 0.5 }
      );
    }

    function getProjects() {
      axios.get(api + "/get-projects").then((res) => {
        console.log(res);
        if (res.data.status == "success") {
          this.projects = res.data.projects;
        }
      });
      for (var project in this.projects) {
        this.projects[project].className += project._id;
      }
    }

    return { api, infoHoverON, infoHoverOFF, entryAnimation, getProjects };
  },
  mounted() {
    this.getProjects();
  },
  updated() {
    this.entryAnimation();
  },
};
</script>