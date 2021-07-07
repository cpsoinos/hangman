<template>
  <div>
    <div class="p-8">
      {{ store.state.guessesRemaining }} {{ t('game.guesses_remaining') }}
    </div>
    <ul class="list-none inline-flex flex-wrap space-x-2">
      <li v-for="(letter, i) in letters" :key="i">
        <Letter :letter="letter" />
      </li>
    </ul>
    <Guess />
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'
import { useStore } from '~/store'

const { t } = useI18n()
const store = useStore()

const letters = computed(() => store.getters.letters as string[])
</script>
