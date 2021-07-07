<template>
  <div>
    <ul class="list-none inline-flex space-x-2">
      <li v-for="(letter, i) in letters" :key="i">
        <Letter :letter="letter" />
      </li>
    </ul>
    <Guess />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useStore } from '~/store'

const store = useStore()
const letters = computed(() => store.getters.letters as string[])
</script>
