<template>
  <div class="rounded-md shadow">
    <button
      class="
        w-full
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
      @click="onClick"
    >
      <slot />
    </button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['click'])

const onClick = (event: Event) => {
  emit('click', event)
}
</script>
