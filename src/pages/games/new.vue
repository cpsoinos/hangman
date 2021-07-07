<template>
  <div class="w-full px-4 py-16">
    <div class="w-full max-w-md mx-auto">
      <RadioGroup v-model="selected">
        <RadioGroupLabel class="sr-only">
          Server size
        </RadioGroupLabel>
        <div class="space-y-2">
          <RadioGroupOption
            v-for="gameType in gameTypes"
            :key="gameType.title"
            v-slot="{ active, checked }"
            as="template"
            :value="gameType"
          >
            <div
              :class="[
                active ? 'ring-2 ring-offset-2 ring-offset-indigo-300 ring-white ring-opacity-60' : '',
                checked ? 'bg-indigo-600 bg-opacity-75 text-white ' : 'bg-white '
              ]"
              class="relative flex px-5 py-4 rounded-lg shadow-md cursor-pointer focus:outline-none"
            >
              <div class="flex items-center justify-between w-full">
                <div class="flex items-center">
                  <div class="text-sm">
                    <RadioGroupLabel as="p" :class="checked ? 'text-white' : 'text-gray-900'" class="font-medium">
                      {{ gameType.title }}
                    </RadioGroupLabel>
                    <RadioGroupDescription
                      as="span"
                      :class="checked ? 'text-indigo-100' : 'text-gray-500'"
                      class="inline"
                    >
                      <span>{{ gameType.description }}</span>
                    </RadioGroupDescription>
                  </div>
                </div>
                <div v-show="checked" class="flex-shrink-0 text-white">
                  <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="12" fill="#fff" fill-opacity="0.2" />
                    <path
                      d="M7 13l3 3 7-7"
                      stroke="#fff"
                      stroke-width="1.5"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </RadioGroupOption>
        </div>
      </RadioGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref } from 'vue'
import { useI18n } from 'vue-i18n'
const { t } = useI18n()

useHead({
  title: 'New Game',
  meta: [{ name: 'description', content: 'Create a new game of Hangman' }]
})

const gameTypes = [
  {
    title: t('new_game.single_word.title'),
    description: t('new_game.single_word.description')
  },
  {
    title: t('new_game.phrase.title'),
    description: t('new_game.phrase.description')
  }
]

const selected = ref(gameTypes[0])
</script>
