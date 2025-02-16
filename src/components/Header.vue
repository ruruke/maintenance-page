<script setup lang="ts">

</script>

<template>
  <header>
    <nav>
      <ul>
        <li><a href="/">Home</a></li>
<!--        <li><a href="/contact">Contact</a></li>-->
      </ul>
    </nav>
  </header>
</template>

<style scoped>
header {
  border-bottom: 2px solid #666;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: rgba(105, 105, 105, 0.5); /* 半透明の背景を追加 */
  backdrop-filter: blur(5px); /* 背景をぼかす */
  z-index: 100;
  display: flex;
  justify-content: center;
  align-items: center;
}
nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline;
  margin: 0 10px; /* 左右にマージンを追加 */
}

nav a {
  text-decoration: none;
  color: #333;
}
</style>