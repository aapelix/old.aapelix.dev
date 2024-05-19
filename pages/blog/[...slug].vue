<template>
  <main class="min-h-[140vh]">
    <ContentDoc>

      <template v-slot="{ doc }">
        <p class="text-center mt-44 translate-y-44">{{ doc.date }}</p>
        <h1 class="text-5xl font-black text-center mt-44">{{ doc.headline }}</h1>
        <ContentRenderer class="mt-20" :value="doc" />
      </template>

      <template #not-found>
        <ClientOnly>
          <h1 class="h4 text-ce">404 - Page Not Found</h1>
        </ClientOnly>
      </template>

    </ContentDoc>
  </main>
</template>

<style scoped>
main :deep(h3) {
  font-size: 1.5rem;
  font-weight: bold;
}

main :deep(a) {
  color: lightgray;
}

main :deep(h3 a) {
  color: white;
}

main :deep(h4) {
  font-size: 1.25rem;
}

main :deep(h4 a) {
  color: white;
}

main :deep(ul) {
  list-style-type: circle;
  padding-left: 20px;
}

main :deep(p) {
  margin-top: 5px;
  margin-bottom: 5px;
}

main :deep(a:hover) {
  color: gray;
}

</style>