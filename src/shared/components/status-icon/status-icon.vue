<script
    setup
    lang='ts'
>
defineProps<{
  color:'error' | 'success' | 'info',
}>();
</script>

<template>
  <span class='status-icon' :class='`status-icon_color_${color}`' />
</template>

<style
    scoped
    lang='scss'
>
.status-icon {
  display: block;
  width: 0.5rem;
  height: 0.5rem;
  border-radius: 50%;

  &_color_success {
    background-color: #55cc44;
  }
  &_color_error {
    background-color: #d63d2e;
  }
  &_color_info {
    background-color: #9e9e9e;
  }
}
</style>
