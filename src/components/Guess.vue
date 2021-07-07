<template>
  <div class="flex justify-center w-full p-6">
    <form>
      <label for="guess" class="sr-only">{{ t('game.guess.label') }}</label>
      <div class="flex">
        <input
          id="guess"
          v-model="letter"
          type="text"
          class="w-36 px-6 border-2 border-r-0 rounded-l"
          placeholder="A"
          aria-labelledby="guess"
        />
        <Button button-type="submit" class="rounded-l-none rounded-r-full">
          {{ t('button.submit') }}
        </Button>
      </div>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const letter = ref('')
</script>
