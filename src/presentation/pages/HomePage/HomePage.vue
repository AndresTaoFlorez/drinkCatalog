<script setup lang="ts">
import { ref, onMounted, type ComponentPublicInstance } from 'vue'
// == Animations ==
import { animateContent } from './HomePage.animations'
import { logoAnimateIn } from '@/presentation/components/LogoIcon/LogoIcon.animations'
// == Styles ==
import { Page, Content, TitleContent, Title, Tagline } from './HomePage.styles'
// == Components ==
import TopBar from '@/presentation/layouts/TopBar/TopBar.vue'
import LogoIcon from '@/presentation/components/LogoIcon/LogoIcon.vue'
// == State ==
import { useAppMeta } from '@/application/composables/useAppMeta'

const { meta } = useAppMeta()
const titleContentRef = ref<HTMLElement | null>(null)
const logoRef = ref<HTMLElement | null>(null)

onMounted(() => {
  animateContent(titleContentRef)
  logoAnimateIn(logoRef)
})
</script>

<template>
  <Page>
    <TopBar />
    <Content>
      <LogoIcon :size="64" ref="logoRef" />
      <TitleContent ref="titleContentRef">
        <Title>{{ meta.name }}</Title>
        <Tagline>{{ meta.tagline }}</Tagline>
      </TitleContent>
    </Content>
  </Page>
</template>
