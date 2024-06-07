<script setup lang="ts">

</script>

<template>
  <div class="page-layout">
    <main class="main">
      <div class="main__content">
        <slot></slot>
      </div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.page-layout {
  position: relative;

  display: flex;
  flex-direction: column;
}

.main {
  display: flex;
  flex-direction: column;

  flex: 1 0 100vh;
  &__content {
    height: 100%;
  }
}
</style>
