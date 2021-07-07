<template>
  <div class="flex justify-center w-full p-6">
    <form @submit="onSubmit">
      <label for="guess" class="sr-only">{{ t('game.guess.label') }}</label>
      <div class="flex">
        <input
          id="guess"
          v-model="guess"
          name="guess"
          type="text"
          class="w-36 px-6 border-2 border-r-0 rounded-l"
          placeholder="A"
          aria-labelledby="guess"
        />
        <Button button-type="submit" class="rounded-l-none rounded-r-full" :disabled="!!errorMessage" @click="onSubmit">
          {{ t('button.submit') }}
        </Button>
      </div>
      <span class="text-red-600">{{ errorMessage }}</span>
    </form>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { useField, useForm } from 'vee-validate'
import { useStore } from '~/store'

const { t } = useI18n()
const store = useStore()

const validationSchema = {
  guess: (val: string) => {
    if (!val || val.trim().length === 0) return t('game.guess.errors.required')
    else if (val.match(/[^A-Za-z]/)) return t('game.guess.errors.character')
    else if (val.length > 1) return t('game.guess.errors.length')
    else if (store.getters.isGuessed(val)) return t('game.guess.errors.already_guessed')
    else return true
  }
}

const { handleSubmit } = useForm({ validationSchema })
const { value: guess, errorMessage } = useField('guess')

const onSubmit = handleSubmit((values, { resetForm }) => {
  store.dispatch('guessLetter', values.guess)
  resetForm()
})
</script>
