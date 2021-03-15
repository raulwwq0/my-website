<template>
  <h1 class="title">Proyectos</h1>

  <div id="projects" v-if="projects">
    <article
      class="project"
      @mouseover="infoHoverON()"
      @mouseleave="infoHoverOFF()"
      v-for="project in projects"
      :key="project._id"      
    >
      <div class="project-info">
        <h2 class="project-title">{{project.title}}</h2>
        
        <p>{{project.description}}</p>

        <button>Ir a la web</button>
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
    }
  },
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

    function getProjects() {

      axios.get('http://localhost:3900/api/projects')
           .then(res => {
             if(res.data.status == 'success'){
               //Vue.set(this.projects,this.projects._id,res.data.projects);
               this.projects = res.data.projects;
             }
             console.log(this.projects);
           });
    }

    return { infoHoverON, infoHoverOFF, getProjects };
  },
  mounted(){
    this.getProjects();
  }
};
</script>