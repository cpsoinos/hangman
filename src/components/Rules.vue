<template>
  <div class="py-12">
    <div class="mx-auto px-4 sm:px-6 lg:px-8">
      <div class="lg:text-center">
        <h2 class="mt-2 text-3xl leading-8 font-extrabold tracking-tight sm:text-4xl">
          {{ t('rules.headline') }}
        </h2>
        <p class="mt-4 max-w-2xl text-xl lg:mx-auto">
          {{ t('rules.subheader') }}
        </p>
      </div>

      <div class="mt-10">
        <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
          <div v-for="rule in rules" :key="rule.name" class="relative">
            <dt>
              <p class="ml-16 text-lg leading-6 font-medium">
                {{ rule.name }}
              </p>
            </dt>
            <dd class="mt-2 ml-16 text-base">
              {{ rule.description }}
            </dd>
          </div>
        </dl>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const rules = [
  {
    name: t('rules.guess_letters.title'),
    description: t('rules.guess_letters.description')
  },
  {
    name: t('rules.limitation.title'),
    description: t('rules.limitation.description')
  },
  {
    name: t('rules.lose.title'),
    description: t('rules.lose.description')
  },
  {
    name: t('rules.win.title'),
    description: t('rules.win.description')
  }
]
</script>
