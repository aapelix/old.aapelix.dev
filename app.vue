<script setup>
  useHead({
    title: "aapelix.dev"
  })

  useSeoMeta({
    title: "aapelix.dev",
    ogTitle: "aapelix.dev",
    description: "Its me, aapelix.",
    ogDescription: "Its me, aapelix.",
    ogImage: "https://yt3.googleusercontent.com/FI_rB6J_kfioxNjCZydxlDczHJ1vFf7-rQgoX2sjHkMYC18ZJYCQIo1ixrMBD-q92MASy88EHA=w1707-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
  })
  

  const appConfig = useAppConfig()
  console.log(appConfig)
</script>

<template>
  <UContainer>
    <Nav />
    <NuxtPage />
    <UDivider class="-translate-y-28" label="Made by" />
    <p class="text-center -translate-y-24 text-7xl hand">aapelix</p>
  </UContainer>
</template>

<style>

@import url('https://fonts.googleapis.com/css2?family=Damion&');

:root {
  font-family: "Noto Sans Mono", sans-serif
}

.hand {
  font-family: "Damion", cursive;
  font-weight: 400;
  font-style: normal;
}

* {
  -ms-overflow-style: none;
}
::-webkit-scrollbar {
  display: none;
}
</style>
