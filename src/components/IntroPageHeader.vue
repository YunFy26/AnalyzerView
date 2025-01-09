<template>
  <div class="page-header">
    <h1>{{ title }}</h1>
    <p class="subtitle">{{ subtitle }}</p>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  subtitle: string
}>()
</script>

<style scoped>
.page-header {
  text-align: center;
  background: #1a1a3a;
  padding: 40px;
  width: 100%;
  margin-bottom: 10px;
  margin-top: -40px;
}

h1 {
  font-size: 2.5em;
  margin: 0;
  background: linear-gradient(to right, #fff, #66a6ff);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}

.subtitle {
  color: rgba(255, 255, 255, 0.7);
  margin-top: 10px;
  font-size: 1.1em;
}

@media (max-width: 768px) {
  .page-header {
    padding: 30px 20px;
  }
}
</style>
