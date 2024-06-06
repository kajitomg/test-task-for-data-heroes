<script setup lang="ts">

defineProps<{
  title: string
}>();
</script>

<template>
  <form
    class="form-layout"
  >
    <div
      class="form-layout__title"
      v-if="$slots.title || title"
    >
      <h4
        v-if="!$slots.title && !!title"
        class="form-layout__title__text"
      >{{ title }}</h4>
      <slot
        v-if="$slots.title && !title"
        name="title"
      />
    </div>
    <div class="form-layout__content">
      <slot />
    </div>
    <div
      class="form-layout__actions"
      v-if="$slots.actions"
    >
      <slot
        name="actions"
      />
    </div>
  </form>
</template>

<style scoped lang="scss">
  .form-layout {
    padding: 16px;

    background-color: rgb(60, 62, 68);
  }
  .form-layout__title {
    margin: 16px 16px 32px;
  }
  .form-layout__title__text {
    font-size: 20px;
    font-weight: 700;
  }
  .form-layout__content {
  }
  .form-layout__actions {
    margin-top: 16px;
  }
</style>
