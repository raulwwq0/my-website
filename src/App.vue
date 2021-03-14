<template>
  <Sidebar />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import './assets/styles/css/styles.css';
import Sidebar from './components/Sidebar';

export default {
  name: 'App',
  components: {
    Sidebar,
  }
}
</script>