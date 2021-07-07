<template>
  <div class="p-3 border">
    <h3 class="font-semibold text-lg">
      {{ t('game.guessed_letters.title') }}
    </h3>
    <ul class="list-none inline-flex flex-wrap space-x-4">
      <li v-for="(letter, i) in guessedLetters" :key="i">
        <span :class="{ 'text-green-600 font-semibold': store.getters.letterIsInWord(letter) }">{{ letter }}</span>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '~/store'

const { t } = useI18n()
const store = useStore()

const guessedLetters = computed(() => store.state.guessedLetters)
</script>
