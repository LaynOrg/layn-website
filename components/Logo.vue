<script setup lang="ts">
const config = useRuntimeConfig()

</script>

<template>
    <div class="flex items-center flex-nowrap gap-2">
        <img :src="config.public.logoUrl" alt="logo" class="w-7 h-7 object-contain" />
        <h1 class="font-bold">
            Layn
        </h1>
    </div>
</template>

