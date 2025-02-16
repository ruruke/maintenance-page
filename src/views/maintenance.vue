<template>
  <div class="top-thirty">
    <div class="content">
      <h1>システム障害発生のお知らせ</h1>
      <p>現在システム障害が発生しております。<br>復旧までしばらくお待ちください。</p>
    </div>
  </div>
</template>

<style scoped>
.top-thirty {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 30vh;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 100;
}

.content {
  text-align: center;
}

.content h1 {
  margin-bottom: 5rem; /* h1の下部にマージンを追加 */
}

.content p {
  display: inline-block;
  max-width: 80%;
  margin: 0 auto;
}
</style>