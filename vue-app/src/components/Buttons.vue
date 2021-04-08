<template>
    <div id="options-buttons">
        <div id="lang-switcher">
            <span class="es">
                <img src="../assets/images/spain.svg" alt="Spanish"/>
            </span>
            <input type="checkbox" class="toggle" @change="changeLanguage()">
            <span class="en">
                <img src="../assets/images/britain.svg" alt="English"/>
            </span>
        </div>
    </div>
</template>

<script>
import store from "../store";
import router from "../router/router";

export default {
    name: 'Buttons',
    setup() {

        function changeLanguage() {
            store.commit("CHANGE_LANG");
            var currentPath = router.currentRoute.value.path;

            currentPath = currentPath.slice(4, currentPath.length);
            
            router.push({path: `/${store.state.lang}/${currentPath}`})
        }

        return {changeLanguage}
    }
}
</script>