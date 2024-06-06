<script setup lang="ts">

interface StyledSelectProps {
  label?: string;
  required?: boolean,
  invalid?: boolean,
  blured?: boolean,
  fullWidth?: boolean,
  placeholder?: string,
}

defineProps<StyledSelectProps>();

const value = defineModel<string | number>();

</script>

<template>
  <label :for="label">
    <select
      :id="label"
      v-model='value'
      :required="required"
      class="styled-select"
      :class='{
        invalid,
        filled: !!value,
        blured,
        fullWidth,
      }'
    >
      <slot />
    </select>
  </label>
</template>

<style scoped lang="scss">
  .styled-select {
    position: relative;
    color: #dad8d8;

    background: url("data:image/svg+xml,<svg height='10px' width='10px' viewBox='0 0 16 16' fill='%23000000' xmlns='http://www.w3.org/2000/svg'><path d='M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z'/></svg>") no-repeat;
    background-position: calc(100% - 0.75rem) center;

    -moz-appearance:none;
    -webkit-appearance: none;
    appearance: none;

    padding: 15px calc(12px + 2rem) 12px 12px;
    border: #dad8d8 1px solid;
    border-radius: 4px;
    background-color: rgb(60, 62, 68);

    font-size: 14px;
    font-weight: bold;

    transition: 0.1s ease;

    &:hover {
      border: #827d7d 1px solid;
    }

    &::placeholder {
      position: relative;
      color: #dad8d8;
      font-weight: normal;
    }
    &.filled {
      border: #827d7d 1px solid;
      &.focused {
        border: #05ce05 1px solid;
      }
      &.invalid {
        border: #e82c3f 1px solid;
      }
    }
    &.blured {
      &.invalid {
        border: #e82c3f 1px solid;
      }
    }

    &.fullWidth {
      width: 100%;
    }

    & option{
      font-size: 14px;
      font-weight: bold;
    }

  }
</style>
