<script setup>
    const q = ref("")

    const data = 
    [
        {
            id: 1,
            title: "weather.aapelix.dev",
            desc: "My weather app made with NextJs, TailWindCss & OpenWeatherMap",

            ghLink: "https://github.com/aapelix/weather.aapelix.dev",
            siteLink: "https://weather.aapelix.dev",
        },
        {
            id: 2,
            title: "weather.aapelix.dev",
            desc: "My weather app made with NextJs, TailWindCss & OpenWeatherMap",

            ghLink: "https://github.com/aapelix/weather.aapelix.dev",
            siteLink: "https://weather.aapelix.dev",
        },
        {
            id: 3,
            title: "weather.aapelix.dev",
            desc: "My weather app made with NextJs, TailWindCss & OpenWeatherMap",

            ghLink: "https://github.com/aapelix/weather.aapelix.dev",
            siteLink: "https://weather.aapelix.dev",
        },
    ]
</script>

<template>
    <UCard class="mt-10">
        <UInput
            v-model="q"
            name="q"
            placeholder="Search..."
            icon="i-heroicons-magnifying-glass-20-solid"
            autocomplete="off"
            :ui="{ icon: { trailing: { pointer: '' } } }"
        >
            <template #trailing>
              <UButton
                v-show="q !== ''"
                color="gray"
                variant="link"
                icon="i-heroicons-x-mark-20-solid"
                :padded="false"
                @click="q = ''"
              />
            </template>
        </UInput>
        <div v-for="project in data">
        <UCard class="mt-5">
            <template #header>
                <h1 class="font-black">{{ project.title }}</h1>
                <p>{{ project.desc }}</p>
            </template>
            <template #footer>
                <UButton class="mr-2"><NuxtLink :to="project.ghLink" target="_blank">Github</NuxtLink></UButton>
                <UButton class="mr-2"><NuxtLink :to="project.siteLink" target="_blank">Site</NuxtLink></UButton>
            </template>
        </UCard>
        </div>
    </UCard>
</template>