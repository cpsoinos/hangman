<template>
  <div class="p-6" :class="{ 'border-b-2': letter !== ' ' }">
    <template v-if="shouldDisplayLetter">
      {{ letter }}
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '~/store'

const store = useStore()

const props = defineProps({
  letter: {
    type: String,
    required: false,
    default: ''
  }
})

const shouldDisplayLetter = computed(() => {
  return store.getters.isGuessed(props.letter)
})
</script>
