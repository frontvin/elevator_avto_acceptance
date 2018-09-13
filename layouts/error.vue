<template>
  <div class="container">
    <h1 v-if="error.statusCode === 404">Сторінка не знайдена</h1>
    <h1 v-else>Виникла помилка</h1>
    <nuxt-link to="/">Повернутись на головну</nuxt-link>
  </div>
</template>

<script>
export default {
  props: ['error']
}
</script>