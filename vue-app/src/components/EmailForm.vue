<template>
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
</template>

<script>
export default {
    name: 'EmailForm',
}
</script>