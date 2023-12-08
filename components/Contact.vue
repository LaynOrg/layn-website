<script setup lang="ts">
const config = useRuntimeConfig()
const emailHref = computed(() => `mailto:${config.public.emailAddress}`)

const ui = {
    base: "hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ring-0",
}

</script>

<template>
    <section class="my-72" id="contact">
        <h1 class="text-3xl font-bold mb-3">{{ $t("contact.title") }}</h1>
        <p class="text-gray-500 dark:text-gray-400 text-lg mb-10 font-semibold">
            {{ $t("contact.description") }}
        </p>
        <div class="grid grid-cols-1 sm:grid-cols-2 gap-5 text-white">
            <UCard class="bg-[#7289da] dark:bg-[#7289da]" as="a" :href="config.public.discordUrl" target="_blank" :ui="ui">
                <div class="flex items-center gap-5 mb-4">
                    <UIcon name="i-simple-icons-discord" class="text-4xl" />
                    <h1 class="text-2xl font-bold">Discord</h1>
                </div>
                <p class="font-semibold">
                    {{ $t("contact.discordDescription") }}
                </p>
            </UCard>
            <UCard class="bg-red-500 dark:bg-red-500" as="a" :href="emailHref" target="_blank" :ui="ui">
                <div class="flex items-center gap-5 mb-4">
                    <UIcon name="i-simple-icons-maildotru" class="text-4xl" />
                    <h1 class="text-2xl font-bold">{{ $t("contact.email.title") }}</h1>
                </div>
                <p class="font-semibold">
                    {{ $t("contact.email.description") }}
                </p>
            </UCard>
        </div>
    </section>
</template>
