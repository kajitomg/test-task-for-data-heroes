<script
    setup
    lang='ts'
>

import ErrorField from '@/shared/components/error-field/error-field.vue';

defineProps<{
  title: string,
}>();
</script>

<template>
  <error-field
    :title='title'
  />
</template>

<style
    scoped
    lang='scss'
>
</style>
