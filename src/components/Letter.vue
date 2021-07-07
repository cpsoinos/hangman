<template>
  <div class="p-6 h-12" :class="{ 'border-b-2': letter !== ' ' }">
    <span v-if="shouldDisplayLetter" :class="{ 'text-red-600': gameIsLost }">
      {{ letter }}
    </span>
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

const gameIsLost = computed(() => store.getters.gameIsLost)

const shouldDisplayLetter = computed(() => {
  return store.getters.isGuessed(props.letter) || gameIsLost.value
})
</script>
