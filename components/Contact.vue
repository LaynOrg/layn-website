<script setup lang="ts">
import type { ContactInfoProps } from '~/types';

const config = useRuntimeConfig()

const ui = {
    base: "hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ring-0",
}

const contactInfos: ContactInfoProps[] = [
    {
        name: "Discord",
        description: "contact.discordDescription",
        icon: "i-simple-icons-discord",
        href: config.public.discordUrl,
        color: "[#7289da]",
    },
    {
        name: "contact.email.title",
        description: "contact.email.description",
        icon: "i-simple-icons-maildotru",
        href: `mailto:${config.public.emailAddress}`,
        color: "red-500",
    },
]

</script>

<template>
    <section class="my-72" id="contact">
        <h1 class="text-3xl font-bold mb-3">{{ $t("contact.title") }}</h1>
        <p class="text-gray-500 dark:text-gray-400 text-lg mb-10 font-semibold">
            {{ $t("contact.description") }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 text-white">
            <UCard v-for="contactInfo in contactInfos" :class="`bg-${contactInfo.color} dark:bg-${contactInfo.color}`"
                :ui="ui" as="a" :href="contactInfo.href" target="_blank" :key="contactInfo.name">
                <div class="flex items-center gap-5 mb-4">
                    <UIcon :name="contactInfo.icon" class="text-4xl" />
                    <h1 class="text-2xl font-bold">
                        {{ $t(contactInfo.name) }}
                    </h1>
                </div>
                <p class="font-semibold">
                    {{ $t(contactInfo.description) }}
                </p>
            </UCard>
        </div>
    </section>
</template>
