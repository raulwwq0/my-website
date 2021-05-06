<template>
    <div id="options-buttons">
        <div id="lang-switcher">
            <span class="es">
                <img src="../assets/images/spain.svg" alt="Spanish"/>
            </span>
            <input id="lang-checkbox" type="checkbox" class="toggle" @change="changeLanguage()">
            <span class="en">
                <img src="../assets/images/britain.svg" alt="English"/>
            </span>
        </div>
    </div>
</template>

<script>
import {onMounted} from 'vue';
import store from "../store";
import router from "../router/router";

export default {
    name: 'Buttons',
    setup() {

        function changeLanguage() {
            store.commit("CHANGE_LANG");
            var currentPath = router.currentRoute.value.path;

            currentPath = currentPath.slice(4, currentPath.length);
            
            router.push({path: `/${localStorage.getItem('lang')}/${currentPath}`})
        }

        function getLanguageFromLocalStorage() {
            var lang_storage = localStorage.getItem('lang');

            if(lang_storage === null) localStorage.setItem('lang', 'es');

            if(lang_storage === 'en'){
                document.getElementById('lang-checkbox').checked = true;
            } else {
                document.getElementById('lang-checkbox').checked = false;
            }
        }

        onMounted(() => {
            getLanguageFromLocalStorage();
        })

        return {changeLanguage}
    }
}
</script>