<template>
  <div class="error-div" v-if="lang === 'es'">
    <h1>404</h1>
    <h3>
      La ruta a la que intentas acceder no existe, comprueba si la URL es
      correcta.
    </h3>
  </div>

  <div class="error-div" v-if="lang === 'en'">
    <h1>404</h1>
    <h3>
      The route you want to access doesn't exist, check if the URL is correct.
    </h3>
  </div>
</template>

<script>
import { ref, onBeforeMount, watchEffect } from "vue";
import store from "../store";

export default {
  name: "Error",
  setup() {
    function checkLang(lang) {
      if (lang.value === null) {
        var userLang = navigator.language || navigator.userLanguage;

        if (userLang.includes("es")) {
          lang.value = "es";
          store.state.lang = "es";
        } else {
          lang.value = "en";
          store.state.lang = "en";
        }
      }
    }

    var lang = ref(store.state.lang);

    watchEffect(() => {
      lang.value = store.state.lang;
    });

    onBeforeMount(() => {
      checkLang(lang);
    });

    return { lang };
  },
};
</script>
