<template>
  <div class="notes">

    <div class="card has-background-success p-4">
      <div class="field">
        <div class="control">
          <textarea class="textarea" placeholder="Add a new note"></textarea>
        </div>
      </div>

      <div class="field is-grouped is-grouped-right">
        <div class="control">
          <button class="button has-background-primary-light is-success is-outlined">Add Note</button>
        </div>
      </div>
    </div>

    <div v-for="i in 3" class="card">
      <div class="card-content">
        <div class="content">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam repudiandae laborum laboriosam tenetur
          blanditiis at, excepturi voluptate recusandae, accusantium sapiente optio fuga nemo debitis neque eveniet iste
          qui. Autem, facere.
        </div>
      </div>
      <footer class="card-footer">
        <a href="#" class="card-footer-item">Edit</a>
        <a href="#" class="card-footer-item">Delete</a>
      </footer>
    </div>

  </div>
</template>

<script setup>

</script>

<style scoped>

</style>