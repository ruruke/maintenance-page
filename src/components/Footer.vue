<template>
  <footer class="footer">
    <p>© {{ CURRENT_YEAR }} ruru. All rights reserved.</p>
    <p>Background Images Generated ChatGPT</p>
  </footer>
</template>

<script setup lang="ts">
// Extract function to improve readability
function getCurrentYear(): number {
  return new Date().getFullYear();
}

// Renamed variable to emphasize its constant nature
const CURRENT_YEAR = getCurrentYear();
</script>

<style scoped>
.footer {
  text-align: center;
  padding: 10px 0;
  font-size: 14px;
}
</style>