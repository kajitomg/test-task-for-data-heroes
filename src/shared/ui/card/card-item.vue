<script setup lang='ts'>
defineProps<{
  title: string;
}>();
</script>

<template>
  <article class='card'>
    <div
      v-if="$slots['start-image']"
      class='card__image'
    >
      <slot name='start-image' />
    </div>
    <div class='card__content-wrapper'>
      <div
        class='card__content-title'
        v-if="title || $slots['title-info']"
      >
        <h2
          v-if="title"
        >
          {{ title }}
        </h2>
        <slot name='title-info' />
      </div>
      <div
        v-if="$slots.default"
        class='card__content'
      >
        <slot />
      </div>
      <div
        v-if="$slots.actions"
        class='card__content-actions'
      >
        <slot name='actions' />
      </div>
    </div>
    <div
      v-if="$slots['end-image']"
      class='card__image'
    >
      <slot name='end-image' />
    </div>
  </article>
</template>

<style
    scoped
    lang='scss'
>
.card {
  display: flex;
  border-radius: 0.5rem;
  height: 220px;
  width: 600px;

  overflow: hidden;

  &__content-wrapper {
    display: flex;
    flex-direction: column;
    padding: 13.5px;
    flex: 3 1 0%;
  }

  &__image {
    height: 100%;
    flex: 2 1 0%;

    img {
      height: 100%;

      object-fit: contain;
    }
  }

  &__content {
    flex: 1 1 0%;
  }

  &__content-title {
    flex: 1 1 0%;
    & h2 {
      cursor: pointer;
      line-height: 1.1;
      font-size: 26px;
      font-weight: 800;

      @media (hover: hover) and (pointer: fine) {
        &:hover {
          color: var(--color-text-selection);
        }
      }
    }
  }

  &__content-actions {
    flex: 1 1 0%;

  }
  @container (max-width: 600px) {
    & {
      flex-direction: column;
      height: auto;
      width: auto;

      & img {
        height: 300px;
        width: 100%;
      }
    }
  }
}
</style>
