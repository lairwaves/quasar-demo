<template>
  <q-layout ref="layoutRef" view="hHh Lpr lff" container class="layout-vh">
    <q-header elevated class="bg-grey-900">
      <q-toolbar class="flex flex-row justify-center">
        <div>文章</div>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <RouterView />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { onMounted, onUnmounted, ref } from 'vue'

function setFullHeight() {
  var vh = window.innerHeight * 0.01
  document.documentElement.style.setProperty('--vh', `${vh}px`)
}

const layoutRef = ref()

onMounted(() => {
  window.addEventListener('resize', setFullHeight)
  setFullHeight()
})

onUnmounted(() => {
  window.removeEventListener('resize', setFullHeight)
})
</script>

<style lang="scss">
// .container-vh {
//   min-height: calc(var(--vh, 1vh) * 100);
// }
</style>
