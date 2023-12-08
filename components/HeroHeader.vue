<template>
    <section class="mt-40 sm:mt-52 justify-center grid text-center">
        <h1 class="text-5xl font-bold mb-4">
            {{ $t('heroHeader.title') }}
        </h1>
        <p class="text-gray-500 font-semibold dark:text-gray-400 text-2xl">
            {{ $t('heroHeader.description') }}
        </p>
        <div class="flex flex-wrap justify-center gap-4 mt-10">
            <UButton color="black" size="xl" to="#solutions">
                {{ $t('heroHeader.solutions') }}
            </UButton>
            <UButton size="xl" to="#contact">
                {{ $t('heroHeader.contact') }}
            </UButton>
        </div>
    </section>
</template>