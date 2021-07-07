<template>
  <nav class="text-xl mt-6">
    <router-link class="icon-btn mx-2" to="/" :title="t('button.home')">
      <carbon-campsite />
    </router-link>

    <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <router-link class="icon-btn mx-2" to="/about" :title="t('button.about')">
      <carbon-dicom-overlay />
    </router-link>

    <a class="icon-btn mx-2" rel="noreferrer" href="https://github.com/cpsoinos/hangman" target="_blank" title="GitHub">
      <carbon-logo-github />
    </a>
  </nav>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { isDark, toggleDark } from '~/logic'

const { t } = useI18n()
</script>
