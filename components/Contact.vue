<script setup lang="ts">
import type { ContactInfoProps } from '~/types';

const config = useRuntimeConfig()

const contactInfos: ContactInfoProps[] = [
    {
        label: "Discord",
        description: "contact.discordDescription",
        icon: "i-simple-icons-discord",
        href: config.public.discordUrl,
        color: "blue",
    },
    {
        label: "contact.email.title",
        description: "contact.email.description",
        icon: "i-simple-icons-maildotru",
        href: `mailto:${config.public.emailAddress}`,
        color: "red",
    },
]

const colors: Record<string, string> = {
    red: 'bg-red-500 dark:bg-red-500',
    blue: 'bg-[#7289da] dark:bg-[#7289da]',
}

</script>

<template>
    <section class="my-72" id="contact">
        <h1 class="text-3xl font-bold mb-3">{{ $t("contact.title") }}</h1>
        <p class="text-gray-500 dark:text-gray-400 text-lg mb-10 font-semibold">
            {{ $t("contact.description") }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 text-white">
            <UCard v-for="{color,description,href,icon,label} in contactInfos" :class="colors[color]"
                :ui="{ base: 'hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ring-0' }" as="a"
                :href="href" target="_blank" :key="href">
                <div class="flex items-center gap-5 mb-4">
                    <UIcon :name="icon" class="text-4xl" />
                    <h1 class="text-2xl font-bold">
                        {{ $t(label) }}
                    </h1>
                </div>
                <p class="font-semibold">
                    {{ $t(description) }}
                </p>
            </UCard>
        </div>
    </section>
</template>
