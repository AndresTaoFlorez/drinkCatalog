<script setup lang="ts">
import { ref, onMounted } from 'vue'
// == Animations ==
// import { animateIn } from './LogoIcon.animations'
// == Styles ==
import { LogoWrapper } from './LogoIcon.styles'

defineProps<{ size?: number }>()

const logoRef = ref<HTMLElement | null>(null)

// onMounted(() => {
//   logoAnimateIn(logoRef)
// })
</script>

<template>
  <LogoWrapper>
    <svg :width="size ?? 36" :height="size ?? 36" viewBox="0 0 36 36" fill="none">
      <rect class="logo-bg" width="36" height="36" rx="8" />
      <path class="logo-glass" d="M11 8 Q11 6 13 6 L23 6 Q25 6 25 8 L23 28 L13 28 Z" />
      <path class="logo-liquid" d="M13 10 L23 10 L22 26 L14 26 Z" />
      <rect class="logo-straw" x="24" y="6" width="2" height="16" rx="1" />
    </svg>
  </LogoWrapper>
</template>
