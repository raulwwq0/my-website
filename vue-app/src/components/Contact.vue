<template>
  <h1 class="title">Contacto</h1>

  <div id="contact">
    <form
      id="email-form"
      method="POST"
      action="send"
      enctype="multipart/form-data"
    >
      <p class="first-p">Usa este formulario para contactarme</p>
      <input type="text" name="name" placeholder="Nombre" required />
      <input type="text" name="email" placeholder="Correo" required />
      <input type="text" name="subject" placeholder="Asunto" required />
      <textarea name="message" placeholder="Mensaje" required />
      <input type="submit" value="Enviar" />
    </form>

    <div id="different-ways-contact">
      <p class="first-p">También puedes encontrarme en:</p>
      <div id="contact-ways">
        <div
          class="contact-icon-wrap"
          @mouseover="iconHoverON('linkedin')"
          @mouseout="iconHoverOFF('linkedin')"
        >
          <a href="https://www.linkedin.com/in/agraul21/" target="_blank">
            <div class="svg-wrap linkedin">
              <img
                class="contact-icons linkedin-svg"
                src="../assets/images/linkedin.svg"
                alt="Linkedin"
              />
            </div>
          </a>
          <p class="contact-icon-text linkedin-text">Raúl Aguilar García</p>
        </div>

        <div
          class="contact-icon-wrap"
          @mouseover="iconHoverON('instagram')"
          @mouseout="iconHoverOFF('instagram')"
        >
          <a href="https://www.instagram.com/raulwwq0/" target="_blank">
            <div class="svg-wrap instagram">
              <img
                class="contact-icons instagram-svg"
                src="../assets/images/instagram.svg"
                alt="Instagram"
              />
            </div>
          </a>
          <p class="contact-icon-text instagram-text">@raulwwq0</p>
        </div>

        <div
          class="contact-icon-wrap"
          @mouseover="iconHoverON('telegram')"
          @mouseout="iconHoverOFF('telegram')"
        >
          <a href="https://t.me/rau_ag21" target="_blank">
            <div class="svg-wrap telegram">
              <img
                class="contact-icons telegram-svg"
                src="../assets/images/telegram.svg"
                alt="Telegram"
              />
            </div>
          </a>
          <p class="contact-icon-text telegram-text">@rau_ag21</p>
        </div>

        <div
          class="contact-icon-wrap"
          @mouseover="iconHoverON('discord')"
          @mouseout="iconHoverOFF('discord')"
        >
          <div class="svg-wrap discord">
            <img
              class="contact-icons discord-svg"
              src="../assets/images/discord.svg"
              alt="Discord"
              @click="copyDiscordUsername('.discord-text')"
            />
          </div>
          <p class="contact-icon-text discord-text">rau_ag21 #7817</p>
        </div>
      </div>

      <div id="tag-was-copied">
        Has copiado mi tag de Discord al portapapeles
      </div>
    </div>
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Contact",
  setup() {
    function iconHoverON(icon) {
      let divName = "." + icon;
      let imgName = "." + icon + "-svg";
      let textName = "." + icon + "-text";

      const iconTL = gsap.timeline({ defaults: { duration: 0.3 } });

      iconTL
        .to(divName, { background: "black" })
        .to(imgName, { filter: "invert(100%)" }, 0)
        .to(textName, { y: "50px", opacity: 1 }, 0);
    }

    function iconHoverOFF(icon) {
      let divName = "." + icon;
      let imgName = "." + icon + "-svg";
      let textName = "." + icon + "-text";

      const iconTL = gsap.timeline({ defaults: { duration: 0.3 } });

      iconTL
        .to(divName, { background: "transparent" })
        .to(imgName, { filter: "invert(0%)" }, 0)
        .to(textName, { y: "0px", opacity: 0 }, 0);
    }

    function copyDiscordUsername(className) {
      var aux = document.createElement("input");

      aux.setAttribute("value", document.querySelector(className).innerHTML);
      document.body.appendChild(aux);
      aux.select();

      document.execCommand("copy");

      document.body.removeChild(aux);

      gsap.to("#tag-was-copied", { opacity: 1, scale: 1.2, ease: "bounce" });
      gsap.to("#tag-was-copied", { opacity: 0, scale: 0, delay: 5 });
    }

    return { iconHoverON, iconHoverOFF, copyDiscordUsername };
  },
};
</script>