<template>
  <Sidebar />
  <Background />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import './assets/styles/css/styles.css';
import {ref, watchEffect} from 'vue';
import store from './store';
import Sidebar from './components/Sidebar';
import Background from './components/Background';

export default {
  name: 'App',
  components: {
    Sidebar,
    Background,
  },
  setup() {
    var lang = ref(store.state.lang);

    watchEffect(() => {
      lang.value = store.state.lang;
    });

    return {lang}
  }
}
</script>