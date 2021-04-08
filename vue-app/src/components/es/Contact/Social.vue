<template>
  <div id="different-ways-contact">
    <p class="first-p">También puedes encontrarme en:</p>
    <div id="contact-ways">
      <div class="contact-icon-wrap">
        <a href="https://www.linkedin.com/in/agraul21/" target="_blank">
          <img
            class="contact-icons linkedin-svg"
            src="../../../assets/images/logo/linkedin.svg"
            alt="Linkedin"
            @mouseover="iconHoverON('linkedin')"
            @mouseout="iconHoverOFF('linkedin')"
          />
        </a>
        <p class="contact-icon-text linkedin-text">Raúl Aguilar</p>
      </div>

      <div class="contact-icon-wrap">
        <a href="https://www.instagram.com/raulwwq0/" target="_blank">
          <img
            class="contact-icons instagram-svg"
            src="../../../assets/images/logo/instagram.svg"
            alt="Instagram"
            @mouseover="iconHoverON('instagram')"
            @mouseout="iconHoverOFF('instagram')"
          />
        </a>
        <p class="contact-icon-text instagram-text">@raulwwq0</p>
      </div>

      <div class="contact-icon-wrap">
        <a href="https://t.me/rau_ag21" target="_blank">
          <img
            class="contact-icons telegram-svg"
            src="../../../assets/images/logo/telegram.svg"
            alt="Telegram"
            @mouseover="iconHoverON('telegram')"
            @mouseout="iconHoverOFF('telegram')"
          />
        </a>
        <p class="contact-icon-text telegram-text">@rau_ag21</p>
      </div>

      <div class="contact-icon-wrap">
        <img
          class="contact-icons discord-svg"
          src="../../../assets/images/logo/discord.svg"
          alt="Discord"
          @click="copyDiscordUsername('.discord-text')"
          @mouseover="iconHoverON('discord')"
          @mouseout="iconHoverOFF('discord')"
        />
        <p class="contact-icon-text discord-text">rau_ag21 #7817</p>
      </div>
    </div>
  </div>

  <div class="advice" id="tag-was-copied">
    Has copiado mi tag de Discord al portapapeles
  </div>
</template>

<script>
import gsap from "gsap";

export default {
  name: "Social",
  setup() {
    function iconHoverON(icon) {
      let imgName = "." + icon + "-svg";
      let textName = "." + icon + "-text";

      const iconTL = gsap.timeline({ defaults: { duration: 0.3 } });

      if(screen.width > 900){      
        iconTL
          .to(
            imgName,
            {
              filter:
                "invert(100%) brightness(30%) sepia(1) hue-rotate(110deg) saturate(10.5)",
            },
            0
          )
          .to(textName, { y: "50px", opacity: 1 }, 0);
        
      }
    }

    function iconHoverOFF(icon) {
      let imgName = "." + icon + "-svg";
      let textName = "." + icon + "-text";

      const iconTL = gsap.timeline({ defaults: { duration: 0.3 } });

      if(screen.width > 900){
        iconTL
          .to(imgName, { filter: "invert(0%)" }, 0)
          .to(textName, { y: "0px", opacity: 0 }, 0);
      }

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