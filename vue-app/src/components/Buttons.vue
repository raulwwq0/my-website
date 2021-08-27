<template>
  <div id="options-buttons">
    <div id="lang-switcher">
      <span class="es">
        <img src="../assets/images/spain.svg" alt="Spanish" />
      </span>
      <input
        id="lang-checkbox"
        type="checkbox"
        class="toggle"
        @change="changeLang()"
      />
      <span class="en">
        <img src="../assets/images/britain.svg" alt="English" />
      </span>
    </div>
  </div>
</template>

<script>
import { onBeforeMount, onMounted } from "vue";
import store from "../store";
import router from "../router/router";

export default {
  name: "Buttons",
  setup() {
    function changeLang() {
      store.commit("CHANGE_LANG");
      var currentPath = router.currentRoute.value.path;

      currentPath = currentPath.slice(4, currentPath.length);

      router.push({ path: `/${localStorage.getItem("lang")}/${currentPath}` });
    }

    function setDefaultLang(){
      var userLang = navigator.language || navigator.userLanguage;

      if (localStorage.getItem("lang") === null) {
        if (userLang.includes("es")) {
          localStorage.setItem("lang", "es");
          router.push({
            path: `/es/home`,
          });
        } else{
          localStorage.setItem("lang", "en");
          router.push({
            path: `/en/home`,
          });
        }
      }
    }

    function getLangFromLocalStorage() {
      var lang_storage = localStorage.getItem("lang");

      if (lang_storage === "en") {
        document.getElementById("lang-checkbox").checked = true;
      } else {
        document.getElementById("lang-checkbox").checked = false;
      }
    }

    onBeforeMount(() => {
      setDefaultLang();
    });

    onMounted(() => {
        getLangFromLocalStorage();
    })

    return { changeLang };
  },
};
</script>
