<template>
  <v-app class="default-layout">
    <v-app-bar absolute flat color="white">
      <component-logo size="md" color="black" />
    </v-app-bar>Ï
    <v-main>
      <v-container class="fill-height" fluid>
        <Nuxt />
      </v-container>
    </v-main>
    <component-snackbar :style="{ left: 0, top: 0 }" />
    <footer class="footer">
      <component-logo size="md" color="white" />
      <div class="footer__bottom">
        <span class="footer__copy">
          &copy;
        </span> created by
        <a
          class="footer__author"
          target="_blank"
          rel="noreferrer"
          href="https://github.com/anon-kae">
          Anon
        </a>
        - devCallenge.io 2021
      </div>
    </footer>
  </v-app>
</template>

<script>
import ComponentSnackbar from '../components/Snackbar/Snackbar'
import ComponentLogo from '../components/Logo.vue'

export default {
  name: 'DefaultLayout',
  components: { ComponentSnackbar, ComponentLogo },
  errorCaptured (error) {
    const errorHandler = async (error) => {
      const errorMessage = error
      await this.$store.dispatch('snackbar/setErrorMessage', errorMessage)
    }

    if (error && error.message) {
      errorHandler(error)
      return false
    } else if (process.env.CLIENT_NOTIFY_UI_ERROR === 'true') {
      const errorMessage = `[UI] ${error.message}`
      this.$store.dispatch('snackbar/setErrorMessage', errorMessage)
      return false
    }
  },
}
</script>

<style>
.footer {
  background-color: #000000;
  border-radius: 42px 42px 0 0;
  padding: 20px;
  margin-top: 40px;
  color: #fff;
  font-size: 15px;
}

.footer__bottom {
  display: flex;
  align-items: center;
}

.footer__copy {
  font-size: 25px;
  margin-right: 10px;
}

.footer__author {
  color: #fff;
  font-weight: bold;
  margin: 0 5px;
}

@media (min-width: 1000px) {
  .footer {
    display: flex;
    padding: 20px 40px;
    justify-content: space-between;
    align-items: center;
    font-size: 18px;
  }
}
.default-layout {
  padding: 23px 20px 0;
  box-sizing: border-box;
  min-height: 100%;
  display: grid;
  grid-template-rows: max-content 1fr max-content;
  grid-template-columns: 100%;
}
</style>
