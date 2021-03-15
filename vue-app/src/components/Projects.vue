<template>
  <h1 class="title">Proyectos</h1>

  <div id="projects" v-if="projects">
    <article
      class="project"
      @mouseover="infoHoverON(project._id)"
      @mouseleave="infoHoverOFF(project._id)"
      v-for="project in projects"
      :key="project._id"
    >
      <img
        :src="'http://localhost:3900/api/get-image/' + project.image"
        :alt="project.title"
      />

      <div :class="'project-info project-info-' + project._id">
        <div class="project-title">
          <h2>{{ project.title }}</h2>
        </div>

        <p>{{ project.description }}</p>

        <form :action="project.link" target="_blank">
          <button>Ir a la web</button>
        </form>
      </div>
    </article>
  </div>
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
    function infoHoverON(_id) {
      let classID = ".project-info-" + _id;
      gsap.to(classID, {
        duration: 0.3,
        y: "-250px",
        background: "rgba(0, 0, 0, 0.85)",
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

    function getProjects() {
      axios.get("http://localhost:3900/api/projects").then((res) => {
        if (res.data.status == "success") {
          //Vue.set(this.projects,this.projects._id,res.data.projects);
          this.projects = res.data.projects;
        }
        console.log(this.projects);
      });
      for (var project in this.projects) {
        this.projects[project].className += project._id;
      }
    }

    return { infoHoverON, infoHoverOFF, getProjects };
  },
  mounted() {
    this.getProjects();
  },
};
</script>