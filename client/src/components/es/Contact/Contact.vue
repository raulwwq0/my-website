<template>
  <h1 class="title">Contacto</h1>

  <div id="contact">
    <EmailForm />
    <Social />    
  </div>
</template>

<script>
import EmailForm from "./EmailForm";
import Social from "./Social";

export default {
  name: "Contact",
  components: {
    EmailForm,
    Social,
  },
};
</script>