<template>
  <div class="home">
    <Startseite/>
  </div>
</template>

<script>
// @ is an alias to /src
import Startseite from '../components/Startseite.vue'

export default {
  name: 'Home',
  components: {
    Startseite
  }
}
</script>