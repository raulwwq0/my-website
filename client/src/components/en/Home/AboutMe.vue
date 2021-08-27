<template>
  <div id="about-me">
    <div id="about-text">
      <h2 class="subtitle">About Me</h2>
      <p>
        My name is Raúl and I'm from Málaga. I have been coding since I was 15,
        when my ICT (Information and Communication Technologies) teacher
        discovered me Python, a programming language.
      </p>
      <p>
        That was the beginning of my travel in self-taught learning, and also
        with the help from some courses where I learned new programming
        languages and technologies, allowing me to develop a huge ability to
        solve problems and becoming myself in a person who you can put your
        trust in. In addition, I love working in a team, where I will always try
        to do my best.
      </p>
      <p>
        Nowadays, my main goal is web development. However, in a future I would
        also like to learn application development.
      </p>
    </div>
    <picture>
      <source srcset="../../../assets/images/me.webp" type="image/webp" />
      <source srcset="../../../assets/images/me.jpg" type="image/jpeg" />
      <img src="../../../assets/images/me.jpg" />
    </picture>
  </div>
</template>

<script>
export default {
  name: "AboutMe",
};
</script>
