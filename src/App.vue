<template>
  <router-view />
  <ProgressSpinner
    v-if="isLoading"
    class="absolute inset-0 flex justify-center items-center h-screen"
  />
  <GlobalDialog />
  <BlockUI full-screen :blocked="isLoading" />
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useWorkspaceStore } from '@/stores/workspaceStore'
import BlockUI from 'primevue/blockui'
import ProgressSpinner from 'primevue/progressspinner'
import GlobalDialog from '@/components/dialog/GlobalDialog.vue'

const workspaceStore = useWorkspaceStore()
const isLoading = computed<boolean>(() => workspaceStore.spinner)
// const handleKey = (e: KeyboardEvent) => {
//   workspaceStore.shiftDown = e.shiftKey
// }
// useEventListener(window, 'keydown', handleKey)
// useEventListener(window, 'keyup', handleKey)

// onMounted(() => {
//   window['__COMFYUI_FRONTEND_VERSION__'] = config.app_version
//   console.log('ComfyUI Front-end version:', config.app_version)
// })
</script>
