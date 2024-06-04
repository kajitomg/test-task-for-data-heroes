<script setup lang="ts">

interface FormFieldProps {
  label?: string,
  helperText?: string,
  invalid?: boolean,
}

defineProps<FormFieldProps>();

</script>

<template>
  <div
    class="form-field"
  >
    <div
      v-if="!!label || $slots.label"
      class="form-field__label"
    >
      <span v-if="!!label && !$slots.label">{{label}}</span>
      <slot name="label" />
    </div>
    <div
      v-if="$slots.default"
      class="form-field__content"
    >
      <slot />
    </div>
    <div
      v-if="!!helperText || $slots['helper-text']"
      class="form-field__helper-text"
      :class="{ invalid }"
    >
      <span v-if="!!helperText && !$slots['helper-text']">{{helperText}}</span>
      <slot v-if="!helperText" name="helper-text" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  .form-field {
    flex-direction: column;
    margin: 8px 0;
  }
  .form-field__label {
    display: inline-block;
    margin-bottom: 12px;
    padding: 0 4px;

    font-size: 14px;
    font-weight: bold;

  }

  .form-field__content {
  }
  .form-field__helper-text {
    display: inline-block;
    margin-top: 8px;
    padding: 0 4px;

    color: #b0b0b0;

    font-size: 14px;

    &.invalid {
      color: red;
    }
  }
</style>
