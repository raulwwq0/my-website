<template>
  <form id="email-form" @submit.prevent="sendEmail">
    <p class="first-p">Usa este formulario para contactarme</p>
    <input type="text" name="user_name" placeholder="Nombre" required />
    <input type="text" name="user_email" placeholder="Correo" required />
    <textarea name="message" placeholder="Mensaje" required />
    <input type="submit" value="Enviar" />
  </form>

  <div class="advice" id="email-sent">El correo se ha enviado con éxito</div>

  <div class="advice" id="email-fail">El correo no se ha podido enviar</div>
</template>

<script>
import emailjs from "emailjs-com";
import gsap from "gsap";

export default {
  name: "EmailForm",
  setup() {
    const service_id = process.env.VUE_APP_EMAILJS_SERVICE_ID;
    const template_id = process.env.VUE_APP_EMAILJS_TEMPLATE_ID;
    const user_id = process.env.VUE_APP_EMAILJS_USER_ID;

    function sendEmail(e) {
      emailjs.sendForm(service_id, template_id, e.target, user_id).then(
        (result) => {
          console.log("Email sent successfully", result.status, result.text);

          document.getElementById("email-form").reset();

          gsap.to("#email-sent", { opacity: 1, scale: 1.2, ease: "bounce" });
          gsap.to("#email-sent", { opacity: 0, scale: 0, delay: 5 });
        },
        (error) => {
          console.log("Email sent went wrong", error);

          gsap.to("#email-fail", { opacity: 1, scale: 1.2, ease: "bounce" });
          gsap.to("#email-fail", { opacity: 0, scale: 0, delay: 5 });
        }
      );
    }

    return { sendEmail };
  },
};
</script>