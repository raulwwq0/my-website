<template>
  <aside id="sidebar">
    <div id="hamburger" @click="sidebarChangeStatus()">
      <div class="hamburger-wrap">
        <img
          class="icons"
          src="../assets/images/hamburger.svg"
          alt="Abrir Menú"
          v-if="!isSidebarOFF"
        />
        <img
          class="icons"
          src="../assets/images/close.svg"
          alt="Abrir Menú"
          v-if="isSidebarOFF"
        />
      </div>
    </div>
    <div id="menu-icons">
      <router-link to="/" exact-active-class="active">
        <div class="icon-wrap">
          <img class="icons" src="../assets/images/home.svg" alt="Inicio" />
          <p class="icon-text">Inicio</p>
        </div>
      </router-link>

      <router-link to="/projects" exact-active-class="active">
        <div class="icon-wrap">
          <img
            class="icons"
            src="../assets/images/projects.svg"
            alt="Proyectos"
          />
          <p class="icon-text">Proyectos</p>
        </div>
      </router-link>

      <router-link to="/contact" exact-active-class="active">
        <div class="icon-wrap">
          <img
            class="icons"
            src="../assets/images/contact.svg"
            alt="Contacto"
          />
          <p class="icon-text">Contacto</p>
        </div>
      </router-link>
    </div>
    <div id="social-icons">
      <a href="https://github.com/raulwwq0" target="_blank">
        <div class="icon-wrap">
          <img
            id="github-icon"
            class="icons"
            src="../assets/images/logo/github.svg"
            alt="GitHub"
          />
          <p class="icon-text">GitHub</p>
        </div>
      </a>
    </div>
  </aside>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";

export default {
  name: "Sidebar",
  setup() {
    var isSidebarOFF = ref(true);

    function sidebarChangeStatus() {
      const sidebarTimeline = gsap.timeline({ defaults: { duration: 0.3 } });

      if (screen.width > 900) {
        if (!isSidebarOFF.value) {
          sidebarTimeline
            .to("#sidebar", { width: "160px" })
            .to(".icon-text", { display: "block" }, 0.2)
            .to(".icon-text", { opacity: 1 })
            .to(".content", { marginLeft: "160px" }, 0)
            .to(".icon-wrap", { width: "150px" }, 0);
        } else {
          sidebarTimeline
            .to(".icon-text", { opacity: 0, display: "none" })
            .to(".icon-wrap", { width: "40px" }, 0.3)
            .to("#sidebar", { width: "40px" }, 0.2)
            .to(".content", { marginLeft: "40px" }, "<0");
        }
      } else {
        if (!isSidebarOFF.value) {
          sidebarTimeline
            .to("#sidebar", { width: "160px" })
            .to(".icon-text", { display: "block" }, 0.2)
            .to(".icon-text", { opacity: 1 })
            .to(".icon-wrap", { width: "150px" }, 0)
            .to("#sidebar", { boxShadow: "0 8px 32px 0 rgba(0, 0 , 0, 0.37)"}, 0);
        } else {
          sidebarTimeline
            .to(".icon-text", { opacity: 0, display: "none" })
            .to("#sidebar", { boxShadow: "0 0 0 0 rgba(0, 0 , 0, 0)"}, 0)
            .to(".icon-wrap", { width: "40px" }, 0.3)
            .to("#sidebar", { width: "40px" }, 0.2);
        }
      }

      isSidebarOFF.value = !isSidebarOFF.value;
    }
    return { isSidebarOFF, sidebarChangeStatus };
  },
  mounted() {
    this.sidebarChangeStatus();
  },
};
</script>