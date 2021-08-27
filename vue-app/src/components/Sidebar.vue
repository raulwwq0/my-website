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
    <Buttons />
    <div id="menu-icons">
      <router-link :to="`/${lang}/home`" exact-active-class="active">
        <div class="icon-wrap">
          <img class="icons" src="../assets/images/home.svg" alt="Inicio" />
          <p class="icon-text">
            <span v-if="lang === 'es'">Inicio</span>
            <span v-if="lang === 'en'">Home</span>
          </p>
        </div>
      </router-link>

      <router-link :to="`/${lang}/projects`" exact-active-class="active">
        <div class="icon-wrap">
          <img
            class="icons"
            src="../assets/images/projects.svg"
            alt="Proyectos"
          />
          <p class="icon-text">
            <span v-if="lang === 'es'">Proyectos</span>
            <span v-if="lang === 'en'">Projects</span>
          </p>
        </div>
      </router-link>

      <router-link :to="`/${lang}/contact`" exact-active-class="active">
        <div class="icon-wrap">
          <img
            class="icons"
            src="../assets/images/contact.svg"
            alt="Contacto"
          />
          <p class="icon-text">
            <span v-if="lang === 'es'">Contacto</span>
            <span v-if="lang === 'en'">Contact</span>
          </p>
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
import { onBeforeMount, onMounted, ref, watchEffect } from "vue";
import gsap from "gsap";
import store from "../store";
import Buttons from "./Buttons";

export default {
  name: "Sidebar",
  components: {
    Buttons,
  },
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
            .to("#options-buttons", { display: "flex", opacity: 1 }, "<0")
            .to(".content", { marginLeft: "160px" }, 0)
            .to(".icon-wrap", { width: "150px" }, 0);
        } else {
          sidebarTimeline
            .to("#options-buttons", { display: "none", opacity: 0 })
            .to(".icon-text", { opacity: 0, display: "none" }, 0)
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
            .to("#options-buttons", { display: "flex", opacity: 1 }, "<0")
            .to(".icon-wrap", { width: "150px" }, 0)
            .to(
              "#sidebar",
              { boxShadow: "0 8px 32px 0 rgba(0, 0 , 0, 0.37)" },
              0
            );
        } else {
          sidebarTimeline
            .to("#options-buttons", { display: "none", opacity: 0 })
            .to(".icon-text", { opacity: 0, display: "none" }, 0)
            .to(".icon-wrap", { width: "40px" }, 0.3)
            .to("#sidebar", { width: "40px" }, 0.2)
            .to("#sidebar", { boxShadow: "0 0 0 0 rgba(0, 0 , 0, 0)" }, 0);
        }
      }

      isSidebarOFF.value = !isSidebarOFF.value;
    }

    function checkLang(lang){
      if (lang.value === null) {
        var userLang = navigator.language || navigator.userLanguage;

        if (userLang.includes("es")) {
          lang.value = 'es';
          store.state.lang = 'es';
        } else{
          lang.value = 'en';
          store.state.lang = 'en';
        }
      }
    }

    var lang = ref(store.state.lang);

    watchEffect(() => {
      lang.value = store.state.lang;
    });

    onBeforeMount(() => {
      checkLang(lang);
    })

    onMounted(() => {
      sidebarChangeStatus();
    })

    return { isSidebarOFF, sidebarChangeStatus, lang };
  },
};
</script>
