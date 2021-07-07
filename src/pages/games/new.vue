<template>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'New Game',
  meta: [
    { name: 'description', content: 'Create a new game of Hangman' },
  ],
})
</script>
