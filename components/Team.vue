<script setup lang="ts">
import type { TeamMemberProps } from "~/types";

const teamMembers: TeamMemberProps[] = [
    {
        name: "yali",
        image: "https://avatars.githubusercontent.com/u/121391005?v=4",
    },
    {
        name: "Lynicis",
        image: "https://avatars.githubusercontent.com/u/42099235?v=4",
    }
]

const href = (name: string) => computed(() => `https://${name.toLocaleLowerCase()}.dev`)

</script>

<template>
    <section class="mt-72 text-center" id="team">
        <h1 class="text-3xl font-bold mb-10">{{ $t("team.title") }}</h1>
        <div class="flex flex-wrap gap-10 justify-center">
            <UCard :ui="{ body: { base: 'grid gap-3' } }" v-for="teamMember in teamMembers" :key="teamMember.name">
                <UAvatar :src="teamMember.image" size="3xl" class="m-auto" />
                <h1 class="text-2xl font-semibold ">
                    {{ teamMember.name }}
                </h1>
                <UButton block variant="link" :label="$t('team.moreInfo')" :to="href(teamMember.name).value"
                    target="_blank" />
            </UCard>
        </div>
    </section>
</template>
