<script setup lang="ts">
import { ref, onMounted } from 'vue'
// == Components ==
import TopBar from '@/presentation/layouts/TopBar/TopBar.vue'
import AppFooter from '@/presentation/layouts/AppFooter/AppFooter.vue'
import HeroCarousel from '@/presentation/components/HeroCarousel/HeroCarousel.vue'
import CategoryCard from '@/presentation/components/CategoryCard/CategoryCard.vue'
import ProductCard from '@/presentation/components/ProductCard/ProductCard.vue'
import PromoBanner from '@/presentation/components/PromoBanner/PromoBanner.vue'
import SectionHeader from '@/presentation/components/SectionHeader/SectionHeader.vue'
// == Styles ==
import {
  Page, PageLogo, PageLogoImg, Section,
  ScrollWrap, ScrollRow, ScrollDots, ScrollDot,
  ScrollCard, ScrollCategoryCard
} from './HomePage.styles'
// == Animations ==
import { animateLogo } from './HomePage.animations'
// == State ==
import { useDrinks } from '@/application/composables/useDrinks'

const { categoryPreviews, bestPrices, topPopular } = useDrinks()

const logoRef = ref<HTMLElement | null>(null)

onMounted(() => {
  animateLogo(logoRef)
})

// ── Scroll tracking & drag ──

const DOT_COUNT = 5

/** Resolve a Vue template ref to its underlying DOM element. */
function resolveEl(r: { value: unknown }): HTMLElement | null {
  const v = r.value as { $el?: HTMLElement } | HTMLElement | null
  if (!v) return null
  if (v instanceof HTMLElement) return v
  if ((v as { $el?: HTMLElement }).$el instanceof HTMLElement)
    return (v as { $el: HTMLElement }).$el
  return null
}

function useScrollRow(elRef: ReturnType<typeof ref>) {
  const activeIdx = ref(0)

  let pending = false
  let dragging = false
  let startX = 0
  let scrollStart = 0
  const DRAG_THRESHOLD = 5

  function onScroll() {
    const row = resolveEl(elRef)
    if (!row) return
    const max = row.scrollWidth - row.clientWidth
    if (max <= 0) { activeIdx.value = 0; return }
    activeIdx.value = Math.round((row.scrollLeft / max) * (DOT_COUNT - 1))
  }

  function onDown(e: PointerEvent) {
    const row = resolveEl(elRef)
    if (!row || e.button !== 0) return
    pending = true
    dragging = false
    startX = e.clientX
    scrollStart = row.scrollLeft
  }

  function onMove(e: PointerEvent) {
    if (!pending && !dragging) return
    const row = resolveEl(elRef)
    if (!row) return
    const dx = e.clientX - startX
    if (!dragging && Math.abs(dx) > DRAG_THRESHOLD) {
      dragging = true
      pending = false
      row.style.cursor = 'grabbing'
      row.setPointerCapture(e.pointerId)
    }
    if (dragging) {
      e.preventDefault()
      row.scrollLeft = scrollStart - dx
    }
  }

  function onUp() {
    const row = resolveEl(elRef)
    pending = false
    if (!dragging) return
    dragging = false
    if (row) row.style.cursor = ''
  }

  /** Block click events that fire after a drag. */
  function onClick(e: MouseEvent) {
    if (dragging) e.stopPropagation()
  }

  return { activeIdx, onScroll, onDown, onMove, onUp, onClick }
}

const catRef = ref<HTMLElement | null>(null)
const priceRef = ref<HTMLElement | null>(null)
const popRef = ref<HTMLElement | null>(null)

const catScroll = useScrollRow(catRef)
const priceScroll = useScrollRow(priceRef)
const popScroll = useScrollRow(popRef)
</script>

<template>
  <Page>
    <TopBar />

    <!-- Logo -->
    <PageLogo>
      <PageLogoImg ref="logoRef" src="/logo.svg" alt="Nocturna Bogotana" />
    </PageLogo>

    <!-- Hero Carousel -->
    <HeroCarousel />

    <!-- Categories -->
    <Section>
      <SectionHeader eyebrow="Nuestras Categorias" title="Explora nuestra variedad de licores" />
      <ScrollWrap>
        <ScrollRow
          ref="catRef"
          @scroll="catScroll.onScroll"
          @pointerdown="catScroll.onDown"
          @pointermove="catScroll.onMove"
          @pointerup="catScroll.onUp"
          @pointercancel="catScroll.onUp"
          @click.capture="catScroll.onClick"
        >
          <ScrollCategoryCard v-for="cat in categoryPreviews" :key="cat.id">
            <CategoryCard
              :categoryId="cat.id"
              :label="cat.label"
              :count="cat.count"
              :preview="cat.preview"
            />
          </ScrollCategoryCard>
        </ScrollRow>
        <ScrollDots>
          <ScrollDot v-for="i in DOT_COUNT" :key="i" :active="i - 1 === catScroll.activeIdx.value" />
        </ScrollDots>
      </ScrollWrap>
    </Section>

    <!-- Best Prices -->
    <Section>
      <SectionHeader eyebrow="Ofertas" title="Mejores Precios" />
      <ScrollWrap>
        <ScrollRow
          ref="priceRef"
          @scroll="priceScroll.onScroll"
          @pointerdown="priceScroll.onDown"
          @pointermove="priceScroll.onMove"
          @pointerup="priceScroll.onUp"
          @pointercancel="priceScroll.onUp"
          @click.capture="priceScroll.onClick"
        >
          <ScrollCard v-for="drink in bestPrices" :key="drink.id">
            <ProductCard :drink="drink" />
          </ScrollCard>
        </ScrollRow>
        <ScrollDots>
          <ScrollDot v-for="i in DOT_COUNT" :key="i" :active="i - 1 === priceScroll.activeIdx.value" />
        </ScrollDots>
      </ScrollWrap>
    </Section>

    <!-- Promo Banner -->
    <Section>
      <PromoBanner />
    </Section>

    <!-- Popularity -->
    <Section>
      <SectionHeader eyebrow="Tendencia" title="Los Mas Populares" />
      <ScrollWrap>
        <ScrollRow
          ref="popRef"
          @scroll="popScroll.onScroll"
          @pointerdown="popScroll.onDown"
          @pointermove="popScroll.onMove"
          @pointerup="popScroll.onUp"
          @pointercancel="popScroll.onUp"
          @click.capture="popScroll.onClick"
        >
          <ScrollCard v-for="drink in topPopular" :key="drink.id">
            <ProductCard :drink="drink" />
          </ScrollCard>
        </ScrollRow>
        <ScrollDots>
          <ScrollDot v-for="i in DOT_COUNT" :key="i" :active="i - 1 === popScroll.activeIdx.value" />
        </ScrollDots>
      </ScrollWrap>
    </Section>

    <!-- Footer -->
    <AppFooter />
  </Page>
</template>
