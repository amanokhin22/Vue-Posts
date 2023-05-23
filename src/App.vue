<template>
  <navbar></navbar>
  <div class="app">
    <RouterView></RouterView>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  components: {Navbar}
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.app {
  display: flex;
  flex-direction: column;
  padding: 20px;
}
</style>