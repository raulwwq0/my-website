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
  },
  setup() {
    // This function remove glass effect in firefox due to backdrop-filters are not supported by default
    function whichNavIsUsed(){
      document.addEventListener("DOMContentLoaded", () => {
        const firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        const glassClass = document.getElementsByClassName("glass");
        console.log(Array.from(glassClass));

        if(firefox){
          Array.from(glassClass).forEach((element) => {
            element.classList.remove('glass');
            element.classList.add('no-glass');
          });
        }
      })
    }

    return {whichNavIsUsed}
  },
  created(){
    this.whichNavIsUsed();
  }
}
</script>