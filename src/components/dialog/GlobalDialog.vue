<!-- The main global dialog to show various things -->
<template>
  <Dialog
    v-model:visible="dialogStore.isVisible"
    modal
    closable
    closeOnEscape
    dismissableMask
    :maximizable="maximizable"
    :maximized="maximized"
    @hide="dialogStore.closeDialog"
    @maximize="onMaximize"
    @unmaximize="onUnmaximize"
    :pt="{ header: 'pb-0' }"
    :aria-labelledby="headerId"
  >
    <template #header>
      <component
        v-if="dialogStore.headerComponent"
        :is="dialogStore.headerComponent"
        :id="headerId"
      />
      <h3 v-else :id="headerId">{{ dialogStore.title || ' ' }}</h3>
    </template>

    <component :is="dialogStore.component" v-bind="contentProps" />
  </Dialog>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { useDialogStore } from '@/stores/dialogStore'
import Dialog from 'primevue/dialog'

const dialogStore = useDialogStore()
const maximizable = computed(
  () => dialogStore.dialogComponentProps.maximizable ?? false
)
const maximized = ref(false)

const onMaximize = () => {
  maximized.value = true
}

const onUnmaximize = () => {
  maximized.value = false
}

const contentProps = computed(() =>
  maximizable.value
    ? {
        ...dialogStore.props,
        maximized: maximized.value
      }
    : dialogStore.props
)

const headerId = `dialog-${Math.random().toString(36).substr(2, 9)}`
</script>
