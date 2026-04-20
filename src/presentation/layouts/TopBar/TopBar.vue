<script setup lang="ts">
import { ref, onMounted } from 'vue'
// ========= Components ============
import LogoIcon from '@/presentation/components/LogoIcon/LogoIcon.vue'
// ========= Animations ============
import { animateIn } from './TopBar.animations'
// ========= Composables / Custom Hooks =========
import { useAppMeta } from '@/application/composables/useAppMeta'
// ========= Styles ============
import { Bar, BrandWrapper, BrandName } from './TopBar.styles'

const { meta } = useAppMeta()
const barRef = ref<HTMLElement | null>(null)

onMounted(() => {
  animateIn(barRef)
})
</script>

<template>
  <Bar ref="barRef">
    <BrandWrapper>
      <LogoIcon :size="32" />
      <BrandName>{{ meta.name }}</BrandName>
    </BrandWrapper>
  </Bar>
</template>
