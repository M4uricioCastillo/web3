<script setup>
import Toolbar from "../shared/presentation/components/toolbar.vue";
</script>

<template>
  <div class="app-layout">
    <Toolbar />
    <main class="p-4">
      <router-view></router-view>
    </main>
  </div>
</template>

<style>
body {
  margin: 0;
  background-color: #f8f9fa;
  font-family: var(--font-family, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif);
}
</style>