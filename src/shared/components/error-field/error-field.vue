<script
    setup
    lang='ts'
>

import ContentContainer from '@/shared/ui/content-container/content-container.vue';

defineProps<{
  title: string,
}>();

</script>

<template>
  <section class='error-field'>
    <content-container>
      <div
        v-if='Boolean(title)'
        class='error-field__title'
      >
        {{ title }}
      </div>
      <div
        v-if='$slots.default'
        class='error-field__content'
      >
        <slot />
      </div>
    </content-container>
  </section>
</template>

<style
    scoped
    lang='scss'
>
.error-field {
  display: flex;
  width: 100%;
  min-height: 250px;
  border-radius: 0.5rem;

  background-color: rgb(60, 62, 68);

  &__title {
    flex: 1 1 0%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  &__content {
    flex: 1 1 0%;
  }
}
</style>
