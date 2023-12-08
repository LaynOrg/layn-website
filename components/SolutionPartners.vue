<script setup lang="ts">
import type { LinkProps } from '~/types'

const config = useRuntimeConfig()

const solutionPartners: LinkProps[] = [
    {
        label: "Hayying",
        href: config.public.hayyingUrl
    }
]

</script>

<template>
    <section class="mt-72 text-center" id="solution-partners">
        <h1 class="text-3xl font-bold mb-3">{{ $t("solutionPartners.title") }}</h1>
        <p class="text-gray-500 dark:text-gray-400 text-lg mb-10 font-semibold max-w-xl m-auto">
            {{ $t("solutionPartners.description") }}
        </p>
        <div class="flex flex-wrap justify-center gap-5">
            <UButton v-for="solutionPartner in solutionPartners" :key="solutionPartner.href" :to="solutionPartner.href"
                target="_blank" variant="soft" size="xl" :label="solutionPartner.label" />
        </div>
    </section>
</template>