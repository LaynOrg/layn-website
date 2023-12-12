<script setup lang="ts">
import type { SolutionProps } from "~/types";

const config = useRuntimeConfig();

const solutions: SolutionProps[] = [
    {
        name: "Layn",
        description: "solutions.solutionDescriptions.0",
        image: config.public.logoUrl,
        comingSoon: true,
    },
    {
        name: "Lisansly",
        description: "solutions.solutionDescriptions.1",
        href: config.public.lisanslyUrl,
        image: config.public.lisanslyLogoUrl,
    },
];
</script>

<template>
    <section class="mt-72" id="solutions">
        <h1 class="text-3xl font-bold mb-3">{{ $t("solutions.title") }}</h1>
        <p class="text-gray-500 dark:text-gray-400 text-lg mb-10 font-semibold">
            {{ $t("solutions.description") }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <UCard v-for="{ description, image, name, comingSoon, href } in solutions" :key="name" class="flex"
                :ui="{ body: { base: 'grid grid-rows-[auto,1fr,auto]' } }">
                <div class="flex items-center gap-3 mb-3">
                    <img :src="image" class="h-10 object-contain" :alt="name" />
                    <h1 class="text-2xl font-semibold">{{ name }}</h1>
                </div>
                <p class="text-gray-500 dark:text-gray-400 mb-7">
                    {{ $t(description) }}
                </p>
                <UButton v-if="comingSoon" block disabled size="md" :label="$t('solutions.comingSoon')" />
                <UButton v-else block size="md" :to="href" target="_blank" :label="$t('solutions.visit')" />
            </UCard>
        </div>
    </section>
</template>
