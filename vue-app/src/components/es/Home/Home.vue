<template>
    <PresentationBanner />
    <AboutMe />
    <Skills />
</template>

<script>
import PresentationBanner from "./PresentationBanner";
import AboutMe from "./AboutMe";
import Skills from "./Skills";

export default {
    name: 'Home',
    components: {
        PresentationBanner,
        AboutMe,
        Skills,
    }
}
</script>