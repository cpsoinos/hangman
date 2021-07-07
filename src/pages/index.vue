<template>
  <div>
    <p class="text-4xl">
      <carbon-campsite class="inline-block" />
    </p>
    <p>
      <a rel="noreferrer" href="" target="_blank">
        Hangman
      </a>
    </p>
    <p>
      <em class="text-sm opacity-75">{{ t('intro.desc') }}</em>
    </p>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<route lang="yaml">
meta:
  layout: home
</route>
