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
    // This function remove glass effect in browsers where backdrop-filters are not supported by default
    function whichNavIsUsed(){
      document.addEventListener("DOMContentLoaded", () => {
        const firefox = navigator.userAgent.toLowerCase().indexOf('firefox') > -1;
        const opera = navigator.userAgent.toLowerCase().indexOf('opera') > -1;
        const internetExplorer = navigator.userAgent.toLowerCase().indexOf('msie') > -1;

        const glassClass = document.getElementsByClassName("glass");
        console.log(Array.from(glassClass));

        if(firefox || opera || internetExplorer){
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