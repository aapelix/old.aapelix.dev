<script setup>
    useHead({
    title: "aapelix.dev"
  })
</script>

<template>
    <div class="h-screen overflow-x-hidden m-0 flex justify-center items-center">
        <Star />
        <h1 class="md:text-7xl text-5xl font-black -translate-y-10">aapelix.dev</h1>
    </div>
    <div class="-translate-y-44">
        <AboutMe />
        <RecentBlog />
        <Projects />
        <Socials />
    </div>
</template>