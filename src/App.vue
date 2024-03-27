<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'

var customViewportCorrectionVariable = 'vh'
function setViewportProperty(doc: any) {
  // let originalHeight = window.innerHeight

  let prevClientHeight: any
  var customVar = '--' + (customViewportCorrectionVariable || 'vh')
  function handleResize() {
    var clientHeight = doc.clientHeight
    console.log(doc.clientHeight, 'doc-clientHeight')
    console.log(doc.scrollHeight, 'doc-scrollHeight')
    if (clientHeight === prevClientHeight) return
    requestAnimationFrame(function updateViewportHeight() {
      // if()
      doc.style.setProperty(customVar, clientHeight * 0.01 + 'px')
      prevClientHeight = clientHeight
    })
  }
  handleResize()
  return handleResize
}
onMounted(() => {
  window.addEventListener('resize', setViewportProperty(document.documentElement))
})

onUnmounted(() => {
  window.removeEventListener('resize', setViewportProperty(document.documentElement))
})
</script>

<template>
  <RouterView />
</template>

<style scoped></style>
