<template>
  <button
    :type="buttonType"
    class="
      rounded-md
      shadow
      flex
      items-center
      justify-center
      px-8
      py-3
      border border-transparent
      text-base
      font-medium
      rounded-md
      text-white
      bg-indigo-600
      hover:bg-indigo-700
      md:py-4 md:text-lg md:px-10
    "
    :class="{ 'opacity-75': disabled }"
    :disabled="disabled"
    @click="onClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import type { ButtonHTMLAttributes } from '@vue/runtime-dom'

defineProps({
  /**
   * Set the `type` attribute on the rendered `<button>` element
   * @values 'button', 'reset', 'submit'
   */
  buttonType: {
    type: String as () => ButtonHTMLAttributes['type'],
    required: false,
    default: 'button'
  },
  /**
   * Sets `disabled="true"` on the rendered `<button>` element
   */
  disabled: {
    type: Boolean,
    required: false,
    default: false
  }
})

const emit = defineEmits(['click'])

const onClick = (event: Event) => {
  emit('click', event)
}
</script>
