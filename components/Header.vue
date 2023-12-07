<script setup lang="ts">
import type { LinkProps } from '~/types'

const colorMode = useColorMode()
const { locale } = useI18n()

const isDark = computed({
    get() {
        return colorMode.value === 'dark'
    },
    set() {
        colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
    }
})

const links: LinkProps[] = [
    {
        href: "#solutions",
        label: "headerLinks.0"
    },
    {
        href: "#team",
        label: "headerLinks.1"
    }, {
        href: "#contact",
        label: "headerLinks.2"
    }
]

</script>

<template>
    <UContainer
        class="py-5 flex justify-between items-center [&>div]:gap-2 [&>div]:flex [&>div]:items-center sm:[&>div]:gap-5">
        <div>
            <Logo />
            <UButton v-for=" link in links" :key="link.href" :to="link.href" variant="ghost" color="gray"
                :label="$t(link.label)" class="hidden sm:block" />
        </div>
        <div>
            <USelectMenu v-model="locale" :options="['tr', 'en']" class="uppercase w-16" size="xs">
                <template #label>
                    <p class="uppercase">
                        {{ locale }}
                    </p>
                </template>
            </USelectMenu>
            <UButton icon="i-simple-icons-github" variant="ghost" color="gray" />
            <ClientOnly>
                <UButton :icon="isDark ? 'i-heroicons-moon-20-solid' : 'i-heroicons-sun-20-solid'" aria-label="Theme"
                    variant="ghost" color="gray" @click="isDark = !isDark" />
                <template #fallback>
                    <div class="w-8 h-8" />
                </template>
            </ClientOnly>
        </div>
    </UContainer>
</template>

