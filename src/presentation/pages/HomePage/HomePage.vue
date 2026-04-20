<script setup lang="ts">
import { ref, onMounted } from 'vue'
// == Components ==
import TopBar from '@/presentation/layouts/TopBar/TopBar.vue'
import AppFooter from '@/presentation/layouts/AppFooter/AppFooter.vue'
import HeroCarousel from '@/presentation/components/HeroCarousel/HeroCarousel.vue'
import CategoryChips from '@/presentation/components/CategoryChips/CategoryChips.vue'
import ProductCard from '@/presentation/components/ProductCard/ProductCard.vue'
import PromoBanner from '@/presentation/components/PromoBanner/PromoBanner.vue'
import SectionHeader from '@/presentation/components/SectionHeader/SectionHeader.vue'
// == Styles ==
import { Page, PageLogo, PageLogoImg, Section, ProductsGrid } from './HomePage.styles'
// == Animations ==
import { animateLogo } from './HomePage.animations'
// == State ==
import { useDrinks } from '@/application/composables/useDrinks'

const { categories, popular, activeFilter, filteredCatalog, filterBy } = useDrinks()

const logoRef = ref<HTMLElement | null>(null)

onMounted(() => {
  animateLogo(logoRef)
})
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
      <CategoryChips :categories="categories" :active="activeFilter" @select="filterBy" />
    </Section>

    <!-- Catalog Grid -->
    <Section>
      <SectionHeader eyebrow="Catalogo" title="Licores Seleccionados" />
      <ProductsGrid>
        <ProductCard v-for="drink in filteredCatalog" :key="drink.id" :drink="drink" />
      </ProductsGrid>
    </Section>

    <!-- Promo Banner -->
    <Section>
      <PromoBanner />
    </Section>

    <!-- Popular / Lo Mas Pedido -->
    <Section>
      <SectionHeader eyebrow="Recomendados de la Noche" title="Lo Mas Pedido" />
      <ProductsGrid>
        <ProductCard v-for="drink in popular" :key="drink.id" :drink="drink" />
      </ProductsGrid>
    </Section>

    <!-- Footer -->
    <AppFooter />
  </Page>
</template>
