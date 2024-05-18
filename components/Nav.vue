<script setup lang="ts">
const links = [
    [{
        label: "aapelix.dev"
    }],
    [{
      label: 'Home',
      to: '/'
    }, {
      label: 'Projects',
      to: '/projects',
    }, {
      label: 'soonTM',
      to: '/soontm'
    }], [{
    label:"",
      icon: "i-heroicons-magnifying-glass-20-solid"
    }]
]

const mobileLinks = [
    [{
        label: "aapelix.dev"
    }],
    [{
      label: 'Home',
      to: '/'
    }, {
      label: 'Projects',
      to: '/projects',
    }, {
      label: 'soonTM',
      to: '/soontm'
    }], [{
      label: "Search",
      icon: "i-heroicons-magnifying-glass-20-solid"
    }]
]

    const isOpen = ref(false)

</script>

<template>
    <UHorizontalNavigation class="md:flex hidden" :links="links" />
    <div class="md:hidden flex text-5xl justify-between">
        <NuxtLink to="/"><p class="hand">a</p></NuxtLink>
        <UButton @click="isOpen = true" class="w-10 h-10 mt-2 flex justify-center items-center" icon="i-heroicons-bars-3-16-solid" />
    </div>

    <USlideover v-model="isOpen">
      <UCard class="flex flex-col flex-1" :ui="{ body: { base: 'flex-1' }, ring: '', divide: 'divide-y divide-gray-100 dark:divide-gray-800' }">
        <template #header>
          <div class="flex items-center justify-between">
            <h3 class="text-base font-semibold leading-6 text-gray-900 dark:text-white">
              aapelix.dev
            </h3>
            <UButton color="gray" variant="ghost" icon="i-heroicons-x-mark-20-solid" class="-my-1" @click="isOpen = false" />
          </div>
        </template>

        <UVerticalNavigation :links="mobileLinks" />
      </UCard>
    </USlideover>
</template>