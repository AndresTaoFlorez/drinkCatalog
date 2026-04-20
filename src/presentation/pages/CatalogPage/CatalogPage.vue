<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import type { Drink, DrinkCategoryChip } from '@/domain/models/drink.model'
import { createDrinkRepository } from '@/infrastructure'
import TopBar from '@/presentation/layouts/TopBar/TopBar.vue'
import AppFooter from '@/presentation/layouts/AppFooter/AppFooter.vue'
import ProductCard from '@/presentation/components/ProductCard/ProductCard.vue'
import {
  Page, Content, Header, Eyebrow, Title, Subtitle,
  Grid, ChipRow, ChipLink
} from './CatalogPage.styles'

/**
 * Category catalog page showing all products for a specific category.
 */
const route = useRoute()
const router = useRouter()
const repo = createDrinkRepository()

const categories = ref<DrinkCategoryChip[]>([])
const allDrinks = ref<Drink[]>([])

const currentCategory = computed(() => route.params.category as string)

const currentLabel = computed(() => {
  const cat = categories.value.find((c) => c.id === currentCategory.value)
  return cat?.label ?? currentCategory.value
})

const filteredDrinks = computed(() => {
  if (currentCategory.value === 'todos') return allDrinks.value
  return allDrinks.value.filter((d) => d.category === currentCategory.value)
})

/** Navigate to another category. */
function goToCategory(id: string) {
  router.push({ name: 'catalog', params: { category: id } })
}

onMounted(async () => {
  const [all, cats] = await Promise.all([
    repo.getAll(),
    repo.getCategories(),
  ])
  allDrinks.value = all
  categories.value = cats
})
</script>

<template>
  <Page>
    <TopBar />

    <Content>
      <Header>
        <Eyebrow>Catalogo</Eyebrow>
        <Title>{{ currentLabel }}</Title>
        <Subtitle>{{ filteredDrinks.length }} {{ filteredDrinks.length === 1 ? 'producto disponible' : 'productos disponibles' }}</Subtitle>
      </Header>

      <!-- Category chips for switching -->
      <ChipRow>
        <ChipLink
          v-for="cat in categories"
          :key="cat.id"
          :data-active="cat.id === currentCategory ? '' : undefined"
          @click="goToCategory(cat.id)"
        >
          {{ cat.label }}
        </ChipLink>
      </ChipRow>

      <Grid>
        <ProductCard v-for="drink in filteredDrinks" :key="drink.id" :drink="drink" />
      </Grid>
    </Content>

    <AppFooter />
  </Page>
</template>
