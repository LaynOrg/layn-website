<script setup lang="ts">
useSeoMeta({
  title: 'Layn',
})

useHead({
  bodyAttrs: {
    class: 'bg-white dark:bg-gray-900'
  }
})

</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>