<script setup lang="ts">
const config = useRuntimeConfig()
</script>

<template>
    <div class="max-w-2xl m-auto mt-72">
        <h1 class="text-3xl font-bold mb-3">
            {{ $t("support.title") }}
        </h1>
        <p class="text-gray-500 dark:text-gray-400 text-lg mb-5 font-semibold">
            {{ $t("support.description") }}
        </p>
        <div class="relative">
            <UButton block :label="$t('support.button')" size="xl" icon="i-ph-carrot" color="orange"
                :to="config.public.supportUrl" target="_blank" />
            <div class="absolute -top-10 -right-0 sm:-right-4 rotate-6">
                <img :src="config.public.logoUrl" alt="logo" class="h-16" />
                <UIcon name="i-heroicons-heart-solid" class="text-red-500 text-4xl absolute -bottom-3 right-0" />
            </div>
        </div>
    </div>
</template>