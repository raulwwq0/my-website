<template>
    <aside id="sidebar">
        <div id="hamburger" @click="sidebarChangeStatus()">
            <img class="icons" src="../assets/images/hamburger.svg" alt="Abrir Menú" v-if="!isSidebarExtended"/>
            <img class="icons" src="../assets/images/close.svg" alt="Abrir Menú" v-if="isSidebarExtended"/>
        </div>
        <div id="menu-icons">
            <router-link to='/' exact-active-class="active">
                <div class="icon-wrap">
                    <img class="icons" src="../assets/images/home.svg" alt="Inicio"/>
                    <p class="icon-text">Inicio</p>
                </div>
            </router-link>
            
            <router-link to='/projects' exact-active-class="active">
                <div class="icon-wrap">
                    <img class="icons" src="../assets/images/projects.svg" alt="Proyectos"/>
                    <p class="icon-text">Proyectos</p>
                </div>
            </router-link>

            <router-link to='/contact' exact-active-class="active">
                <div class="icon-wrap">
                    <img class="icons" src="../assets/images/contact.svg" alt="Contacto"/>
                    <p class="icon-text">Contacto</p>
                </div>
            </router-link>
        </div>
        <div id="social-icons">
            <a href="https://github.com/raulwwq0">
                <div class="icon-wrap">
                    <img class="icons" src="../assets/images/github.svg" alt="GitHub"/>
                    <p class="icon-text">GitHub</p>
                </div>
            </a>

            <a href="https://www.linkedin.com/in/agraul21/">
            <div class="icon-wrap">
                <img class="icons" src="../assets/images/linkedin.svg" alt="Linkedin"/>
                <p class="icon-text">Linkedin</p>
            </div>
            </a>
        </div>
    </aside>
</template>

<script>
import { ref } from "vue";
import gsap from "gsap";

export default {
    name: 'Sidebar',
    setup(){
        var isSidebarExtended = ref(false);

        function sidebarChangeStatus() {
            const sidebarTimeline = gsap.timeline({ defaults: { duration: 0.3 } });
            if (!isSidebarExtended.value){
                sidebarTimeline.to('#sidebar', {width: '160px'})
                               .to('.content', {marginLeft: '180px'}, 0)
                               .to('.icon-wrap', {width: '150px'}, 0)
                               .to('.icon-text', {display: 'block'}, 0)
                               .to('.icon-text', {opacity: 1})
            } else{
                sidebarTimeline.to('.icon-text', {opacity: 0, display: 'none'})
                               .to('.icon-wrap', {width: '40px'})
                               .to('#sidebar', {width: '40px'}, 0.2)
                               .to('.content', {marginLeft: '60px'}, '<0');
            }
            isSidebarExtended.value = !isSidebarExtended.value;
        }
        return { isSidebarExtended, sidebarChangeStatus }
    }
}
</script>