<template>
  <header>
    <Navbar />
    <div class="container is-max-desktop px-2 py-4">
      <RouterView />
    </div>
  </header>
</template>


<script setup>
// Imports
import Navbar from "./components/layout/Navbar.vue";

</script>


<style>
@import "https://cdn.jsdelivr.net/npm/bulma@1.0.2/css/bulma.min.css";
</style>
