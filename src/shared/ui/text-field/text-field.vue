<script setup lang="ts">

interface TextFieldProps {
  label: string,
  type?: string,
  required?: boolean,
  invalid?: boolean,
  blured?: boolean,
  fullWidth?: boolean,
  placeholder?: string,
}

defineProps<TextFieldProps>();

const value = defineModel<string | number>();

</script>

<template>
  <label :for="label">
    <input
      :id='label'
      :type='type'
      v-model='value'
      class='text-field'
      :placeholder='required ? `${placeholder}*` : placeholder'
      :required='required'
      :class='{
        invalid,
        filled: !!value,
        blured,
        fullWidth,
      }'
    />
  </label>
</template>

<style scoped lang="scss">
  .text-field {
    position: relative;

    padding: 12px;
    border: #dad8d8 1px solid;
    border-radius: 4px;
    background-color: transparent;

    color: #dad8d8;
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
      &.invalid {
        border: #e82c3f 1px solid;
      }
    }
    &.formBlured {
      &.invalid {
        border: #e82c3f 1px solid;
      }
    }

    &.fullWidth {
      width: 100%;
    }
  }
</style>
