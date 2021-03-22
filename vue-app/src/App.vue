<template>
  <Sidebar />
  <Background />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import './assets/styles/css/styles.css';
import Sidebar from './components/Sidebar';
import Background from './components/Background';

export default {
  name: 'App',
  components: {
    Sidebar,
    Background,
  }
}
</script>