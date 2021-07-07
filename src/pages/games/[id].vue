<template>
  <div>
    {{ store.state.value }}
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/store'

const store = useStore()
</script>
