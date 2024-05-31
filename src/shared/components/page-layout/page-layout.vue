<script setup lang="ts">
import ContentContainer from '@/shared/ui/content-container/content-container.vue';
</script>

<template>
  <div class="page-layout">
    <main class="main">
      <content-container>
        <div class="main_content">
          <slot></slot>
        </div>
      </content-container>
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
}

.main_content {
  height: 100%;
}
</style>
