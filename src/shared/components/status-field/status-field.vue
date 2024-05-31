<script
    setup
    lang='ts'
>
import StatusIcon from '@/shared/components/status-icon/status-icon.vue';

enum statusColor {
  'Alive' = 'success',
  'Dead' = 'error',
  'unknown' = 'info',
}

enum statusName {
  'Alive' = 'Alive',
  'Dead' = 'Dead',
  'unknown' = 'Unknown',
}

defineProps<{
  status: 'Alive' | 'Dead' | 'unknown',
  species?: string,
}>();

</script>

<template>
  <div class='status-field'>
    <status-icon :color='statusColor[status]' class='status-field__icon' />
    {{ statusName[status] }}
    {{ species && ' - ' }}
    {{ species }}
  </div>
</template>

<style
    scoped
    lang='scss'
>
.status-field {
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 500;
  line-height: 26px;
  color: var(--c-text-dark-1);

  &__icon {
    margin: 0 6.75px 0 0;
  }
}
</style>
